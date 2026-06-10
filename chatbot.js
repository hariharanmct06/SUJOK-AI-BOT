// Sujok Acupuncture Chatbot Logic (chatbot.js)

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const btnYin = document.getElementById("btn-yin");
  const btnYang = document.getElementById("btn-yang");
  const svgYin = document.getElementById("svg-yin");
  const svgYang = document.getElementById("svg-yang");
  
  // Hand Selector Elements
  const btnLeftHand = document.getElementById("btn-left-hand");
  const btnRightHand = document.getElementById("btn-right-hand");
  
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

  // Mobile Tabs DOM Elements
  const tabMap = document.getElementById("tab-map");
  const tabChat = document.getElementById("tab-chat");
  const mainContainer = document.querySelector(".main-container");
  const chatNotification = document.getElementById("chat-notification");

  // Map Mode Selectors
  const btnModeOrgans = document.getElementById("btn-mode-organs");
  const btnModeMeridians = document.getElementById("btn-mode-meridians");
  const handMapContainer = document.getElementById("hand-map-container");

  // Language & Voice Controls Elements
  const btnLangEn = document.getElementById("btn-lang-en");
  const btnLangTa = document.getElementById("btn-lang-ta");
  const btnVoiceToggle = document.getElementById("btn-voice-toggle");
  const voiceIcon = document.getElementById("voice-icon");
  const voiceStatusText = document.getElementById("voice-status-text");
  const btnMic = document.getElementById("btn-mic");
  const micIcon = document.getElementById("mic-icon");
  const handTreatmentGuide = document.getElementById("hand-treatment-guide");

  // State
  let activeView = "yin"; // yin or yang
  let activeHand = "left"; // left or right
  let activeMode = "organs"; // organs or meridians
  let activeLanguage = "en"; // "en" or "ta"
  let voiceOutputEnabled = false;

  // 1. VIEW SWITCHING (Yin vs Yang hand map)
  function switchView(view) {
    if (view === "yin") {
      btnYin.classList.add("active");
      btnYang.classList.remove("active");
      svgYin.style.display = "block";
      svgYang.style.display = "none";
      activeView = "yin";
    } else {
      btnYang.classList.add("active");
      btnYin.classList.remove("active");
      svgYang.style.display = "block";
      svgYin.style.display = "none";
      activeView = "yang";
    }
    resetActivePoints();
  }

  btnYin.addEventListener("click", () => switchView("yin"));
  btnYang.addEventListener("click", () => switchView("yang"));

  // 2. SVG POINT INTERACTIONS
  const organPoints = document.querySelectorAll(".organ-point");
  
  function resetActivePoints() {
    document.querySelectorAll(".organ-point, .ki-dot").forEach(pt => pt.classList.remove("active"));
  }

  organPoints.forEach(point => {
    point.addEventListener("click", (e) => {
      e.stopPropagation();
      resetActivePoints();
      point.classList.add("active");
      
      const organKey = point.getAttribute("data-organ");
      handleOrganClick(organKey, point.getAttribute("id"));
    });
  });

  // Handle click outside SVG points to reset active indicator
  document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("organ-point") && !e.target.classList.contains("ki-dot")) {
      resetActivePoints();
    }
  });

  function handleOrganClick(organKey, elementId = null) {
    let organData = null;
    
    // Customize limbs based on activeHand and elementId
    if (organKey === "limbs" && elementId) {
      const isIndex = elementId.includes("left-arm");
      const isMiddle = elementId.includes("left-leg");
      const isRing = elementId.includes("right-leg");
      const isPinky = elementId.includes("right-arm");
      
      let limbName = "";
      let limbDesc = "";
      
      if (activeHand === "left") {
        if (isIndex) { limbName = "Left Arm"; limbDesc = "Index finger representing the Left Arm in Left Hand correspondence."; }
        else if (isMiddle) { limbName = "Left Leg"; limbDesc = "Middle finger representing the Left Leg in Left Hand correspondence."; }
        else if (isRing) { limbName = "Right Leg"; limbDesc = "Ring finger representing the Right Leg in Left Hand correspondence."; }
        else if (isPinky) { limbName = "Right Arm"; limbDesc = "Pinky finger representing the Right Arm in Left Hand correspondence."; }
      } else {
        // Right Hand (Mirrored)
        if (isIndex) { limbName = "Right Arm"; limbDesc = "Index finger representing the Right Arm in Right Hand correspondence."; }
        else if (isMiddle) { limbName = "Right Leg"; limbDesc = "Middle finger representing the Right Leg in Right Hand correspondence."; }
        else if (isRing) { limbName = "Left Leg"; limbDesc = "Ring finger representing the Left Leg in Right Hand correspondence."; }
        else if (isPinky) { limbName = "Left Arm"; limbDesc = "Pinky finger representing the Left Arm in Right Hand correspondence."; }
      }
      
      organData = {
        name: `${limbName} (Limb Correspondence)`,
        location: `${activeHand === "left" ? "Left" : "Right"} Hand - ${isIndex ? "Index" : isMiddle ? "Middle" : isRing ? "Ring" : "Little"} Finger`,
        details: `${limbDesc} In Sujok theory, the four fingers correspond to the limbs of the body. The middle two represent legs, and the outer two represent arms. The joints correspond to shoulder/hip, elbow/knee, and wrist/ankle from base to tip.`,
        treatment: `For pain or issues in the ${limbName.toLowerCase()}, stimulate the corresponding finger joint (base = shoulder/hip, middle = elbow/knee, tip = wrist/ankle). Use a Sujok ring massage or apply buckwheat/black pepper seeds.`,
        six_ki: "Varies (Wind/Humidity)",
        element: "Wood/Earth"
      };
    } 
    // Look up in correspondence
    else if (SUJOK_KB.correspondence[organKey]) {
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

  // Handle 6 Ki Byol Meridian Point Clicks
  function handleKiDotClick(meridianKey, kiKey) {
    const meridianData = SUJOK_KB.byolPoints[meridianKey];
    if (!meridianData) return;
    
    const pointData = meridianData.points[kiKey];
    if (!pointData) return;
    
    // Update left panel
    infoOrganName.textContent = `${meridianData.name} - ${pointData.name}`;
    infoOrganLoc.textContent = `${meridianData.side} Side - Finger Meridian Point`;
    infoOrganDesc.textContent = `You clicked the ${pointData.name} (${pointData.ki} energy) on the ${meridianData.name}. ${pointData.action}`;
    
    infoOrganMeta.style.display = "flex";
    infoMetaKi.textContent = pointData.ki;
    infoMetaElem.textContent = meridianData.side === "Yin" ? "Yin Meridian" : "Yang Meridian";
    
    infoOrganTip.style.display = "flex";
    infoTipText.textContent = `Treatment Action: ${pointData.action}`;
    
    // Trigger Bot Message response
    const clickMsg = `Clicked Byol Meridian Point: ${meridianData.name} (${pointData.ki})`;
    appendMessage("user", clickMsg);
    
    showTypingIndicator();
    setTimeout(() => {
      removeTypingIndicator();
      
      const answer = `
        <h3>${meridianData.name} - ${pointData.name}</h3>
        <p><b>Energy Quality:</b> ${pointData.ki} (Phase energy of ${meridianData.name})</p>
        <p><b>Clinical Application:</b> ${pointData.action}</p>
        <p><b>Treatment Practice:</b> To treat this, you can apply color therapy directly onto the corresponding dot (e.g. Red marker to strengthen, Blue/Black marker to weaken) or secure a seed with medical tape.</p>
      `;
      appendMessage("bot", answer);
    }, 500);
  }

  // Register 6 Ki Dots
  const kiDots = document.querySelectorAll(".ki-dot");
  kiDots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      resetActivePoints();
      dot.classList.add("active");
      
      const meridian = dot.getAttribute("data-meridian");
      const ki = dot.getAttribute("data-ki");
      handleKiDotClick(meridian, ki);
    });
  });

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

  // Chat History Array to maintain conversation context (max 10 messages)
  const chatHistory = [];

  // Helper to extract Sujok context from the local knowledge base to send to the AI
  function extractSujokContext(query) {
    const cleanQuery = query.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "").trim();
    if (cleanQuery === "") return null;

    let contextText = "";

    // 1. Check Organ Correspondence Match
    for (const key in SUJOK_KB.correspondence) {
      const organ = SUJOK_KB.correspondence[key];
      const matchFound = organ.keywords && organ.keywords.some(kw => cleanQuery.includes(kw));
      if (matchFound) {
        highlightSvgPoint(key);
        contextText += `Organ Match: ${organ.name}\nLocation: ${organ.location}\nDetails: ${organ.details}\nTreatment: ${organ.treatment}\n6 Ki Energy: ${organ.six_ki}\nFive Element: ${organ.element}\n\n`;
      }
    }

    // 2. Check Disorder Match
    if (SUJOK_KB.disorders) {
      let bestDisorder = null;
      let highestDisorderScore = 0;

      for (const key in SUJOK_KB.disorders) {
        const disorder = SUJOK_KB.disorders[key];
        let score = 0;
        
        disorder.keywords.forEach(keyword => {
          if (cleanQuery === keyword) {
            score += 10;
          } else if (cleanQuery.includes(keyword)) {
            score += keyword.split(" ").length * 2;
          }
        });

        if (score > highestDisorderScore) {
          highestDisorderScore = score;
          bestDisorder = disorder;
        }
      }

      if (bestDisorder && highestDisorderScore > 0) {
        if (bestDisorder.organLink) {
          highlightSvgPoint(bestDisorder.organLink);
        }
        contextText += `Disorder Match: ${bestDisorder.name}\nMetaphysical Aspect: ${bestDisorder.metaphysical}\nTreatment Details: ${bestDisorder.treatment.replace(/<[^>]*>/g, '')}\n\n`;
      }
    }

    return contextText || null;
  }

  async function handleUserMessage(query) {
    // Stop any ongoing speech output when a new query starts
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    appendMessage("user", query);
    showTypingIndicator();
    
    // Extract matching Sujok context (and trigger map highlights synchronously)
    const context = extractSujokContext(query);
    
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: query,
          context: context,
          history: chatHistory,
          language: activeLanguage
        })
      });
      
      removeTypingIndicator();
      
      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }
      
      const data = await response.json();
      const botResponse = data.reply;
      
      appendMessage("bot", botResponse);
      
      // Read aloud the AI response if option is enabled
      speakResponse(botResponse);
      
      // Update history
      chatHistory.push({ role: "user", content: query });
      chatHistory.push({ role: "assistant", content: botResponse });
      if (chatHistory.length > 10) {
        chatHistory.splice(0, 2); // Keep last 5 rounds of turn (10 messages)
      }
    } catch (error) {
      console.warn("Secure backend call failed. Falling back to offline local database...", error);
      
      // Offline fallback: Use the local rule-based matcher
      setTimeout(() => {
        removeTypingIndicator();
        const fallbackResponse = processQuery(query);
        appendMessage("bot", `${fallbackResponse} <p style="font-size:0.75rem;color:var(--text-muted);margin-top:0.5rem;border-top:1px dashed rgba(255,255,255,0.1);padding-top:0.3rem;"><i class="fa-solid fa-cloud-slash"></i> Offline mode: using local database.</p>`);
        
        // Read fallback aloud if option enabled
        speakResponse(fallbackResponse);
      }, 500);
    }
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

    // Show notification dot on mobile if user is browsing the map
    if (sender === "bot" && window.innerWidth <= 768 && mainContainer.classList.contains("mobile-show-map")) {
      if (chatNotification) chatNotification.style.display = "block";
    }
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

    // B. Check for Disorder Match
    if (SUJOK_KB.disorders) {
      let bestDisorder = null;
      let highestDisorderScore = 0;

      for (const key in SUJOK_KB.disorders) {
        const disorder = SUJOK_KB.disorders[key];
        let score = 0;
        
        disorder.keywords.forEach(keyword => {
          if (cleanQuery === keyword) {
            score += 10;
          } else if (cleanQuery.includes(keyword)) {
            score += keyword.split(" ").length * 2;
          }
        });

        if (score > highestDisorderScore) {
          highestDisorderScore = score;
          bestDisorder = disorder;
        }
      }

      if (bestDisorder && highestDisorderScore > 0) {
        // Highlight corresponding organ if specified
        if (bestDisorder.organLink) {
          highlightSvgPoint(bestDisorder.organLink);
        }
        
        return `
          <h3>Treatment for ${bestDisorder.name}</h3>
          <p><b>Metaphysical Aspect:</b> ${bestDisorder.metaphysical}</p>
          <div class="treatment-details">
            ${bestDisorder.treatment}
          </div>
        `;
      }
    }

    // C. Check for FAQ keywords match with scoring system
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
    let viewNeeded = "yin";
    if (organKey === "kidneys" || organKey === "spinal_cord") {
      viewNeeded = "yang";
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

  // 5. MOBILE TAB SWITCHING LOGIC
  function switchMobileTab(panelClass) {
    if (panelClass === "mobile-show-map") {
      tabMap.classList.add("active");
      tabChat.classList.remove("active");
      mainContainer.classList.remove("mobile-show-chat");
      mainContainer.classList.add("mobile-show-map");
    } else {
      tabChat.classList.add("active");
      tabMap.classList.remove("active");
      mainContainer.classList.remove("mobile-show-map");
      mainContainer.classList.add("mobile-show-chat");
      
      // Clear notification dot when switching to Chat tab
      if (chatNotification) chatNotification.style.display = "none";
      
      // Ensure chat box is scrolled down on first open
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 50);
    }
  }

  if (tabMap && tabChat) {
    tabMap.addEventListener("click", () => switchMobileTab("mobile-show-map"));
    tabChat.addEventListener("click", () => switchMobileTab("mobile-show-chat"));
  }

  // 6. HAND SELECTION LOGIC (Left vs Right Hand)
  function switchHand(hand) {
    if (hand === "right" && activeMode === "meridians") {
      return; // Enforce Left Hand restriction for 6 Ki treatments
    }
    activeHand = hand;
    if (hand === "left") {
      btnLeftHand.classList.add("active");
      btnRightHand.classList.remove("active");
      svgYin.classList.add("left-hand");
      svgYang.classList.add("left-hand");
    } else {
      btnRightHand.classList.add("active");
      btnLeftHand.classList.remove("active");
      svgYin.classList.remove("left-hand");
      svgYang.classList.remove("left-hand");
    }
    resetActivePoints();
  }

  if (btnLeftHand && btnRightHand) {
    btnLeftHand.addEventListener("click", () => switchHand("left"));
    btnRightHand.addEventListener("click", () => switchHand("right"));
  }

  // 7. MAP MODE SELECTION LOGIC (Organs vs Meridians)
  function switchMode(mode) {
    activeMode = mode;
    if (mode === "organs") {
      btnModeOrgans.classList.add("active");
      btnModeMeridians.classList.remove("active");
      handMapContainer.classList.remove("mode-meridians");
      
      // Re-enable Right Hand option
      if (btnRightHand) {
        btnRightHand.classList.remove("disabled");
        btnRightHand.removeAttribute("disabled");
        btnRightHand.style.opacity = "1";
        btnRightHand.style.cursor = "pointer";
        btnRightHand.title = "";
      }
      
      // Update guide to standard dual hand text
      if (handTreatmentGuide) {
        handTreatmentGuide.style.background = "hsla(150, 84%, 37%, 0.08)";
        handTreatmentGuide.style.borderColor = "rgba(16, 185, 129, 0.15)";
        handTreatmentGuide.innerHTML = `
          <i class="fa-solid fa-circle-info" style="color: var(--primary-light); margin-top: 2px;"></i>
          <span>
            <strong>Treatment on Both Hands:</strong> Sujok can be done on either hand. The limb correspondence mirrors: on <b>Left Hand</b>, Index is Left Arm; on <b>Right Hand</b>, Index is Right Arm. Choose the hand matching the symptom side.
          </span>
        `;
      }
    } else {
      btnModeMeridians.classList.add("active");
      btnModeOrgans.classList.remove("active");
      handMapContainer.classList.add("mode-meridians");
      
      // Force view to Left Hand (6 Ki treatments are only possible on Left Hand)
      switchHand("left");
      
      // Disable Right Hand option visually and functionally
      if (btnRightHand) {
        btnRightHand.classList.add("disabled");
        btnRightHand.setAttribute("disabled", "true");
        btnRightHand.style.opacity = "0.4";
        btnRightHand.style.cursor = "not-allowed";
        btnRightHand.title = "6 Ki Meridian treatments are mapped exclusively on the Left Hand.";
      }
      
      // Update guide to warn about Left Hand exclusive mapping
      if (handTreatmentGuide) {
        handTreatmentGuide.style.background = "hsla(38, 92%, 50%, 0.08)";
        handTreatmentGuide.style.borderColor = "rgba(245, 158, 11, 0.15)";
        handTreatmentGuide.innerHTML = `
          <i class="fa-solid fa-triangle-exclamation" style="color: #f59e0b; margin-top: 2px;"></i>
          <span>
            <strong>Left Hand Exclusive:</strong> Byol Meridian (6 Ki) energy treatments are mapped and treated exclusively on the <b>Left Hand</b> in Sujok acupuncture.
          </span>
        `;
      }
    }
    resetActivePoints();
  }

  if (btnModeOrgans && btnModeMeridians) {
    btnModeOrgans.addEventListener("click", () => switchMode("organs"));
    btnModeMeridians.addEventListener("click", () => switchMode("meridians"));
  }

  // 8. MULTILINGUAL & SPEECH ENGINE
  
  // Text-To-Speech (AI Voice Response)
  function speakResponse(text) {
    if (!voiceOutputEnabled || !window.speechSynthesis) return;

    // Clean text: remove HTML tags for proper speech synthesis reading
    const cleanText = text.replace(/<[^>]*>/g, "").trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    // Auto detect if text contains Tamil characters
    const isTamilText = /[\u0B80-\u0BFF]/.test(cleanText);
    utterance.lang = isTamilText ? "ta-IN" : "en-US";

    // Set voice properties for natural speech
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    // Attempt to select a voice matching the language
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(voice => 
      voice.lang.startsWith(isTamilText ? "ta" : "en")
    );
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    window.speechSynthesis.speak(utterance);
  }

  // Pre-load voices for speech synthesis (essential for Chrome/Safari)
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
    }
  }

  // Voice Toggle Button Event Listener
  if (btnVoiceToggle) {
    btnVoiceToggle.addEventListener("click", () => {
      voiceOutputEnabled = !voiceOutputEnabled;
      if (voiceOutputEnabled) {
        btnVoiceToggle.classList.add("active");
        voiceIcon.className = "fa-solid fa-volume-high";
        voiceStatusText.textContent = "Voice ON";
        
        // Warm up by reading a short confirmation
        speakResponse(activeLanguage === "ta" ? "ஒலி வடிவம் இயக்கப்பட்டது" : "Voice response enabled");
      } else {
        btnVoiceToggle.classList.remove("active");
        voiceIcon.className = "fa-solid fa-volume-xmark";
        voiceStatusText.textContent = "Voice OFF";
        
        // Stop speaking immediately
        window.speechSynthesis.cancel();
      }
    });
  }

  // Language Selection Event Listeners
  function updateLanguageUI(lang) {
    activeLanguage = lang;
    if (lang === "en") {
      btnLangEn.classList.add("active");
      btnLangTa.classList.remove("active");
      userInput.placeholder = "Ask about Sujok (e.g. 'How to treat a headache?', 'Tell me about the Wind energy')...";
      
      // Update quick prompts
      document.querySelector('[data-query="What is Sujok?"]').textContent = "What is Sujok?";
      document.querySelector('[data-query="Explain the Yin-Yang Principle"]').textContent = "Yin-Yang Seesaw";
      document.querySelector('[data-query="How does the 6 Ki Theory work?"]').textContent = "6 Ki (Six Energies)";
      document.querySelector('[data-query="What are Brain and Spinal Cord meridians?"]').textContent = "Brain & Spinal Cord";
      document.querySelector('[data-query="How do I use Seed Therapy?"]').textContent = "Seed Therapy";
      document.querySelector('[data-query="Explain Emotional Treatment"]').textContent = "Emotional Healing";
    } else {
      btnLangTa.classList.add("active");
      btnLangEn.classList.remove("active");
      userInput.placeholder = "சுஜோக் பற்றி கேளுங்கள் (எ.கா. 'தலைவலி குணமாக என்ன செய்ய வேண்டும்?')...";
      
      // Update quick prompts to Tamil equivalents
      document.querySelector('[data-query="What is Sujok?"]').textContent = "சுஜோக் என்றால் என்ன?";
      document.querySelector('[data-query="Explain the Yin-Yang Principle"]').textContent = "யின-யாங் தத்துவம்";
      document.querySelector('[data-query="How does the 6 Ki Theory work?"]').textContent = "6 கி (ஆறு ஆற்றல்கள்)";
      document.querySelector('[data-query="What are Brain and Spinal Cord meridians?"]').textContent = "மூளை மற்றும் தண்டுவடம்";
      document.querySelector('[data-query="How do I use Seed Therapy?"]').textContent = "விதை சிகிச்சை முறை";
      document.querySelector('[data-query="Explain Emotional Treatment"]').textContent = "மன உணர்வு சிகிச்சை";
    }
  }

  if (btnLangEn && btnLangTa) {
    btnLangEn.addEventListener("click", () => updateLanguageUI("en"));
    btnLangTa.addEventListener("click", () => updateLanguageUI("ta"));
  }

  // Speech Recognition (Speech-To-Text / Microphone)
  let recognition = null;
  let isRecording = false;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition && btnMic) {
    recognition = new SpeechRecognition();
    recognition.continuous = false; // Stop when the user pauses
    recognition.interimResults = false;

    recognition.onstart = () => {
      isRecording = true;
      btnMic.classList.add("recording");
      micIcon.className = "fa-solid fa-microphone-slash";
      userInput.placeholder = activeLanguage === "ta" ? "பேசவும் (கேட்கிறது)..." : "Listening...";
      
      // Stop speech output if recording begins to avoid self-feedback
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };

    recognition.onend = () => {
      isRecording = false;
      btnMic.classList.remove("recording");
      micIcon.className = "fa-solid fa-microphone";
      userInput.placeholder = activeLanguage === "ta"
        ? "சுஜோக் பற்றி கேளுங்கள் (எ.கா. 'தலைவலி குணமாக என்ன செய்ய வேண்டும்?')..."
        : "Ask about Sujok (e.g. 'How to treat a headache?', 'Tell me about the Wind energy')...";
    };

    recognition.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      isRecording = false;
      btnMic.classList.remove("recording");
      micIcon.className = "fa-solid fa-microphone";
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      userInput.value = transcript;
      
      // Auto-submit after voice typing completes
      setTimeout(() => {
        if (userInput.value.trim()) {
          handleUserMessage(userInput.value.trim());
          userInput.value = "";
        }
      }, 500);
    };

    btnMic.addEventListener("click", () => {
      if (isRecording) {
        recognition.stop();
      } else {
        // Set recognition language: English (en-US) or Tamil (ta-IN)
        // en-US handles phonetic Tanglish naturally into English characters
        recognition.lang = activeLanguage === "ta" ? "ta-IN" : "en-US";
        try {
          recognition.start();
        } catch (err) {
          console.error("Failed to start speech recognition:", err);
        }
      }
    });
  } else if (btnMic) {
    btnMic.style.display = "none";
    console.warn("Web Speech Recognition API not supported in this browser.");
  }
});
