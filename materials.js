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
    specular: 0.4,
    f0: 0.03,
    notes: ["Dark polymer"]
  },

  {
    id: "aluminium",
    name: "Aluminium",
    description: "Bare aluminium",
    reflectance: { min: 0.80, max: 0.90 },
    albedo: { min: [0.70,0.70,0.70], max: [0.85,0.85,0.85] },
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
    reflectance: { min: 0.60, max: 0.80 },
    albedo: { min: [0.60,0.60,0.60], max: [0.75,0.75,0.75] },
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
    reflectance: { min: 0.70, max: 0.85 },
    albedo: { min: [0.70,0.35,0.15], max: [0.85,0.45,0.20] },
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
    specular: 0.5,
    f0: 0.028,
    notes: ["Use SSS"]
  }

];
