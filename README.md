# Sujok AI Bot

An interactive, holographic acupuncture guide and wellness assistant built entirely client-side, based on the lectures of **Prof. Park Jae Woo**. 

This application translates complex metaphysical acupuncture theories (Yin-Yang, 12 Meridians, 5 Elements, and the 6 Ki Theory) into an interactive, visual web dashboard featuring a simulated AI guide and an anatomical hand correspondence map.

---

## Features

### 1. Interactive Dual-View Hand Correspondence Map
- Toggle between **Palmar (Front)** and **Dorsal (Back)** views of the hand.
- Clickable anatomical hotspots that map directly to physical organ correspondences:
  - **Head, Brain & Neck** (Thumb / Distal Phalanx)
  - **Heart** (Thenar eminence)
  - **Lungs** (Upper palm)
  - **Stomach & Spleen** (Left mid-palm)
  - **Liver** (Right mid-palm)
  - **Intestines** (Umbilicus / center and lower palm)
  - **Limbs** (Index/Little fingers for arms; Middle/Ring fingers for legs)
  - **Kidneys** (*Dorsal View* - mapped between metacarpal joints)
  - **Spine / Spinal Cord** (*Dorsal View* - runs along the center of the hand and thumb)

### 2. Smart Search & Matching Chatbot Console
- A scoring-based keyword query resolver that handles questions on:
  - Yin-Yang balance and the seesaw relationship.
  - The Five Elements (Wu Xing) cycles: Creation, Subjugation, Anticreation, and Antisubjugation.
  - The 12 Meridian System and Byol Meridians.
  - The 6 Ki (Six Energies) Theory: Wind, Heat, Hotness, Humidity, Dryness, and Coldness.
  - Treatments such as **Seed Therapy**, **Color Therapy**, and **Emotional/Mental Treatment**.
- **Autosync Highlights**: Typing questions about symptoms (e.g. *"headache"*, *"knee pain"*, or *"acidity"*) will automatically highlight the corresponding region on the SVG hand map.

### 3. Quick Reference Info Panel
- Updates in real-time when an SVG zone is clicked.
- Displays the organ name, location description, associated 6 Ki energy, Five Element category, and specific acupressure treatment tips.

---

## Tech Stack
- **Core Structure**: HTML5 semantic markup.
- **Styling**: Vanilla CSS3 using custom HSL properties, flexbox/grid layouts, glassmorphism card designs, and keyframe animations.
- **Logic & Database**: Plain JavaScript (ES6) with a structured, pre-compiled client-side knowledge base (`sujok_data.js`).

---

## Setup & Usage
1. Clone or download the repository.
2. Open `index.html` directly in any web browser.
3. No external servers or API keys are required; the application runs entirely client-side.
