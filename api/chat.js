const { GoogleGenerativeAI } = require('@google/generative-ai');
const Groq = require('groq-sdk');

// Initialize API clients using environment variables
let groqClient = null;
let geminiClient = null;

if (process.env.GROQ_API_KEY) {
  groqClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
  console.log('Groq API client initialized successfully in Serverless function.');
} else {
  console.warn('Warning: GROQ_API_KEY is not defined in the environment.');
}

if (process.env.GEMINI_API_KEY) {
  geminiClient = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  console.log('Gemini API client initialized successfully in Serverless function.');
} else {
  console.warn('Warning: GEMINI_API_KEY is not defined in the environment.');
}

module.exports = async (req, res) => {
  // Only allow POST requests for the chat API
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

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

Basic facts about you and Sujok:
- You are not a doctor; you are an AI assistant designed to provide educational information about Sujok Therapy and should not replace professional medical advice.
- Sujok AI Bot was created and marketed by Hari Bots & Business Solutions.
- Contact Details: WhatsApp: +91 8667808803 / +91 8838154932 (Hari Bots & Business Solutions).
- What you can do: answer questions about Sujok Therapy, correspondence points, meridians, seed therapy, energy systems, and basic Sujok concepts.
- Sujok: Sujok is a natural healing therapy developed by Prof. Park Jae Woo from South Korea. It uses specific points on the hands and feet that correspond to different parts of the body.
- Who founded Sujok: Sujok Therapy was founded by Prof. Park Jae Woo from South Korea.
- How Sujok works: Sujok works by stimulating correspondence points on the hands and feet to help balance the body's energy and support natural healing.
- Safety: Sujok is generally considered safe when practiced correctly using non-invasive techniques.
- Learning: Sujok can be learned through books, courses, workshops, and guidance from certified practitioners.
- Seed therapy: Seed therapy involves placing seeds on specific Sujok points to stimulate healing energy naturally.
- Meridians: Meridians are energy pathways through which life energy flows throughout the body.
- Can Sujok cure diseases: Sujok is a complementary therapy that may help support health and well-being. For serious medical conditions, please consult a qualified healthcare professional.
- Can Sujok help with pain: Sujok practitioners often use correspondence points to help manage discomfort and support the body's healing process.

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
};
