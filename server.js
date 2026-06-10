const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Groq = require('groq-sdk');

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable JSON body parsing
app.use(express.json());

// Serve static assets from the current directory
app.use(express.static(path.join(__dirname)));

// Initialize API clients securely using environment variables
let groqClient = null;
let geminiClient = null;

if (process.env.GROQ_API_KEY) {
  groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log('Groq API client initialized successfully.');
} else {
  console.warn('Warning: GROQ_API_KEY is not defined in the environment.');
}

if (process.env.GEMINI_API_KEY) {
  geminiClient = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  console.log('Gemini API client initialized successfully.');
} else {
  console.warn('Warning: GEMINI_API_KEY is not defined in the environment.');
}

// Secure Chat Endpoint
app.post('/api/chat', async (req, res) => {
  const { message, context, history, language } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const userLang = language === 'ta' ? 'Tamil' : 'English';

  // System instructions to guide the AI model in Sujok methodology
  const systemInstruction = `You are a helpful, professional, and highly knowledgeable Sujok acupuncture assistant based on the lectures and teachings of Prof. Park Jae Woo.
Sujok translates to Hand ('Su') and Foot ('Jok') and uses holographic correspondence systems to balance the body's energy.
Key concepts to use in explanations when appropriate:
- Yin-Yang balance (seesaw relationship: opposing but interdependent forces)
- Five Elements (Wood, Fire, Earth, Metal, Water) and their Creation/Subjugation/Anticreation/Antisubjugation cycles.
- 12 Meridians and Byol Meridians.
- Six Ki (Wind, Heat, Hotness, Humidity, Dryness, Coldness).
- Treatment modalities: Seed therapy (using living seeds like buckwheat/black pepper), Color therapy (drawing colored circles/lines on specific points), Moxibustion, and Magnet therapy.

Language Instructions:
- The user's preferred language is: ${userLang}.
- You MUST respond in the user's preferred language. If the language is Tamil, respond in clear, grammatically correct Tamil script.
- The user might also ask questions in **Tanglish** (Tamil words written in English letters, e.g., 'thala vali ku enna pannanum', 'stomach pain epdi treat pannanum'). You must recognize Tanglish queries and answer them in fluent Tamil script (if preferred language is Tamil) or in very clear English / friendly Tanglish that explains the Sujok terms clearly.
- Keep the response tailored to the language selected: ${userLang}.

${context ? `Here is relevant reference data from the local Sujok knowledge base to guide your answer:\n${context}\n` : ''}
Use the above details and your expertise to provide an informative, clear, and encouraging response. Keep formatting clean with lists, bold text, or subheadings. Avoid overly long essays; be concise but thorough. Always advise the user that Sujok is a complementary wellness practice and to consult a professional for severe medical conditions.`;

  // 1. Try Groq (Llama 3) First
  if (groqClient) {
    try {
      const messages = [];
      messages.push({ role: 'system', content: systemInstruction });

      // Add conversation history
      if (history && Array.isArray(history)) {
        history.forEach(msg => {
          messages.push({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
          });
        });
      }

      // Add current user message
      messages.push({ role: 'user', content: message });

      const chatCompletion = await groqClient.chat.completions.create({
        messages: messages,
        model: 'llama-3.3-70b-versatile',
        temperature: 0.7,
        max_tokens: 1024,
      });

      const reply = chatCompletion.choices[0].message.content;
      return res.json({ reply, provider: 'groq' });
    } catch (error) {
      console.error('Groq API call failed. Trying Gemini fallback...', error.message);
    }
  }

  // 2. Fallback to Gemini
  if (geminiClient) {
    try {
      const modelWithSystem = geminiClient.getGenerativeModel({
        model: 'gemini-1.5-flash',
        systemInstruction: systemInstruction
      });

      // Format history for Gemini API
      const formattedHistory = [];
      if (history && Array.isArray(history)) {
        history.forEach(msg => {
          formattedHistory.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          });
        });
      }

      const chat = modelWithSystem.startChat({
        history: formattedHistory
      });

      const result = await chat.sendMessage(message);
      const reply = result.response.text();
      return res.json({ reply, provider: 'gemini' });
    } catch (error) {
      console.error('Gemini API call failed:', error.message);
    }
  }

  // 3. Fail if both providers failed or are not configured
  return res.status(500).json({ error: 'No AI provider was able to respond. Please check server logs and configuration.' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}`);
});
