window.MATERIALS = [

  // ===== existing =====

  {
    id: "concrete",
    name: "Concrete",
    description: "Clean, dry, uncoated concrete in a standard untreated state.",
    reflectance: { min: 0.20, max: 0.30 },
    albedo: { min: [0.40,0.40,0.40], max: [0.55,0.55,0.55] },
    roughness: { min: 0.80, max: 0.95 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Standard raw concrete"]
  },

  {
    id: "plaster",
    name: "Plaster",
    description: "Clean plaster wall",
    reflectance: { min: 0.50, max: 0.75 },
    albedo: { min: [0.60,0.60,0.58], max: [0.80,0.80,0.78] },
    roughness: { min: 0.65, max: 0.85 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Interior wall"]
  },

  {
    id: "wood_light",
    name: "Wood (Light)",
    description: "Raw light wood",
    reflectance: { min: 0.35, max: 0.50 },
    albedo: { min: [0.45,0.36,0.24], max: [0.65,0.54,0.38] },
    roughness: { min: 0.45, max: 0.70 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Uncoated wood"]
  },

  {
    id: "rubber",
    name: "Rubber",
    description: "Standard rubber",
    reflectance: { min: 0.05, max: 0.10 },
    albedo: { min: [0.08,0.08,0.08], max: [0.18,0.18,0.18] },
    roughness: { min: 0.70, max: 0.90 },
    metallic: 0,
    specular: 0.375,
    f0: 0.03,
    notes: ["Dark polymer"]
  },

  {
    id: "aluminium",
    name: "Aluminium",
    description: "Bare aluminium",
    reflectance: { min: 0.80, max: 0.91 },
    albedo: { min: [0.75,0.75,0.75], max: [0.91,0.91,0.91] },
    roughness: { min: 0.10, max: 0.30 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },


  // ===== new =====

  {
    id: "brick",
    name: "Brick",
    description: "Clean red brick",
    reflectance: { min: 0.20, max: 0.35 },
    albedo: { min: [0.45,0.18,0.12], max: [0.65,0.25,0.18] },
    roughness: { min: 0.75, max: 0.90 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Matte mineral"]
  },

  {
    id: "ceramic",
    name: "Ceramic",
    description: "Unglazed ceramic",
    reflectance: { min: 0.40, max: 0.60 },
    albedo: { min: [0.55,0.55,0.55], max: [0.75,0.75,0.75] },
    roughness: { min: 0.50, max: 0.75 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Clay material"]
  },

  {
    id: "steel",
    name: "Steel",
    description: "Clean steel",
    reflectance: { min: 0.55, max: 0.66 },
    albedo: { min: [0.55,0.55,0.55], max: [0.66,0.66,0.66] },
    roughness: { min: 0.10, max: 0.35 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal"]
  },

  {
    id: "copper",
    name: "Copper",
    description: "Clean copper",
    reflectance: { min: 0.75, max: 0.92 },
    albedo: { min: [0.85,0.50,0.40], max: [0.98,0.66,0.56] },
    roughness: { min: 0.10, max: 0.30 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal"]
  },

  {
    id: "glass",
    name: "Glass",
    description: "Clear glass",
    reflectance: { min: 0.04, max: 0.08 },
    albedo: { min: [0.90,0.90,0.90], max: [1.00,1.00,1.00] },
    roughness: { min: 0.00, max: 0.05 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    special: "transmissive",
    notes: ["Use transmission shader"]
  },

  {
    id: "plastic",
    name: "Plastic",
    description: "Generic plastic",
    reflectance: { min: 0.20, max: 0.50 },
    albedo: { min: [0.30,0.30,0.30], max: [0.70,0.70,0.70] },
    roughness: { min: 0.25, max: 0.60 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Wide range"]
  },

  {
    id: "fabric",
    name: "Fabric",
    description: "Cloth",
    reflectance: { min: 0.30, max: 0.60 },
    albedo: { min: [0.35,0.35,0.35], max: [0.65,0.65,0.65] },
    roughness: { min: 0.70, max: 0.95 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    special: "cloth",
    notes: ["Very rough"]
  },

  {
    id: "asphalt",
    name: "Asphalt",
    description: "Road asphalt",
    reflectance: { min: 0.05, max: 0.15 },
    albedo: { min: [0.08,0.08,0.08], max: [0.20,0.20,0.20] },
    roughness: { min: 0.80, max: 0.95 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Dark mineral"]
  },

  {
    id: "snow",
    name: "Snow",
    description: "Clean snow",
    reflectance: { min: 0.80, max: 0.95 },
    albedo: { min: [0.85,0.85,0.85], max: [1.00,1.00,1.00] },
    roughness: { min: 0.50, max: 0.80 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["High reflectance"]
  },

  {
    id: "skin",
    name: "Skin",
    description: "Human skin",
    reflectance: { min: 0.35, max: 0.55 },
    albedo: { min: [0.45,0.32,0.28], max: [0.65,0.45,0.40] },
    roughness: { min: 0.35, max: 0.55 },
    metallic: 0,
    specular: 0.35,
    f0: 0.028,
    special: "sss",
    notes: ["Use SSS"]
  },

  // ===== metals =====

  {
    id: "gold",
    name: "Gold",
    description: "Polished gold",
    reflectance: { min: 0.85, max: 0.95 },
    albedo: { min: [0.90,0.65,0.22], max: [1.00,0.75,0.35] },
    roughness: { min: 0.05, max: 0.25 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  {
    id: "silver",
    name: "Silver",
    description: "Polished silver",
    reflectance: { min: 0.90, max: 0.98 },
    albedo: { min: [0.90,0.88,0.82], max: [0.98,0.96,0.92] },
    roughness: { min: 0.05, max: 0.20 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  {
    id: "iron",
    name: "Iron",
    description: "Bare cast/wrought iron",
    reflectance: { min: 0.50, max: 0.60 },
    albedo: { min: [0.52,0.53,0.54], max: [0.60,0.61,0.62] },
    roughness: { min: 0.25, max: 0.45 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  {
    id: "chrome",
    name: "Chrome",
    description: "Highly polished chrome plating",
    reflectance: { min: 0.60, max: 0.70 },
    albedo: { min: [0.55,0.56,0.55], max: [0.65,0.66,0.65] },
    roughness: { min: 0.02, max: 0.10 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow", "Near-mirror finish"]
  },

  {
    id: "brass",
    name: "Brass",
    description: "Polished brass",
    reflectance: { min: 0.70, max: 0.85 },
    albedo: { min: [0.80,0.65,0.35], max: [0.92,0.80,0.48] },
    roughness: { min: 0.15, max: 0.40 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  {
    id: "titanium",
    name: "Titanium",
    description: "Bare titanium",
    reflectance: { min: 0.45, max: 0.58 },
    albedo: { min: [0.50,0.45,0.40], max: [0.60,0.55,0.50] },
    roughness: { min: 0.20, max: 0.45 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  {
    id: "zinc",
    name: "Zinc",
    description: "Galvanized zinc coating",
    reflectance: { min: 0.50, max: 0.62 },
    albedo: { min: [0.55,0.56,0.58], max: [0.65,0.66,0.68] },
    roughness: { min: 0.30, max: 0.55 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow", "Galvanized finish"]
  },

  {
    id: "nickel",
    name: "Nickel",
    description: "Polished nickel plating",
    reflectance: { min: 0.58, max: 0.68 },
    albedo: { min: [0.60,0.56,0.50], max: [0.70,0.65,0.58] },
    roughness: { min: 0.10, max: 0.30 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  {
    id: "platinum",
    name: "Platinum",
    description: "Polished platinum",
    reflectance: { min: 0.58, max: 0.70 },
    albedo: { min: [0.60,0.55,0.50], max: [0.72,0.66,0.60] },
    roughness: { min: 0.05, max: 0.25 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  {
    id: "lead",
    name: "Lead",
    description: "Oxidized lead surface",
    reflectance: { min: 0.30, max: 0.50 },
    albedo: { min: [0.42,0.42,0.40], max: [0.55,0.54,0.52] },
    roughness: { min: 0.40, max: 0.65 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow", "Dull due to oxide layer"]
  },

  {
    id: "tin",
    name: "Tin",
    description: "Bare tin",
    reflectance: { min: 0.70, max: 0.85 },
    albedo: { min: [0.72,0.72,0.70], max: [0.85,0.85,0.83] },
    roughness: { min: 0.20, max: 0.40 },
    metallic: 1,
    specular: null,
    f0: null,
    notes: ["Metal workflow"]
  },

  // ===== minerals & stone =====

  {
    id: "marble",
    name: "Marble",
    description: "Polished marble",
    reflectance: { min: 0.45, max: 0.70 },
    albedo: { min: [0.72,0.70,0.66], max: [0.90,0.88,0.84] },
    roughness: { min: 0.05, max: 0.35 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    special: "sss",
    notes: ["Polished stone", "Often paired with an SSS layer"]
  },

  {
    id: "granite",
    name: "Granite",
    description: "Polished/raw granite",
    reflectance: { min: 0.15, max: 0.30 },
    albedo: { min: [0.30,0.28,0.26], max: [0.50,0.48,0.45] },
    roughness: { min: 0.30, max: 0.60 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Speckled mineral"]
  },

  {
    id: "limestone",
    name: "Limestone",
    description: "Raw limestone",
    reflectance: { min: 0.30, max: 0.45 },
    albedo: { min: [0.55,0.52,0.45], max: [0.75,0.72,0.65] },
    roughness: { min: 0.60, max: 0.85 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Pale sedimentary rock"]
  },

  {
    id: "sandstone",
    name: "Sandstone",
    description: "Raw sandstone",
    reflectance: { min: 0.25, max: 0.40 },
    albedo: { min: [0.50,0.38,0.28], max: [0.68,0.55,0.40] },
    roughness: { min: 0.65, max: 0.88 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Warm sedimentary rock"]
  },

  {
    id: "slate",
    name: "Slate",
    description: "Cut slate",
    reflectance: { min: 0.08, max: 0.18 },
    albedo: { min: [0.12,0.13,0.15], max: [0.25,0.27,0.30] },
    roughness: { min: 0.35, max: 0.65 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Dark fine-grained rock"]
  },

  {
    id: "obsidian",
    name: "Obsidian",
    description: "Volcanic glass",
    reflectance: { min: 0.04, max: 0.06 },
    albedo: { min: [0.01,0.01,0.02], max: [0.05,0.05,0.06] },
    roughness: { min: 0.02, max: 0.15 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Glassy, near-black"]
  },

  {
    id: "sand",
    name: "Sand",
    description: "Dry sand",
    reflectance: { min: 0.30, max: 0.45 },
    albedo: { min: [0.55,0.45,0.30], max: [0.75,0.65,0.45] },
    roughness: { min: 0.80, max: 0.95 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Granular terrain"]
  },

  {
    id: "dirt",
    name: "Dirt / Soil",
    description: "Dry dirt/soil",
    reflectance: { min: 0.08, max: 0.18 },
    albedo: { min: [0.15,0.10,0.07], max: [0.30,0.22,0.15] },
    roughness: { min: 0.85, max: 0.98 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Terrain/ground cover"]
  },

  {
    id: "gravel",
    name: "Gravel",
    description: "Crushed stone gravel",
    reflectance: { min: 0.15, max: 0.28 },
    albedo: { min: [0.25,0.24,0.22], max: [0.42,0.40,0.38] },
    roughness: { min: 0.75, max: 0.92 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Mixed mineral aggregate"]
  },

  {
    id: "chalk",
    name: "Chalk",
    description: "Soft white chalk",
    reflectance: { min: 0.75, max: 0.92 },
    albedo: { min: [0.85,0.85,0.83], max: [0.97,0.97,0.95] },
    roughness: { min: 0.90, max: 0.99 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Extremely diffuse, near-Lambertian"]
  },

  // ===== organic & liquid =====

  {
    id: "leather",
    name: "Leather",
    description: "Untreated leather",
    reflectance: { min: 0.05, max: 0.12 },
    albedo: { min: [0.10,0.06,0.04], max: [0.35,0.22,0.15] },
    roughness: { min: 0.40, max: 0.70 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Organic, variable grain"]
  },

  {
    id: "wax",
    name: "Wax",
    description: "Candle/paraffin wax",
    reflectance: { min: 0.45, max: 0.65 },
    albedo: { min: [0.75,0.72,0.65], max: [0.92,0.88,0.80] },
    roughness: { min: 0.25, max: 0.50 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    special: "sss",
    notes: ["Semi-translucent, pairs well with SSS"]
  },

  {
    id: "wood_dark",
    name: "Wood (Dark)",
    description: "Raw dark/stained wood",
    reflectance: { min: 0.10, max: 0.20 },
    albedo: { min: [0.10,0.06,0.04], max: [0.25,0.16,0.10] },
    roughness: { min: 0.40, max: 0.65 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Companion to Wood (Light)"]
  },

  {
    id: "bark",
    name: "Bark",
    description: "Tree bark",
    reflectance: { min: 0.04, max: 0.10 },
    albedo: { min: [0.08,0.06,0.04], max: [0.20,0.15,0.10] },
    roughness: { min: 0.85, max: 0.97 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Very rough, organic"]
  },

  {
    id: "paper",
    name: "Paper",
    description: "Uncoated white paper",
    reflectance: { min: 0.55, max: 0.75 },
    albedo: { min: [0.75,0.75,0.72], max: [0.92,0.92,0.90] },
    roughness: { min: 0.85, max: 0.97 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Fibrous, near-Lambertian"]
  },

  {
    id: "cardboard",
    name: "Cardboard",
    description: "Corrugated cardboard",
    reflectance: { min: 0.25, max: 0.40 },
    albedo: { min: [0.45,0.35,0.24], max: [0.62,0.50,0.36] },
    roughness: { min: 0.80, max: 0.93 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Fibrous, matte"]
  },

  {
    id: "cork",
    name: "Cork",
    description: "Natural cork",
    reflectance: { min: 0.18, max: 0.32 },
    albedo: { min: [0.45,0.32,0.20], max: [0.62,0.46,0.30] },
    roughness: { min: 0.80, max: 0.92 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Porous, matte"]
  },

  {
    id: "water",
    name: "Water",
    description: "Still clean water",
    reflectance: { min: 0.02, max: 0.04 },
    albedo: { min: [0.95,0.97,1.00], max: [1.00,1.00,1.00] },
    roughness: { min: 0.00, max: 0.05 },
    metallic: 0,
    specular: 0.25,
    f0: 0.02,
    special: "transmissive",
    notes: ["Use refraction/transmission shader", "Low F0 from IOR ~1.33"]
  },

  {
    id: "ice",
    name: "Ice",
    description: "Clear/frosted ice",
    reflectance: { min: 0.03, max: 0.06 },
    albedo: { min: [0.90,0.95,0.98], max: [1.00,1.00,1.00] },
    roughness: { min: 0.05, max: 0.30 },
    metallic: 0,
    specular: 0.225,
    f0: 0.018,
    special: "transmissive",
    notes: ["Semi-transparent, consider SSS/transmission"]
  },

  // ===== artificial surfaces =====

  {
    id: "paint_glossy",
    name: "Paint (Glossy)",
    description: "Glossy painted surface",
    reflectance: { min: 0.15, max: 0.40 },
    albedo: { min: [0.20,0.20,0.20], max: [0.80,0.80,0.80] },
    roughness: { min: 0.05, max: 0.20 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Base color is highly variable by pigment"]
  },

  {
    id: "paint_matte",
    name: "Paint (Matte)",
    description: "Matte painted surface",
    reflectance: { min: 0.15, max: 0.40 },
    albedo: { min: [0.20,0.20,0.20], max: [0.80,0.80,0.80] },
    roughness: { min: 0.70, max: 0.90 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Base color is highly variable by pigment"]
  },

  {
    id: "tile_glazed",
    name: "Tile (Glazed)",
    description: "Glazed ceramic tile",
    reflectance: { min: 0.40, max: 0.60 },
    albedo: { min: [0.60,0.60,0.58], max: [0.85,0.85,0.82] },
    roughness: { min: 0.05, max: 0.20 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Glassy glaze layer over ceramic body"]
  },

  {
    id: "vinyl",
    name: "Vinyl / PVC",
    description: "Generic vinyl/PVC surface",
    reflectance: { min: 0.20, max: 0.45 },
    albedo: { min: [0.25,0.25,0.25], max: [0.65,0.65,0.65] },
    roughness: { min: 0.25, max: 0.55 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Synthetic polymer"]
  },

  {
    id: "carpet",
    name: "Carpet",
    description: "Woven carpet/rug",
    reflectance: { min: 0.20, max: 0.40 },
    albedo: { min: [0.25,0.22,0.18], max: [0.55,0.50,0.45] },
    roughness: { min: 0.90, max: 0.98 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    special: "cloth",
    notes: ["Fibrous, very rough"]
  },

  {
    id: "foam",
    name: "Foam",
    description: "Synthetic foam padding",
    reflectance: { min: 0.15, max: 0.30 },
    albedo: { min: [0.30,0.30,0.30], max: [0.55,0.55,0.55] },
    roughness: { min: 0.85, max: 0.98 },
    metallic: 0,
    specular: 0.5,
    f0: 0.04,
    notes: ["Porous, matte"]
  }

];
