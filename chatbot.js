// Sujok Acupuncture Chatbot Logic (chatbot.js)

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const btnPalmar = document.getElementById("btn-palmar");
  const btnDorsal = document.getElementById("btn-dorsal");
  const svgPalmar = document.getElementById("svg-palmar");
  const svgDorsal = document.getElementById("svg-dorsal");
  
  const chatBox = document.getElementById("chat-box");
  const chatForm = document.getElementById("chat-form");
  const userInput = document.getElementById("user-input");
  const quickPromptsList = document.getElementById("quick-prompts-list");
  
  const infoOrganName = document.getElementById("info-organ-name");
  const infoOrganLoc = document.getElementById("info-organ-loc");
  const infoOrganDesc = document.getElementById("info-organ-desc");
  const infoOrganMeta = document.getElementById("info-organ-meta");
  const infoMetaKi = document.getElementById("info-meta-ki");
  const infoMetaElem = document.getElementById("info-meta-elem");
  const infoOrganTip = document.getElementById("info-organ-tip");
  const infoTipText = document.getElementById("info-tip-text");

  // State
  let activeView = "palmar"; // palmar or dorsal

  // 1. VIEW SWITCHING (Palmar vs Dorsal hand map)
  function switchView(view) {
    if (view === "palmar") {
      btnPalmar.classList.add("active");
      btnDorsal.classList.remove("active");
      svgPalmar.style.display = "block";
      svgDorsal.style.display = "none";
      activeView = "palmar";
    } else {
      btnDorsal.classList.add("active");
      btnPalmar.classList.remove("active");
      svgDorsal.style.display = "block";
      svgPalmar.style.display = "none";
      activeView = "dorsal";
    }
    resetActivePoints();
  }

  btnPalmar.addEventListener("click", () => switchView("palmar"));
  btnDorsal.addEventListener("click", () => switchView("dorsal"));

  // 2. SVG POINT INTERACTIONS
  const organPoints = document.querySelectorAll(".organ-point");
  
  function resetActivePoints() {
    organPoints.forEach(pt => pt.classList.remove("active"));
  }

  organPoints.forEach(point => {
    point.addEventListener("click", (e) => {
      e.stopPropagation();
      resetActivePoints();
      point.classList.add("active");
      
      const organKey = point.getAttribute("data-organ");
      handleOrganClick(organKey);
    });
  });

  // Handle click outside SVG points to reset active indicator
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("organ-point")) {
      resetActivePoints();
    }
  });

  function handleOrganClick(organKey) {
    let organData = null;
    
    // Look up in correspondence
    if (SUJOK_KB.correspondence[organKey]) {
      organData = SUJOK_KB.correspondence[organKey];
    } else if (SUJOK_KB.concepts[organKey]) {
      // Fallback to concept details (like spinal cord)
      const concept = SUJOK_KB.concepts[organKey];
      organData = {
        name: concept.name,
        location: "Dorsal Spine & Thumb Center",
        details: concept.description || concept.brain || concept.spinal_cord,
        treatment: "Massage along the spine line to regulate nervous systems. Use star magnets or red color to tonify spinal energy.",
        six_ki: "Hotness (Fire)",
        element: "Fire (Metaphysical)"
      };
    }

    if (organData) {
      // Update Left Info Panel
      infoOrganName.textContent = organData.name;
      infoOrganLoc.textContent = organData.location;
      infoOrganDesc.textContent = organData.details;
      
      if (organData.six_ki && organData.element) {
        infoOrganMeta.style.display = "flex";
        infoMetaKi.textContent = organData.six_ki;
        infoMetaElem.textContent = organData.element;
      } else {
        infoOrganMeta.style.display = "none";
      }

      if (organData.treatment) {
        infoOrganTip.style.display = "flex";
        infoTipText.textContent = organData.treatment;
      } else {
        infoOrganTip.style.display = "none";
      }

      // Trigger Bot Message response
      const clickMsg = `Clicked: ${organData.name}`;
      appendMessage("user", clickMsg);
      
      showTypingIndicator();
      setTimeout(() => {
        removeTypingIndicator();
        
        const answer = `
          <h3>${organData.name} Correspondence</h3>
          <p><b>Location:</b> ${organData.location}</p>
          <p>${organData.details}</p>
          <p><b>Treatment Tip:</b> ${organData.treatment}</p>
          <p><b>Associated Energy:</b> ${organData.six_ki} (${organData.element} element)</p>
        `;
        appendMessage("bot", answer);
      }, 500);
    }
  }

  // 3. CHATBOT ENGINE
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = userInput.value.trim();
    if (!text) return;
    
    handleUserMessage(text);
    userInput.value = "";
  });

  // Handle Quick Prompts
  quickPromptsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("quick-prompt-btn")) {
      const query = e.target.getAttribute("data-query");
      handleUserMessage(query);
    }
  });

  function handleUserMessage(query) {
    appendMessage("user", query);
    showTypingIndicator();
    
    setTimeout(() => {
      removeTypingIndicator();
      const response = processQuery(query);
      appendMessage("bot", response);
    }, 700);
  }

  function appendMessage(sender, text) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("message-wrapper", sender);
    
    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = sender === "user" ? "ME" : "AI";
    
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.innerHTML = text; // allow formatted HTML output
    
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    chatBox.appendChild(wrapper);
    
    // Smooth scroll to bottom
    chatBox.scrollTo({
      top: chatBox.scrollHeight,
      behavior: "smooth"
    });
  }

  function showTypingIndicator() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("message-wrapper", "bot", "typing-wrapper");
    
    const avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = "AI";
    
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    
    const indicator = document.createElement("div");
    indicator.classList.add("typing-indicator");
    indicator.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;
    
    bubble.appendChild(indicator);
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    chatBox.appendChild(wrapper);
    chatBox.scrollTo({
      top: chatBox.scrollHeight,
      behavior: "smooth"
    });
  }

  function removeTypingIndicator() {
    const indicators = document.querySelectorAll(".typing-wrapper");
    indicators.forEach(ind => ind.remove());
  }

  // 4. KNOWLEDGE QUERY MATCHING LOGIC
  function processQuery(query) {
    const cleanQuery = query.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
    
    if (cleanQuery === "") {
      return "I didn't quite catch that. Could you please type something?";
    }

    // A. Check for Organ Match first (synthesizes dynamic reply)
    for (const key in SUJOK_KB.correspondence) {
      const organ = SUJOK_KB.correspondence[key];
      const matchFound = organ.keywords && organ.keywords.some(kw => cleanQuery.includes(kw));
      
      if (matchFound) {
        // Automatically activate corresponding SVG element
        highlightSvgPoint(key);
        
        return `
          <h3>${organ.name} Correspondence</h3>
          <p><b>Location on Hand:</b> ${organ.location}</p>
          <p>${organ.details}</p>
          <p><b>Sujok Acupressure Treatment:</b> ${organ.treatment}</p>
          <p><b>Energetic Alignment:</b> ${organ.six_ki} (${organ.element} element)</p>
        `;
      }
    }

    // B. Check for FAQ keywords match with scoring system
    let bestMatch = null;
    let highestScore = 0;

    SUJOK_KB.faq.forEach(faqItem => {
      let score = 0;
      faqItem.keywords.forEach(keyword => {
        // Exact match score
        if (cleanQuery === keyword) {
          score += 10;
        }
        // Substring match
        else if (cleanQuery.includes(keyword)) {
          score += keyword.split(" ").length * 2; // heavier weight for longer phrase matches
        }
        else if (keyword.includes(cleanQuery) && cleanQuery.length > 3) {
          score += 2;
        }
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = faqItem;
      }
    });

    if (bestMatch && highestScore > 0) {
      return bestMatch.answer;
    }

    // C. Fallback response with directory of instructions
    return `
      <h3>Sujok AI Bot Guidance</h3>
      <p>I couldn't find a direct answer to that specific question, but as an assistant trained on Prof. Park Jae Woo's lectures, I can discuss:</p>
      <ul>
        <li><b>Yin-Yang seesaw relationships</b> and full vs. hollow organs.</li>
        <li>The <b>Five Elements</b> and their Creation/Subjugation cycles.</li>
        <li>The <b>12 Meridian System</b> and <b>Byol Meridians</b>.</li>
        <li>The <b>Six Ki (Six Energies)</b>: Wind, Heat, Hotness, Humidity, Dryness, and Coldness.</li>
        <li>Treatments like <b>Seed Therapy</b>, <b>Color Therapy</b>, and <b>Emotional Treatment</b>.</li>
      </ul>
      <p>Please try rephrasing your question (e.g. <i>"What is seed therapy?"</i>, <i>"Explain the 6 Ki theory"</i>, or <i>"How to treat stomach pain"</i>), or click on any region of the hand map on the left to learn its correspondence!</p>
    `;
  }

  // Highlight points programmatically when queried via text
  function highlightSvgPoint(organKey) {
    resetActivePoints();
    
    // Detect which view is appropriate for the organ
    let viewNeeded = "palmar";
    if (organKey === "kidneys") {
      viewNeeded = "dorsal";
    }

    if (activeView !== viewNeeded) {
      switchView(viewNeeded);
    }

    // Add active class to corresponding SVG point
    let pointEl = null;
    if (organKey === "kidneys") {
      // highlight both kidneys
      document.getElementById("pt-left-kidney").classList.add("active");
      document.getElementById("pt-right-kidney").classList.add("active");
    } else {
      pointEl = document.querySelector(`[data-organ="${organKey}"]`);
      if (pointEl) {
        pointEl.classList.add("active");
      }
    }
  }
});
