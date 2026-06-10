// Sujok Acupuncture Knowledge Base (sujok_data.js)
// Based on the Lectures of Prof. Park, Jae Woo

const SUJOK_KB = {
  about: {
    title: "Sujok Acupuncture & Therapy",
    author: "Prof. Park, Jae Woo",
    origin: "First published in 1987, Seoul, South Korea. Sujok translates from Korean as 'Su' meaning Hand and 'Jok' meaning Foot.",
    philosophy: "Sujok is a holistic healing system combining ancient Eastern wisdom (Yin-Yang, Five Elements, Meridians, Six Ki) with modern scientific understandings of the body. It views the hands and feet as highly active, holographic correspondence zones that represent the entire human organism. Stimulating these zones activates the body's self-healing mechanisms without drug interventions.",
    principles: [
      "Holographic Correspondence: The hand and foot are miniature, high-fidelity models of the physical body.",
      "Yin-Yang Balance: Health is a state of dynamic harmony between Yin (cold, dense, slow, internal, passive) and Yang (hot, hollow, fast, external, active).",
      "Five Element (Wu Xing) Interactions: Categorizes organs into Wood, Fire, Earth, Metal, and Water, regulating them through Creation, Subjugation, Anticreation, and Antisubjugation cycles.",
      "12 Meridian Energy Channels: 12 energy pathways that distribute 'Ki' (vital energy) throughout the body.",
      "Six Ki (Six Energies): Wind, Heat, Hotness, Humidity, Dryness, and Coldness shape physical, emotional, and mental states."
    ]
  },

  // Main concepts definitions for easy lookups
  concepts: {
    "yinyang": {
      name: "Yin-Yang Principle",
      description: "The core law of dialectics in nature. Everything in the universe is divided into opposing but interdependent aspects: Yin and Yang. They exist in a relative seesaw relationship; when one increases, the other decreases. Harmony brings health, disharmony leads to disease, and complete separation causes death.",
      yin_traits: "Calm, cold, dark, internal, below, material, slow, dense, long-term, decreased function, passive.",
      yang_traits: "Mobile, hot, bright, external, above, ideal (non-material), fast, hollow, short-term, increased function, active.",
      body_mapping: "Right side is Yin (for men, Yang for women); left side is Yang (for men, Yin for women). Upper body is Yang, lower is Yin. Back is Yang, front is Yin."
    },
    "fiveelements": {
      name: "Five-Element Principle (Wu Xing)",
      description: "A metaphysical framework that classifies all phenomena into five categories: Wood, Fire, Earth, Metal, and Water. The interactions are governed by four distinct cycles of elements.",
      wood: "Represents rebirth, growth, flexibility, and wind energy. Associated with Liver and Gallbladder.",
      fire: "Represents evolution, heat, upward motion, and heat/hotness energy. Associated with Heart, Small Intestine, Brain, and Spinal Cord.",
      earth: "Represents centering, transformation, moisture, and humidity. Associated with Spleen and Stomach.",
      metal: "Represents contraction, decline, dry environment, and dryness. Associated with Lung and Large Intestine.",
      water: "Represents minimal activity, decay, coldness, and storage. Associated with Kidney and Urinary Bladder.",
      cycles: {
        creation: "Wood creates Fire (burns) -> Fire creates Earth (ashes) -> Earth creates Metal (mineral deposits) -> Metal creates Water (condensation) -> Water creates Wood (nourishes plant). Elements act as 'Mother' to the subsequent element ('Son').",
        subjugation: "Wood subjugates Earth (roots penetrate soil) -> Earth subjugates Water (absorbs/blocks water) -> Water subjugates Fire (extinguishes flame) -> Fire subjugates Metal (melts it) -> Metal subjugates Wood (axes cut trees). Provides strict order and space.",
        anticreation: "An element's 'Son' acts back to influence the 'Mother' indirectly. Sequence: Wood anticreates Water -> Water anticreates Metal -> Metal anticreates Earth -> Earth anticreates Fire -> Fire anticreates Wood.",
        antisubjugation: "When an element becomes excessively strong and resists the element that normally controls it: Earth antisubjugates Wood (hard desert soil resists roots) -> Wood antisubjugates Metal (blade breaks on massive trunk) -> Metal antisubjugates Fire (massive metal smothers small flame) -> Fire antisubjugates Water (large fire evaporates water) -> Water antisubjugates Earth (flood sweeps soil away)."
      }
    },
    "meridians": {
      name: "12 Meridian System",
      description: "Energy pathways on the hands and feet that correspond to the main meridians of the body, allowing remote energy balancing.",
      hand_yang: "3 Yang Meridians on the Yang (back) side of the hand: Large Intestine, Small Intestine, Spinal Cord (Triple Energizer). Flow downward.",
      foot_yin: "3 Yin Meridians on the foot: Liver, Spleen, Kidney. Flow upward.",
      foot_yang: "3 Yang Meridians on the foot: Stomach, Gall Bladder, Bladder. Flow downward.",
      hand_yin: "3 Yin Meridians on the Yin (palm) side of the hand: Heart, Brain (Pericardium), Lung. Flow upward."
    },
    "brain_spinal": {
      name: "Brain & Spinal Cord Meridians",
      description: "Prof. Park Jae Woo re-interpreted the classic Chinese concepts of Pericardium (Shin Po) and Triple Energizer (San Jiao) as the Brain and Spinal Cord. Since thought and nerve impulses are metaphysical operations manifesting physically, the Brain (Yin) and Spinal Cord (Yang) form the central control system.",
      brain: "Associated with 'Shin Po' (mind container). Controls brain activity, 5 Yin organs (Liver, Heart, Spleen, Lung, Kidney), nervous systems, emotions, and thoughts.",
      spinal_cord: "Associated with 'Triple Energizer'. Acts as the Yang transmission pair. Controls spinal cord tissues, 5 Yang organs (Gall Bladder, Small Intestine, Stomach, Large Intestine, Bladder), and links mental activity with physical action."
    },
    "sixki": {
      name: "Six Ki (Six Energies)",
      description: "An advanced metaphysical system that divides the universe's and body's energy flows into six distinct categories. Imbalances in these energies lead to physical and emotional illnesses.",
      energies: [
        { name: "Wind", element: "Wood", organs: "Liver (Yin), Gallbladder (Yang)", emotion: "Anger", attributes: "Movement, change, cramps, spasm, joints, eyes" },
        { name: "Heat", element: "Fire", organs: "Heart (Yin), Small Intestine (Yang)", emotion: "Joy (excess causes excitement)", attributes: "Blood vessels, tongue, warmth, circulation" },
        { name: "Hotness", element: "Fire (Metaphysical)", organs: "Brain / Pericardium (Yin), Spinal Cord / Triple Energizer (Yang)", emotion: "Anxiety & Love", attributes: "Nerve systems, endocrine, spirit, vital force" },
        { name: "Humidity", element: "Earth", organs: "Spleen (Yin), Stomach (Yang)", emotion: "Overthinking, Agony, Worry", attributes: "Muscles, mouth, saliva, weight, dampness" },
        { name: "Dryness", element: "Metal", organs: "Lung (Yin), Large Intestine (Yang)", emotion: "Sadness, Grief", attributes: "Skin, nose, hair, breathing, dryness, colon" },
        { name: "Coldness", element: "Water", organs: "Kidney (Yin), Urinary Bladder (Yang)", emotion: "Fear", attributes: "Bones, ears, hair, urine, reproductive organs, chilling" }
      ]
    },
    "treatment": {
      name: "Sujok Treatment Methods",
      description: "Various non-invasive methods used to stimulate active correspondence points on the hands and feet to promote healing.",
      acupressure: "Using a rounded diagnostic probe or roller to press tender spots. Pressing for 1-2 minutes stimulates the organ's healing response.",
      seed_therapy: "Applying living seeds to correspondence points using medical tape. Seeds release life-force energy. E.g., buckwheat seeds (general use), kidney beans (kidney issues), black pepper (pain, coldness). Leave for 8-24 hours.",
      color_therapy: "Applying specific colored markers to points to sedate or tonify energy. Red/Orange adds warmth/heat. Blue/Black adds coldness/sedates heat. Green adds wind/movement. Yellow adds humidity.",
      magnets: "Using micro-magnets (star magnets, bar magnets, or ring magnets) to direct energy flow along Byol meridians.",
      moxibustion: "Applying heat using moxa cigars or tiny moxa cones to warm points, particularly useful for chronic coldness, weakness, or immune deficiency."
    }
  },

  // Hand Correspondence System mappings (for interactive SVG and organ queries)
  correspondence: {
    head: {
      name: "Head, Brain, and Neck",
      keywords: ["head", "brain", "neck", "face", "headache", "migraine", "head pain", "stiff neck", "neck pain", "throat", "mouth", "tooth", "eye", "eyes", "nose", "ear", "ears"],
      location: "Thumb (Yin and Yang sides of the distal phalanx)",
      details: "The top of the thumb represents the head and brain. The face is on the soft pad of the thumb (eyes, nose, mouth). The neck corresponds to the lower joint of the thumb.",
      treatment: "For headaches, press the tip of the thumb. For neck pain or stiffness, massage the joint area of the thumb.",
      six_ki: "Hotness / Wind",
      element: "Fire / Wood"
    },
    heart: {
      name: "Heart",
      keywords: ["heart", "chest", "circulation", "cardiac", "heartbeat", "palpitations", "anxiety"],
      location: "Thenar eminence (base of thumb, left-center of the palm)",
      details: "Located in the chest cavity region of the hand, which is the muscular pad at the base of the thumb.",
      treatment: "Massaging this area improves blood circulation, calms anxiety, and stabilizes heart rhythms. Apply red color or buckwheat seeds.",
      six_ki: "Heat",
      element: "Fire"
    },
    lungs: {
      name: "Lungs",
      keywords: ["lung", "lungs", "breathing", "cough", "coughing", "asthma", "bronchitis", "respiratory", "chest congestion", "sadness", "grief"],
      location: "Chest region on palm (surrounding the Heart on both sides of the thenar eminence)",
      details: "Occupies the upper portion of the palm below the fingers, corresponding to the chest cavity.",
      treatment: "For coughs, asthma, or bronchitis, look for painful points in the upper palm. Apply black pepper seeds or color with green (for flow) or red (to warm up cold lungs).",
      six_ki: "Dryness",
      element: "Metal"
    },
    stomach: {
      name: "Stomach",
      keywords: ["stomach", "gastric", "digestion", "bloating", "acid", "acidity", "heartburn", "nausea", "vomiting", "indigestion", "worry", "overthinking"],
      location: "Left-middle area of the palm (below the diaphragm line)",
      details: "Corresponds to the digestive system on the left-central zone of the palm.",
      treatment: "For indigestion, acidity, or bloating, massage this area downward. Apply yellow color or round seeds like peas or buckwheat.",
      six_ki: "Humidity",
      element: "Earth"
    },
    liver: {
      name: "Liver",
      keywords: ["liver", "gallbladder", "gall bladder", "fatigue", "anger", "bile", "detox", "jaundice"],
      location: "Right-middle area of the palm (below the diaphragm line)",
      details: "Corresponds to the right side of the abdominal cavity on the palm, occupying a large section below the right lung zone.",
      treatment: "For fatigue, liver issues, or anger management, stimulate the right palm zone. Apply green color or seeds.",
      six_ki: "Wind",
      element: "Wood"
    },
    spleen: {
      name: "Spleen",
      keywords: ["spleen", "immune", "lymph", "blood filtering"],
      location: "Left edge of the palm, slightly below the stomach zone",
      details: "Corresponding to the spleen's position on the left side of the abdominal cavity. Spleen is responsible for filtering blood, supporting the immune system, and storing platelets.",
      treatment: "Massage this point to boost immune response or help with blood disorders. Apply yellow color.",
      six_ki: "Humidity",
      element: "Earth"
    },
    pancreas: {
      name: "Pancreas",
      keywords: ["pancreas", "diabetes", "insulin", "blood sugar", "pancreatitis"],
      location: "Horizontal band running below the stomach and liver in the upper-middle palm",
      details: "The pancreas lies horizontally in the abdomen behind the stomach. It produces insulin and glucagon to regulate blood sugar, and digestive enzymes.",
      treatment: "Excellent point for diabetes support. Apply yellow color or buckwheat seeds along the pancreas line.",
      six_ki: "Humidity",
      element: "Earth"
    },
    gallbladder: {
      name: "Gallbladder",
      keywords: ["gallbladder", "gall bladder", "gallstone", "gallstones", "bile storage"],
      location: "Directly below the liver on the right side of the upper palm",
      details: "Small pear-shaped organ that stores and concentrates bile produced by the liver, essential for digesting fats.",
      treatment: "Massage this point for fat indigestion, gallbladder pain, or temporal headaches. Use green color.",
      six_ki: "Wind",
      element: "Wood"
    },
    bladder: {
      name: "Urinary Bladder",
      keywords: ["bladder", "urinary bladder", "urination", "uti", "bedwetting", "cystitis"],
      location: "Bottom center of the palm, near the wrist crease between the middle and ring finger bases",
      details: "Represents the bladder in the pelvic cavity. Responsible for storing urine before excretion.",
      treatment: "Massage this point firmly for urinary tract infections (UTI), bladder leakage, frequent urination, or bedwetting. Tape black pepper or a red bean here.",
      six_ki: "Coldness",
      element: "Water"
    },
    kidneys: {
      name: "Kidneys",
      keywords: ["kidney", "kidneys", "renal", "lower back", "backache", "urinary", "urine", "fear", "back pain", "lumbago"],
      location: "Yang side (back) of the hand, in the depressions between the 2nd-3rd and 4th-5th metacarpal bones",
      details: "Since kidneys are located towards the back of the human body, their correspondence points are on the Yang side of the hand. There are two kidney points, shaped like beans.",
      treatment: "For lower back pain, kidney stones, or chronic fear, massage these two spots on the Yang side of the hand. Tape two kidney beans matching the orientation.",
      six_ki: "Coldness",
      element: "Water"
    },
    intestines: {
      name: "Small & Large Intestines",
      keywords: ["intestine", "intestines", "colon", "constipation", "diarrhea", "bowel", "bowels", "rectum", "umbilicus", "navel", "abdomen pain", "stomach ache", "bellyache"],
      location: "Central and lower-center of the palm",
      details: "The center of the palm represents the umbilical area and small intestines. The large intestine wraps around the center in an inverted U-shape.",
      treatment: "For constipation, massage the colon area clockwise (following bowel flow). For diarrhea, massage counter-clockwise. Seed therapy with apple or grape seeds works well.",
      six_ki: "Dryness (Large Intestines) / Heat (Small Intestines)",
      element: "Metal / Fire"
    },
    limbs: {
      name: "Limbs (Arms & Legs)",
      keywords: ["limb", "limbs", "arm", "arms", "leg", "legs", "finger", "fingers", "knee", "knees", "shoulder", "shoulders", "elbow", "elbows", "wrist", "wrists", "ankle", "ankles", "hip", "hips", "thigh", "calf", "joint pain", "joints"],
      location: "Index, Middle, Ring, and Little fingers",
      details: "In Sujok, the body is represented by the hand. The torso is the palm. The head is the thumb. The limbs are the four fingers. The middle two fingers (Middle and Ring) represent the Legs. The outer two fingers (Index and Little) represent the Arms. Joints of the fingers correspond to joints of the limbs: knuckles = shoulders/hips, middle joints = elbows/knees, tip joints = wrists/ankles.",
      treatment: "For knee pain, stimulate the middle joint of the middle or ring finger. For shoulder pain, stimulate the base joint of the index or little finger.",
      six_ki: "Varies",
      element: "Varies"
    }
  },

  // Direct Q&A database for matching user questions
  faq: [
    {
      keywords: ["what is sujok", "sujok meaning", "define sujok", "origin of sujok", "who created sujok", "invented sujok"],
      answer: "<h3>What is Sujok?</h3><p><b>Sujok</b> is a natural, non-invasive therapeutic system developed by South Korean scientist <b>Prof. Park Jae Woo</b> in 1987. In Korean, <b>'Su'</b> means hand and <b>'Jok'</b> means foot. The core concept is that the hands and feet act as miniature, holographic 'remote control' systems for the entire body. When an organ or body part is sick, it projects high-sensitivity pain points onto corresponding areas of the hands and feet. Stimulating these points (with pressure, seeds, colors, moxa, or magnets) restores energy balance and accelerates healing.</p>"
    },
    {
      keywords: ["yin yang", "yin and yang", "seesaw", "opposite", "concept of yin", "concept of yang"],
      answer: "<h3>The Yin-Yang Principle in Sujok</h3><p>Yin and Yang represent the fundamental polar forces in the universe and the human body. They exist in a dynamic, seesaw relationship where the rise of one leads to the decline of the other:</p><ul><li><b>Yin</b>: Cold, calm, dark, dense, slow, internal, material, passive. Symbolized by Water. Yin organs (viscera) include the <i>Liver, Heart, Brain, Spleen, Lung, and Kidney</i>.</li><li><b>Yang</b>: Hot, mobile, bright, hollow, fast, external, ideal (spirit), active. Symbolized by Fire. Yang organs (bowels) include the <i>Gallbladder, Small Intestine, Spinal Cord, Stomach, Large Intestine, and Bladder</i>.</li></ul><p>Health is defined by the harmony of these forces. When this balance is disrupted (excess or deficiency), symptoms arise. Complete separation of Yin and Yang results in death.</p>"
    },
    {
      keywords: ["five element", "wu xing", "wood fire earth metal water", "element cycles", "creation cycle", "subjugation", "anticreation", "antisubjugation"],
      answer: "<h3>The Five Elements and Their Cycles</h3><p>Sujok maps the five elements (Wood, Fire, Earth, Metal, Water) onto the organs and meridians. Their interactions are governed by four vital cycles:</p><ol><li><b>Creation Cycle (Mother-Son)</b>: Wood creates Fire (burns) &rarr; Fire creates Earth (ashes) &rarr; Earth creates Metal &rarr; Metal creates Water &rarr; Water creates Wood.</li><li><b>Subjugation Cycle (Control)</b>: Wood controls Earth &rarr; Earth controls Water &rarr; Water controls Fire &rarr; Fire controls Metal &rarr; Metal controls Wood.</li><li><b>Anticreation Cycle (Reverse Mother-Son)</b>: A reaction where the 'Son' elements affect 'Mother' elements in reverse.</li><li><b>Antisubjugation Cycle (Rebellion)</b>: When an element grows too strong and counter-attacks its controller (e.g., Water rebelliously flooding Earth).</li></ol><p>Adjusting these element points helps balance organ energies.</p>"
    },
    {
      keywords: ["6 ki", "six ki", "six energy", "wind heat hotness humidity dryness coldness"],
      answer: "<h3>The Six Ki (Six Energies) Theory</h3><p>The Six Ki theory is an advanced framework developed by Prof. Park Jae Woo. It categorizes energy into six qualities, each mapping to physical organs, emotions, and attributes:</p><ol><li><b>Wind (Wood)</b>: Liver/Gallbladder. Associated with movement, joints, and the emotion of <b>Anger</b>.</li><li><b>Heat (Fire)</b>: Heart/Small Intestine. Associated with circulation and the emotion of <b>Joy</b>.</li><li><b>Hotness (Metaphysical Fire)</b>: Brain/Spinal Cord. Associated with nerves, endocrine glands, and <b>Anxiety / Love</b>.</li><li><b>Humidity (Earth)</b>: Spleen/Stomach. Associated with muscles, moisture, and <b>Worry / Overthinking</b>.</li><li><b>Dryness (Metal)</b>: Lung/Large Intestine. Associated with skin, breathing, and <b>Sadness / Grief</b>.</li><li><b>Coldness (Water)</b>: Kidney/Urinary Bladder. Associated with bones, fluids, and <b>Fear</b>.</li></ol><p>Treatments involve 'tonifying' (strengthening) deficient energies or 'sedating' (weakening) excessive energies to establish a healthy balance.</p>"
    },
    {
      keywords: ["brain and spinal", "shin po", "pericardium", "triple energizer", "spinal cord"],
      answer: "<h3>Brain and Spinal Cord Meridians</h3><p>In standard Chinese medicine, the channels are translated as <i>Pericardium (Shin Po)</i> and <i>Triple Energizer (San Jiao)</i>. Prof. Park Jae Woo refined this, identifying them as the <b>Brain</b> and <b>Spinal Cord</b>:</p><ul><li><b>The Brain (Yin)</b>: Symbolized as the mind container. It controls mental thoughts, emotions, the nervous system, and coordinates the 5 Yin organs. The Brain meridian is located on the inner (Yin) side of the hand.</li><li><b>The Spinal Cord (Yang)</b>: The physical/metaphysical path that transmits brain instructions to the body and feeds sensory information back. The Spinal Cord meridian is on the outer (Yang) side of the hand.</li></ul><p>These two channels belong to the <b>Hotness</b> energy (Fire element) and are critical for neurological and psycho-emotional healing.</p>"
    },
    {
      keywords: ["seed therapy", "seeds", "how to use seeds"],
      answer: "<h3>Sujok Seed Therapy</h3><p>Seed therapy utilizes the natural life energy of seeds to stimulate correspondence points over an extended period. Because seeds are living biological units, they release vital energy to heal the matching organ.</p><ul><li><b>How to apply</b>: Find the tender correspondence point on the hand/foot, place a seed on it, and secure it with medical paper tape. Leave it for 8 to 24 hours. Press the seed occasionally.</li><li><b>Selection of seeds</b>:<ul><li><i>Buckwheat seeds</i>: Multi-purpose, good for general acupressure due to their angular shape.</li><li><i>Kidney beans</i>: Shaped like kidneys, used for kidney pain, kidney stones, and lower back issues.</li><li><i>Black pepper corns</i>: Small and hot, used for coldness, throat infections, and localized pain.</li><li><i>Grape seeds / Apple seeds</i>: Good for linear structures like the intestines.</li><li><i>Green peas</i>: Spherical, excellent for eye, breast, or stomach points.</li></ul></li></ul>"
    },
    {
      keywords: ["color therapy", "colors", "how to use colors", "color healing"],
      answer: "<h3>Sujok Color Therapy</h3><p>Color therapy uses marker pens or colored lights to adjust energy. Colors correspond to the Six Ki energies and can either strengthen (tonify) or weaken (sedate) them:</p><ul><li><b>Red / Orange</b>: Represents Heat. Warming. Stimulates blood flow, relieves coldness, and boosts energy.</li><li><b>Green</b>: Represents Wind (Wood). Promotes circulation, relieves stagnation, and reduces spasms.</li><li><b>Yellow</b>: Represents Humidity (Earth). Grounding. Nourishes muscles and digestion.</li><li><b>Blue / Black</b>: Represents Coldness (Water). Cooling. Reduces fever, inflammation, and sedates excess heat/pain.</li><li><b>White / Brown</b>: Represents Dryness (Metal). Contracting. Helps dry up excess mucus, controls swelling.</li></ul><p><b>Application</b>: Draw a small circle or paint the corresponding point on the hand/foot with the appropriate color. Keep it on for a few hours.</p>"
    },
    {
      keywords: ["constitution", "ten stem", "types of constitution"],
      answer: "<h3>Sujok Constitutions</h3><p>Every individual is born with a specific metaphysical constitution (an energetic blueprint of excess and deficiency among the 12 internal organs). It is not rigid but represents a dynamic balance:</p><ul><li><b>Yang Constitution</b>: Characterized by 3 consecutive excessive bowels (Yang organs) in the Five Element cycle. Named after the central excessive bowel.</li><li><b>Yin Constitution</b>: Characterized by 3 consecutive excessive viscera (Yin organs). Named after the central excessive viscera.</li><li><b>The Ten Stem Constitution</b>: Describes the detailed energy distribution. For example, in a <i>Yang Wood Constitution</i>, the gallbladder (Yang Wood), small intestine (Yang Fire), and bladder (Yang Water) are excessive, while the stomach (Yang Earth) and large intestine (Yang Metal) are deficient.</li></ul><p>Diagnosing the patient's constitution allows for highly effective, preventative, and deeply rooted treatments rather than just addressing symptoms.</p>"
    },
    {
      keywords: ["emotion", "emotional treatment", "anxiety", "depression", "fear", "sadness", "anger", "worry", "grief"],
      answer: "<h3>Emotional & Mental Treatment in Sujok</h3><p>Emotions are energy waves of the Six Ki. Imbalances in organs manifest as emotional states, and vice versa. Sujok allows emotional regulation by stimulating the corresponding organ points:</p><ul><li><b>Anger (Wind)</b>: Governed by the Liver. To treat explosive anger, sedate the Liver point or apply green/blue color.</li><li><b>Overthinking & Worry (Humidity)</b>: Governed by the Spleen/Stomach. Massaging the stomach area or applying yellow color helps quieten a racing mind.</li><li><b>Sadness & Grief (Dryness)</b>: Governed by the Lungs. To relieve grief, stimulate the Lung zone or apply orange/red color (Heat melts Dryness).</li><li><b>Fear (Coldness)</b>: Governed by the Kidneys. Chronic fear or phobias are treated by massaging the Kidney points on the back of the hand. Apply black pepper seeds or red/orange color (warmth controls coldness).</li><li><b>Anxiety & Over-excitement (Heat/Hotness)</b>: Governed by the Heart and Brain. Massage the Heart/Brain correspondence points to induce calmness and relaxation.</li></ul>"
    },
    {
      keywords: ["headache", "migraine", "head pain", "stiff neck", "neck pain"],
      answer: "<h3>Treating Headaches and Neck Pain</h3><p>According to the Sujok Main Correspondence system, the head and neck are mapped onto the thumb:</p><ol><li><b>Locating Points</b>: The pad of the thumb (distal phalanx) corresponds to the head and face. The joint of the thumb corresponds to the neck.</li><li><b>Find Pain Points</b>: Use a diagnostic probe, pen cap, or fingernail to search for highly sensitive points on the thumb pad (for headaches) or the thumb joint (for neck pain).</li><li><b>Treatment</b>:<ul><li>Massage the painful spots firmly for 1-2 minutes.</li><li>For a general headache, apply blue or black color to the tip of the thumb to cool down blood pressure.</li><li>Tape buckwheat seeds or black pepper seeds to the most sensitive points.</li><li>For stiff neck, roll a massage ring up and down the thumb joint, or apply warm moxa heat.</li></ul></li></ol>"
    },
    {
      keywords: ["stomach pain", "indigestion", "acidity", "constipation", "diarrhea", "bloating"],
      answer: "<h3>Treating Digestive Issues</h3><p>Digestive organs correspond to the center and left sections of the palm:</p><ul><li><b>Stomach Pain & Acidity</b>: Locate the stomach zone (left-middle of palm). Massage the area downwards (towards the wrist) to push food down and relieve acidity. Apply yellow color or tape buckwheat seeds.</li><li><b>Constipation</b>: Massage the outer ring of the palm (Large Intestine zone) in a <b>clockwise</b> direction. This simulates and assists the natural path of feces. Tape seeds along the intestinal track.</li><li><b>Diarrhea</b>: Massage the palm center in a <b>counter-clockwise</b> direction to slow down bowel movements. Apply blue/black color to cool down intestinal inflammation.</li></ul>"
    },
    {
      keywords: ["insect correspondence", "finger body mapping"],
      answer: "<h3>The Insect Correspondence System</h3><p>In addition to the Main Correspondence system, Prof. Park Jae Woo developed the <b>Insect Correspondence System</b>. In this system, each individual finger and toe represents the <i>entire body</i> in miniature:</p><ul><li><b>Tip phalanx (distal)</b>: Represents the Head and Neck.</li><li><b>Middle phalanx (medial)</b>: Represents the Chest Cavity (Lungs and Heart).</li><li><b>Base phalanx (proximal)</b>: Represents the Abdominal Cavity (Stomach, Liver, Intestines, Kidneys).</li><li><b>Sides of the finger</b>: The sides represent the arms and legs.</li></ul><p>This system is highly effective for localized treatments, enabling you to treat chest conditions on the middle phalanx of any finger, or head issues on the tip of any finger.</p>"
    }
  ]
};

// Export if running in Node, otherwise attach to window
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SUJOK_KB };
} else {
  window.SUJOK_KB = SUJOK_KB;
}
