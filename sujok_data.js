// Sujok Acupuncture Knowledge Base (sujok_data.js)
// Based on the Lectures of Prof. Park, Jae Woo

const SUJOK_KB = {
  about: {
    title: "Sujok AI Bot",
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

  // Database of specific clinical disorders, formulas and metaphysical interpretations
  disorders: {
    depression: {
      name: "Depression",
      keywords: ["depression", "depressed", "sadness", "grief", "melancholy", "unhappy"],
      organLink: "lungs",
      metaphysical: "A sudden attack of sadness due to a lack of achievement. Metaphysically, it mostly occurs in individuals with excessive Yang Dryness energy.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 1 Point No. 2 – Red</li>
          <li>Line No. 3 Point No. 5 – Red</li>
          <li>Line No. 2 Point No. 2 – Red</li>
          <li>Mid Line of Thumb (YANG Side) Point No. 2 - Red</li>
        </ul>
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 1 – Yellow</li>
          <li>Bar Magnet (Nail Side) Line No. 4 – White</li>
        </ul>
      `
    },
    migraine: {
      name: "Migraine",
      keywords: ["migraine", "migraines", "severe headache", "hemicrania"],
      organLink: "head",
      metaphysical: "Anger or frustration when suppressed within oneself might invite migraine. Extended hyperactivity (mental and physical) followed by sudden relaxation is also a prominent cause.",
      treatment: `
        <p><b>Physical Acupressure:</b></p>
        <ul>
          <li>Rub a Sujok massage ring on the portion of the thumb between the distal joint and nail for 1 minute, thrice a day.</li>
        </ul>
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 5 – White</li>
        </ul>
      `
    },
    weak_memory: {
      name: "Weak Memory Power",
      keywords: ["memory", "forgetful", "forgetfulness", "remember", "weak memory", "dementia"],
      organLink: "head",
      metaphysical: "Memory power may be diminished by a lack of basic satisfaction or even by an excessiveness of over-expansive, unstructured thoughts.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Apply an <b>Orange colored circle</b> at 1/3 distance between the tip of the thumb and the distal joint (measured from the tip).</li>
        </ul>
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 8 – Yellow</li>
        </ul>
      `
    },
    low_concentration: {
      name: "Low Concentration Power",
      keywords: ["concentration", "focus", "distracted", "adhd", "low concentration"],
      organLink: "head",
      metaphysical: "Over-mental flexibility and an overly imaginary, fantasy-prone character force low concentration problems.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Apply a <b>Brown colored circle</b> on the Yin surface of the thumb between the distal joint and the tip (corresponding to the area of the Agna / Third Eye Chakra).</li>
        </ul>
      `
    },
    phobia: {
      name: "Phobia & Frequent Fear",
      keywords: ["phobia", "fear", "anxiety", "frightened", "scared", "fearful"],
      organLink: "kidneys",
      metaphysical: "A lack of self-confidence or unsatisfied personalities suffer greatly from fear emotions. Connected to kidney coldness energy.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Mid line of thumb Point No. 1 (Yang side) – Orange</li>
        </ul>
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Line No. 6 – Bar Magnet Nail Side White</li>
          <li>Line No. 6 – Bar Magnet Nail Side Yellow</li>
        </ul>
      `
    },
    over_sensitivity: {
      name: "Over Sensitivity & Emotional Imbalance",
      keywords: ["sensitive", "emotional", "crying", "moody", "temperamental"],
      organLink: "heart",
      metaphysical: "Heavy possessive characters, or over-sincerity treated with humiliation, can lead to emotional over-sensitivity.",
      treatment: `
        <p><b>Formula 1:</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Tip Side) Line No. 10 – Yellow</li>
          <li><b>Color:</b> Middle Line of Thumb - Point No. 4 – Green</li>
        </ul>
        <p><b>Formula 2 (Chakra Treatment):</b></p>
        <ul>
          <li>Apply a <b>Green colored circle</b> on the middle line of the palm in the area corresponding to the Manipur (Solar Plexus) Chakra.</li>
        </ul>
      `
    },
    irregular_menses: {
      name: "Irregular Menstrual Cycle & Dysmenorrhea",
      keywords: ["period", "periods", "menstrual", "menses", "clots", "painful menses", "gynae"],
      organLink: "bladder",
      metaphysical: "Over-urbanization, negligence of traditional ornaments (like bangles and payals), and a descending order of shyness are associated with cycle disturbances.",
      treatment: `
        <p><b>For Painful Menses & Clots:</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Nail Side) Line No. 4 – White</li>
        </ul>
        <p><b>For Over-Menstrual Bleeding (Heavy Periods):</b></p>
        <ul>
          <li><b>Magnet:</b> Line No. 4 – White, Line No. 2 – Yellow</li>
          <li><b>Color:</b> Line No. 11 Points 1, 4, and 6 – Blue</li>
          <li><b>Chakra:</b> Muladhar (Root) Chakra – Blue circle</li>
        </ul>
        <p><b>For Less Menstrual Bleeding (Scanty Periods):</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Nail Side) Line No. 3 – Yellow (Both Hands)</li>
          <li><b>Chakra:</b> Muladhar (Root) Chakra – Orange circle</li>
        </ul>
      `
    },
    ovarian_cyst: {
      name: "Ovarian Cyst",
      keywords: ["cyst", "ovary", "ovarian", "ovarian cyst", "pcos", "pcod"],
      organLink: "bladder",
      metaphysical: "A sudden acquisition of arrogance at the emotional level can lead to cysts in the ovaries.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 11 Point No. 4 – Green</li>
          <li>Line No. 11 Point No. 3 – Green</li>
          <li>Line No. 11 Point No. 5 – Red</li>
          <li>Line No. 8 Point No. 4 – Green</li>
        </ul>
      `
    },
    leucoria: {
      name: "Leucoria",
      keywords: ["leucoria", "leucorrhoea", "white discharge"],
      organLink: "bladder",
      metaphysical: "A persistent tendency of grieving past incidents combined with a negative attitude can metaphysically enhance leucoria.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 11 Point No. 4 – Dark Blue</li>
          <li>Line No. 11 Point No. 6 – Dark Blue</li>
          <li>Mid Line of Thumb Points 4 & 6 – Dark Blue</li>
        </ul>
      `
    },
    miscarriage: {
      name: "Frequent Miscarriage",
      keywords: ["miscarriage", "pregnancy loss", "abortion", "pregnant"],
      organLink: "bladder",
      metaphysical: "Hyperness in mental/physical attitude, reflecting as severe anger. Patients often experience severe headaches and intolerance towards nuisances.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 5 – Draw a <b>Yellow colored band</b> starting from the lower surface of the nail down to the base of the finger.</li>
        </ul>
      `
    },
    cervical: {
      name: "Cervical Spondylosis",
      keywords: ["cervical", "neck pain", "spondylosis", "cervical spondylosis", "spine neck"],
      organLink: "spinal_cord",
      metaphysical: "Characters with a dominance of over-excitement are prone to cervical issues if exposed to odd postures or physical stress.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 3 – Yellow</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Draw a <b>Black colored circle</b> in the neck area between both joints of the thumb on the Yang (back) side.</li>
        </ul>
      `
    },
    sciatica: {
      name: "Sciatica (Leg & Lumbar Pain)",
      keywords: ["sciatica", "leg pain", "lumbar pain", "lower back pain"],
      organLink: "limbs",
      metaphysical: "Prolonged fear, over-cautiousness, or sudden physical jerks favor sciatica occurrence in the lumbar spine.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 6 – White</li>
        </ul>
        <p><b>Ring Therapy:</b></p>
        <ul>
          <li>Rub a Sujok massage ring surrounding all 3 joints of the middle finger (Leg correspondence) for 1 minute each.</li>
        </ul>
      `
    },
    back_pain: {
      name: "Back Pain & Spine Ache",
      keywords: ["back pain", "backache", "spine pain", "lumbago"],
      organLink: "spinal_cord",
      metaphysical: "An overly expansive attitude makes one prone to backaches on exposure to physical jerks.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 2 – Yellow</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>On the Yang side of the index finger, draw a thick <b>Dark Blue colored band</b> from the Neutro joint down to the base joint of the finger.</li>
        </ul>
      `
    },
    cataract: {
      name: "Cataract",
      keywords: ["cataract", "blurry vision", "eye lens", "eyesight"],
      organLink: "head",
      metaphysical: "An orthodox mentality, stubborn attitude, or constant fear may metaphysically lead to cataract formation.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 4 Point No. 1 – Orange</li>
          <li>Line No. 4 Point No. 6 – Orange</li>
          <li>Line No. 2 Point No. 1 – Orange</li>
          <li>Yang side of Thumb (core area of eyes) – Orange</li>
        </ul>
      `
    },
    deafness: {
      name: "Deafness & Hearing Loss",
      keywords: ["deafness", "hearing", "ear pain", "deaf", "hard of hearing"],
      organLink: "head",
      metaphysical: "Associated with an overly orthodox character or rare but severe excitement in one's personality.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Apply a <b>Red Color</b> over the correspondence areas of the ears on both sides of the Yin-Yang border in the first phalange of the thumb.</li>
        </ul>
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Line No. 12 – Bar Magnet Tip Side Yellow</li>
        </ul>
      `
    },
    neuropathy: {
      name: "Neuropathy (Foot Numbness)",
      keywords: ["neuropathy", "numbness", "tingling", "foot numbness", "feet numb"],
      organLink: "limbs",
      metaphysical: "Stubborn character traits or persistent fears make one highly prone to neuropathy.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 9 – Yellow</li>
          <li>Bar Magnet (Nail Side) Line No. 12 – Yellow</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 2 Point No. 1 – Red</li>
          <li>Line No. 2 Point No. 6 – Red</li>
          <li>Line No. 2 Point No. 4 – Green</li>
          <li>Line No. 2 Point No. 3 – Green</li>
        </ul>
      `
    },
    sinusitis: {
      name: "Allergic Sinusitis",
      keywords: ["sinus", "sinusitis", "runny nose", "sneezing", "congestion", "allergy"],
      organLink: "head",
      metaphysical: "An oversensitive nature or the chronic suppression of anger are recognized as leading metaphysical triggers.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 5 – White</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 5 Point No. 4 – Brown</li>
          <li>Line No. 1 Point No. 2 – Brown</li>
          <li>Line No. 3 Point No. 5 – Dark Blue</li>
          <li>Line No. 2 Point No. 4 – Brown</li>
        </ul>
      `
    },
    asthma: {
      name: "Asthma (Allergic, Pulmonary & Cardiac)",
      keywords: ["asthma", "wheezing", "breathless", "breathing issue", "asthmatic"],
      organLink: "lungs",
      metaphysical: "Commonly affects individuals who have an oversensitive nature but are reluctant to show their reactions.",
      treatment: `
        <p><b>1. Allergic Asthma:</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Nail Side) Line 5 (White), Line 3 (Yellow)</li>
          <li><b>Color:</b> Line 5 Pt 3 (Brown), Line 1 Pt 2 (Brown), Line 3 Pt 5 (Blue), Line 2 Pt 3 (Brown)</li>
        </ul>
        <p><b>2. Pulmonary Asthma:</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Nail Side) Line 1 (Yellow), Line 4 (White)</li>
          <li><b>Color:</b> Line 1 Point No. 2 – Red</li>
        </ul>
        <p><b>3. Cardiac Asthma:</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Nail Side) Line 9 (Yellow), Line 12 (Yellow)</li>
          <li><b>Color:</b> Line 9 Pt 3 & 4 (Green), Line 9 Pt 1 & 6 (Orange), Mid Line of Thumb (Yin) Pt 3 (Green) & Pt 6 (Orange)</li>
        </ul>
      `
    },
    tonsilitis: {
      name: "Tonsilitis",
      keywords: ["tonsils", "tonsilitis", "sore throat", "throat pain", "swallowing"],
      organLink: "head",
      metaphysical: "People with a dominating, unyielding mentality may suffer frequently from tonsilitis.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 4 Point No. 5 – Dark Blue</li>
          <li><b>Or:</b> Draw a <b>Brown colored circle</b> on the Yin surface of the thumb, both above and below the distal joint.</li>
        </ul>
      `
    },
    high_bp: {
      name: "High Blood Pressure (Hypertension)",
      keywords: ["hypertension", "high bp", "bp high", "blood pressure"],
      organLink: "heart",
      metaphysical: "Boasting, pride, and over-anxiety are key metaphysical elements that favor high blood pressure.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Tip Side) Line No. 2 – Yellow</li>
          <li>Bar Magnet (Tip Side) Line No. 5 – White</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 3 Point No. 1 – Dark Blue</li>
          <li>Line No. 3 Point No. 6 – Dark Blue</li>
        </ul>
      `
    },
    low_bp: {
      name: "Low Blood Pressure (Hypotension)",
      keywords: ["hypotension", "low bp", "bp low"],
      organLink: "heart",
      metaphysical: "A negative approach towards life and deep-seated inferiority complexes can result in low blood pressure.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Tip Side) Line No. 3 – Yellow</li>
        </ul>
      `
    },
    cholesterol: {
      name: "High Cholesterol",
      keywords: ["cholesterol", "lipids", "clogged arteries", "fatty"],
      organLink: "liver",
      metaphysical: "Associated with over-anxiety, sadness, or an excessive eating desire at the emotional level.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 4 Point No. 3 – Green</li>
          <li>Line No. 5 Point No. 4 – Green</li>
          <li>Line No. 1 Point No. 2 – Red</li>
          <li>Line No. 2 Point No. 3 – Green</li>
        </ul>
      `
    },
    varicose: {
      name: "Varicose Veins",
      keywords: ["varicose", "veins", "swollen veins", "varicose veins"],
      organLink: "limbs",
      metaphysical: "When expansive, developmental ideas are restricted, it can physically manifest as varicose veins.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 9 Point No. 3 – Green</li>
          <li>Line No. 9 Point No. 4 – Green / Dark Blue</li>
          <li>Line No. 9 Point No. 6 – Dark Blue</li>
        </ul>
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Line No. 4 – Bar Magnet (Nail Side) – White</li>
        </ul>
      `
    },
    addiction: {
      name: "Tobacco Addiction",
      keywords: ["tobacco", "smoking", "smoke", "addiction", "nicotine", "quit"],
      organLink: "lungs",
      metaphysical: "Attempting to match low mental levels with external excitement. Those who require constant emotional support are highly prone to addictions.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 8 Point No. 2 – Red</li>
          <li>Line No. 8 Point No. 5 – Red</li>
          <li>Midline of thumb (Yin side) Point No. 2 & Point No. 5 – Red</li>
        </ul>
      `
    },
    swelling_limbs: {
      name: "Swelling in Lower Extremities (Edema)",
      keywords: ["swelling", "edema", "fluid retention", "swollen legs", "swollen feet"],
      organLink: "limbs",
      metaphysical: "A surrendered mentality against society or a lack of victorious spirit can favor swelling in lower limbs.",
      treatment: `
        <p><b>Formula 1 (Color):</b></p>
        <ul>
          <li>Line No. 10 Point No. 4 – Green</li>
          <li>Line No. 11 Point No. 3 – Green</li>
          <li>Line No. 7 Point No. 5 – Red</li>
          <li>Line No. 8 Point No. 4 – Green</li>
        </ul>
        <p><b>Formula 2 (Magnet):</b></p>
        <ul>
          <li>Line No. 11 (Tip side) – White</li>
        </ul>
      `
    },
    height: {
      name: "Height Increase",
      keywords: ["height", "grow taller", "short stature", "increase height"],
      organLink: "limbs",
      metaphysical: "Excessive Yang wind energy (lack of tolerance towards nuisance, hastening) or an over-possessive attitude can restrict physical height.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Tip Side) Line No. 11 – White</li>
          <li>Mid Line of Thumb Tip Side (Yin Surface) – Yellow</li>
        </ul>
      `
    },
    hypothyroidism: {
      name: "Hypothyroidism",
      keywords: ["thyroid", "hypothyroid", "hypothyroidism", "thyroxine", "goitre"],
      organLink: "head",
      metaphysical: "Over-thoughtfulness, excessive desires, and constant fantasy mental levels can enhance hypothyroidism.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 4 Point No. 3 – Dark Blue</li>
          <li>Line No. 6 Point No. 1 – Dark Blue</li>
          <li>Line No. 3 Point No. 5 – Brown</li>
          <li>Line No. 2 Point No. 3 – Dark Blue</li>
        </ul>
      `
    },
    hair_fall: {
      name: "Hair Fall",
      keywords: ["hair", "hair fall", "hair loss", "baldness", "alopecia"],
      organLink: "head",
      metaphysical: "Over-ambition or an extreme sensitivity to cold can be prominent reasons promoting hair loss.",
      treatment: `
        <p><b>Formula 1:</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Tip Side) Line No. 2 – Yellow</li>
          <li><b>Color:</b> Line No. 2 Pt 6 (Black), Line No. 6 Pt 6 (Black), Mid Line of thumb (Yang) Pt 1 - Black</li>
        </ul>
        <p><b>Formula 2:</b></p>
        <ul>
          <li><b>Magnet:</b> Bar Magnet (Nail Side) Line No. 6 – White</li>
          <li><b>Color:</b> Line No. 6 Pt 1 (Yellow), Line No. 4 Pt 3 (Yellow), Line No. 1 Pt 2 (Red), Mid Line of thumb (Yang) Pt 1 – Yellow</li>
        </ul>
      `
    },
    obesity: {
      name: "Obesity & Weight Control",
      keywords: ["obesity", "fat", "weight loss", "obese", "overweight"],
      organLink: "stomach",
      metaphysical: "Seeking satisfaction through eating due to a lack of emotional satisfaction. Possessiveness or overly ambitious natures combined with a boastful personality can also trigger obesity.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 10 Point No. 4 – Green</li>
          <li>Line No. 11 Point No. 3 – Green</li>
          <li>Line No. 8 Point No. 3 – Green</li>
          <li>Line No. 8 Point No. 4 – Green</li>
        </ul>
      `
    },
    pimples: {
      name: "Pimples & Skin Brightening",
      keywords: ["pimples", "acne", "bright skin", "skin glow", "facial skin"],
      organLink: "head",
      metaphysical: "Consumption of spicy foods along with feelings of over-excitement at mental, physical, or sexual levels.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 3 – Yellow</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>On the Yin side of the thumb, apply a <b>Dark Blue color</b> in the area between the tip and the distal joint.</li>
        </ul>
      `
    },
    arthritis: {
      name: "Arthritis & Joint Problems",
      keywords: ["arthritis", "joint pain", "joints stiffness", "rheumatism"],
      organLink: "limbs",
      metaphysical: "Expansiveness or excitement, when repeatedly suppressed, can lead to joint problems like arthritis.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 4 – White</li>
          <li>Bar Magnet (Nail Side) Line No. 3 – White</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 5 Point No. 5 – Dark Blue</li>
          <li>Line No. 5 Point No. 1 – Dark Blue</li>
          <li>Line No. 5 Point No. 3 – Green</li>
          <li>Line No. 2 Point No. 5 – Dark Blue</li>
        </ul>
      `
    },
    knee_degeneration: {
      name: "Knee Joint Degeneration",
      keywords: ["knee pain", "knee degeneration", "knee cartilage", "knees"],
      organLink: "limbs",
      metaphysical: "Associated with a character profile of over-cautiousness or long-term feelings of dependency.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Tip Side) Line No. 12 – Yellow</li>
          <li>Bar Magnet (Tip Side) Line No. 9 – Yellow</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 12 Point No. 6 – Yellow</li>
          <li>Line No. 9 Point No. 2 – Red</li>
          <li>Line No. 10 Point No. 4 – Yellow</li>
          <li>Line No. 8 Point No. 2 – Red</li>
        </ul>
      `
    },
    bone_brittleness: {
      name: "Bone Brittleness (Osteoporosis)",
      keywords: ["bone", "bones", "brittleness", "osteoporosis", "fracture"],
      organLink: "limbs",
      metaphysical: "Sudden attacks of sadness due to a lack of achievement. Metaphysically linked to excessive Yang Dryness energy.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 12 – White</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 1 Point No. 2 – Red</li>
          <li>Line No. 3 Point No. 5 – Red</li>
          <li>Line No. 2 Point No. 2 – Red</li>
          <li>Mid Line of Thumb (Yang Side) Point No. 2 – Red</li>
        </ul>
      `
    },
    skin_cracks: {
      name: "Cracks on Palm & Foot",
      keywords: ["cracks", "dry skin", "heel cracks", "chapped skin"],
      organLink: "limbs",
      metaphysical: "Occurs in people who generally maintain a positive attitude but occasionally become aggressive in complaining or expressing sadness.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Apply an <b>Orange colored circle</b> on the central area of the Index and Middle fingers (Yin surface).</li>
        </ul>
      `
    },
    tennis_elbow: {
      name: "Tennis Elbow",
      keywords: ["tennis elbow", "elbow pain", "ligament pain", "elbow stiffness"],
      organLink: "limbs",
      metaphysical: "A mental attitude of showing off modernization or superiority can trigger such ligament problems.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Bar Magnet (Nail Side) Line No. 2 – Yellow</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>On the Yang side of the index finger, draw a thick <b>Dark Blue colored band</b> from the Neutro joint down to the base joint of the finger.</li>
        </ul>
      `
    },
    tooth_gums: {
      name: "Pain in Teeth & Gums",
      keywords: ["toothache", "gums", "tooth pain", "dental", "cavity"],
      organLink: "head",
      metaphysical: "Viscosity or stubbornness in behavior may prove favorable for dental/gum pain.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Draw a <b>Dark Green colored border</b> covering the nail of the thumb.</li>
        </ul>
      `
    },
    constipation: {
      name: "Constipation",
      keywords: ["constipation", "hard stool", "bowel movement"],
      organLink: "intestines",
      metaphysical: "Over-satisfaction, hyper-anger, or an over-complaining nature are common metaphysical causes.",
      treatment: `
        <p><b>Formula 1 (Color):</b> Red color in the 3rd phalange of the Index Finger (Yin surface). Apply for 4 hours daily during the day.</p>
        <p><b>Formula 2 (Magnet):</b> Bar Magnet (Nail Side) Line No. 4 – White for 2 hours daily.</p>
        <p><b>Formula 3 (Long-Term Constipation - Add to Formula 1):</b></p>
        <ul>
          <li>Line No. 1 Point No. 1 – Orange</li>
          <li>Line No. 1 Point No. 6 – Orange</li>
          <li>Mid Line of Thumb Point No. 6 – Orange</li>
        </ul>
      `
    },
    indigestion: {
      name: "Gastric & Indigestion Problems",
      keywords: ["gastric", "indigestion", "acidity", "bloating", "gas", "dyspepsia"],
      organLink: "stomach",
      metaphysical: "Anxiety-prone and emotionally sensitive personalities are common victims of gastric and indigestion problems.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 10 Point No. 4 – Dark Blue</li>
          <li>Line No. 12 Point No. 6 – Dark Blue</li>
          <li>Line No. 9 Point No. 2 – Dark Blue</li>
        </ul>
      `
    },
    frequent_urination: {
      name: "Frequent Urination",
      keywords: ["urination", "frequent urine", "pee"],
      organLink: "bladder",
      metaphysical: "Fear and anxiety along with an impulsive nature favor frequent urination.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Line No. 6 – Bar Magnet (Nail Side) – White</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 2 Point No. 6 – Orange</li>
          <li>Line No. 6 Point No. 1 – Orange</li>
        </ul>
      `
    },
    bed_wetting: {
      name: "Bed Wetting in Children",
      keywords: ["bed wetting", "bedwetting", "enuresis", "kids pee"],
      organLink: "bladder",
      metaphysical: "Hyper-kinetic activity of the mind and body in children, or a lack of mental viscosity.",
      treatment: `
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Line No. 5 – Bar Magnet (Nail Side) – White. Apply before sleeping for 3-4 hours.</li>
        </ul>
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 6 Point No. 3 – Yellow</li>
          <li>Line No. 6 Point No. 4 – Yellow</li>
          <li>Line No. 2 Point No. 3 – Yellow</li>
          <li>Line No. 2 Point No. 4 – Yellow</li>
        </ul>
      `
    },
    navel_disturbance: {
      name: "Navel Disturbance",
      keywords: ["navel", "umbilicus", "navel displacement"],
      organLink: "intestines",
      metaphysical: "Possessiveness and a conservative attitude can favor frequent navel displacements.",
      treatment: `
        <p><b>Color/Seed Therapy:</b></p>
        <ul>
          <li>Line No. 11 Point No. 4 – Green color (Apply a <b>Mung bean seed</b> over this point for 2-3 hours).</li>
          <li>Line No. 8 Point No. 4 – Green color or apply a Mung bean seed.</li>
        </ul>
      `
    },
    vomiting: {
      name: "Vomiting & Nausea",
      keywords: ["vomiting", "nausea", "throw up", "sick stomach"],
      organLink: "stomach",
      metaphysical: "Repeated symptoms of vomiting or nausea are related to a hyper-mental attitude or over-reactive character.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 5 Point No. 4 – Brown</li>
        </ul>
      `
    },
    burps: {
      name: "Frequent Burps / Belching",
      keywords: ["burp", "burps", "belching", "eructation"],
      organLink: "stomach",
      metaphysical: "Over-sincerity or showing off over-maturity can favor frequent burping.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 10 – Draw a **broad Dark Blue band** from the base of the finger up to its tip.</li>
        </ul>
      `
    },
    mouth_ulcers: {
      name: "Mouth & Tongue Ulcers",
      keywords: ["ulcer", "ulcers", "mouth ulcer", "tongue ulcer", "canker sore"],
      organLink: "head",
      metaphysical: "A lack of adjustability with excitement due to self-rigidity in nature is a main cause of mouth ulcers.",
      treatment: `
        <p><b>Formula 1:</b></p>
        <ul>
          <li>Apply a <b>Black color circle</b> on the Middle Line of the Thumb, at 1/3 distance from the distal joint towards the tip.</li>
        </ul>
        <p><b>Formula 2:</b></p>
        <ul>
          <li>Line No. 4 Point No. 2 – Brown</li>
          <li>Line No. 4 Point No. 5 – Brown</li>
        </ul>
      `
    },
    hyper_acidity: {
      name: "Hyper Acidity",
      keywords: ["hyper acidity", "reflux", "gerd", "acid reflux", "stomach burn"],
      organLink: "stomach",
      metaphysical: "Anxiety and high physical/mental stress (excessive humidity/heat energies).",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 4 Points 1, 3, and 5 – Dark Blue</li>
          <li>Line No. 2 Point No. 3 – Brown</li>
          <li>Thumb Yin Side Point No. 6 – Dark Blue</li>
        </ul>
        <p><b>Magnet Therapy:</b></p>
        <ul>
          <li>Line No. 8 Tip Side – White</li>
          <li>Line No. 4 Nail Side – White</li>
        </ul>
      `
    },
    kidney_problem: {
      name: "Kidney Problems & Nephropathy",
      keywords: ["kidney failure", "creatinine", "kidney disease", "nephropathy"],
      organLink: "kidneys",
      metaphysical: "Constant fear over a long period or an overly elderly, inflexible character can favor kidney malfunctions.",
      treatment: `
        <p><b>Color Therapy:</b></p>
        <ul>
          <li>Line No. 12 Points 2 & 6 – Red; Points 3 & 4 – Green</li>
          <li>Middle Line of Thumb Points 2 & 6 – Red; Points 3 & 4 – Green</li>
        </ul>
      `
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
      answer: "<h3>The Yin-Yang Principle in Sujok</h3><p>Yin and Yang represent the fundamental polar forces in the universe and the human body. They exist in a dynamic, seesaw relationship where the rise of one leads to the decline of the other:</p><ul><li><b>Yin</b>: Cold, calm, dark, dense, slow, internal, material, passive. Symbolized by Water. Yin organs (viscera) include the <i>Liver, Heart, Brain, Spleen, Lung, and Kidney</i>.</li><li><b>Yang</b>: Hot, mobile, bright, hollow, fast, external, ideal (spirit), active. Symbolized by Fire. Yang organs (bowels) include the <i>Gallbladder, Small Intestine, Spinal Cord, Stomach, Large Intestine, and Bladder</i>.</li></ul><p>Health is defined by the harmony of these forces. When this balance is disrupted (excess or deficiency), symptoms arise. Complete separation of Yin and Yang results in death. Yin/Yang also defines the hand surfaces: the palm is the Yin side, and the back is the Yang side.</p>"
    },
    {
      keywords: ["five element", "wu xing", "wood fire earth metal water", "element cycles", "creation cycle", "subjugation", "anticreation", "antisubjugation"],
      answer: "<h3>The Five Elements and Their Cycles</h3><p>Sujok maps the five elements (Wood, Fire, Earth, Metal, Water) onto the organs and meridians. Their interactions are governed by four vital cycles:</p><ol><li><b>Creation Cycle (Mother-Son)</b>: Wood creates Fire (burns) &rarr; Fire creates Earth (ashes) &rarr; Earth creates Metal &rarr; Metal creates Water &rarr; Water creates Wood.</li><li><b>Subjugation Cycle (Control)</b>: Wood controls Earth &rarr; Earth controls Water &rarr; Water controls Fire &rarr; Fire controls Metal &rarr; Metal controls Wood.</li><li><b>Anticreation Cycle (Reverse Mother-Son)</b>: A reaction where the 'Son' elements affect 'Mother' elements in reverse.</li><li><b>Antisubjugation Cycle (Rebellion)</b>: When an element grows too strong and counter-attacks its controller (e.g., Water rebelliously flooding Earth).</li></ol><p>Adjusting these element points helps balance organ energies.</p>"
    },
    {
      keywords: ["6 ki", "six ki", "six energy", "wind heat hotness humidity dryness coldness"],
      answer: "<h3>The Six Ki (Six Energies) Theory</h3><p>The Six Ki theory is an advanced framework developed by Prof. Park Jae Woo. It categorizes energy into six qualities, each mapping to physical organs, emotions, and attributes:</p><ol><li><b>Wind (Wood)</b>: Liver/Gallbladder. Associated with movement, joints, and the emotion of <b>Anger</b>.</li><li><b>Heat (Fire)</b>: Heart/Small Intestine. Associated with circulation and the emotion of <b>Joy</b>.</li><li><b>Hotness (Metaphysical Fire)</b>: Brain/Spinal Cord. Associated with nerves, endocrine glands, and <b>Anxiety / Love</b>.</li><li><b>Humidity (Earth)</b>: Spleen/Stomach/Pancreas. Associated with muscles, moisture, and <b>Worry / Overthinking / Agony</b>.</li><li><b>Dryness (Metal)</b>: Lung/Large Intestine. Associated with skin, breathing, and <b>Sadness / Grief</b>.</li><li><b>Coldness (Water)</b>: Kidney/Urinary Bladder. Associated with bones, fluids, and <b>Fear</b>.</li></ol><p>Treatments involve 'tonifying' (strengthening) deficient energies or 'sedating' (weakening) excessive energies to establish a healthy balance.</p>"
    },
    {
      keywords: ["brain and spinal", "shin po", "pericardium", "triple energizer", "spinal cord"],
      answer: "<h3>Brain and Spinal Cord Meridians</h3><p>In standard Chinese medicine, the channels are translated as <i>Pericardium (Shin Po)</i> and <i>Triple Energizer (San Jiao)</i>. Prof. Park Jae Woo refined this, identifying them as the <b>Brain</b> and <b>Spinal Cord</b>:</p><ul><li><b>The Brain (Yin)</b>: Symbolized as the mind container. It controls mental thoughts, emotions, the nervous system, and coordinates the 5 Yin organs. The Brain meridian is located on the inner (Yin) side of the hand.</li><li><b>The Spinal Cord (Yang)</b>: The physical/metaphysical path that transmits brain instructions to the body and feeds sensory information back. The Spinal Cord meridian is on the outer (Yang) side of the hand.</li></ul><p>These two channels belong to the <b>Hotness</b> energy (Fire element) and are critical for neurological and psycho-emotional healing.</p>"
    },
    {
      keywords: ["seed therapy", "seeds", "how to use seeds"],
      answer: "<h3>Sujok Seed Therapy</h3><p>Seed therapy utilizes the natural life energy of seeds to stimulate correspondence points over an extended period. Because seeds are living biological units, they release vital energy to heal the matching organ.</p><ul><li><b>How to apply</b>: Find the tender correspondence point on the hand/foot, place a seed on it, and secure it with medical paper tape. Leave it for 8 to 24 hours. Press the seed occasionally.</li><li><b>Selection of seeds</b>:<ul><li><i>Buckwheat seeds</i>: Multi-purpose, good for general acupressure due to their angular shape.</li><li><i>Kidney beans</i>: Shaped like kidneys, used for kidney pain, kidney stones, and lower back issues.</li><li><i>Black pepper corns</i>: Small and hot, used for coldness, throat infections, and localized pain.</li><li><i>Grape seeds / Apple seeds</i>: Good for linear structures like the intestines.</li><li><i>Green peas</i>: Spherical, excellent for eye, breast, or stomach points.</li><li><i>Mung beans (Mug grains)</i>: Oval and green, great for navel disturbances and liver points.</li></ul></li></ul>"
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
      keywords: ["triorigin", "hetro", "homo", "neutro", "neuto", "triorigin theory"],
      answer: "<h3>What is Triorigin Theory?</h3><p><b>Triorigin Theory</b> is an advanced metaphysical model developed by Prof. Park Jae Woo that explains the creation and operation of all forces in nature through four fundamental forces:</p><ul><li><b>Neuto</b>: The force of absolute rest, silence, and potential before initiation. (Associated with Coldness in Yin / Wind in Yang).</li><li><b>Hetro</b>: The force of change, movement, expansion, and diversity. (Associated with Heat in Yin / Coldness in Yang).</li><li><b>Homo</b>: The force of contraction, conservation, unification, and standardizing. (Associated with Coldness in Yin / Hotness in Yang).</li><li><b>Neutro</b>: The harmonizing force that balances Hetro and Homo to bring order, consciousness, and active existence. (Associated with Wind in Yin / Humidity in Yang).</li></ul><p>Triorigin can be applied at the <b>Branch Level</b> (specific organ meridians) or the <b>Individual Level</b> (overall body energies) to treat complex diseases like kidney failure (excess Homo in kidney) or systemic inflammation by tonifying or sedating these primary forces.</p>"
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
