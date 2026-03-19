const MATERIALS = [
  {
    id: "concrete",
    name: "Concrete",
    description: "Clean, dry, uncoated concrete in a standard untreated state.",
    category: "mineral",
    reflectance: { min: 0.20, max: 0.30 },
    albedo: {
      min: [0.40, 0.40, 0.40],
      max: [0.55, 0.55, 0.55]
    },
    roughness: { min: 0.80, max: 0.95 },
    metallic: 0.0,
    specular: 0.5,
    f0: 0.04,
    notes: [
      "Use this as a starting point for raw untreated concrete.",
      "Roughness carries most of the material feel.",
      "Avoid making non-metal concrete too glossy."
    ]
  },
  {
    id: "plaster",
    name: "Plaster",
    description: "Clean, dry plaster or similar matte mineral wall material.",
    category: "mineral",
    reflectance: { min: 0.50, max: 0.75 },
    albedo: {
      min: [0.60, 0.60, 0.58],
      max: [0.80, 0.80, 0.78]
    },
    roughness: { min: 0.65, max: 0.85 },
    metallic: 0.0,
    specular: 0.5,
    f0: 0.04,
    notes: [
      "Useful for bright interior wall materials.",
      "Keep it matte unless you are authoring a coated surface.",
      "Very bright plaster should still avoid pure white."
    ]
  },
  {
    id: "wood_light",
    name: "Wood (Light)",
    description: "Clean unfinished light wood without varnish or coating.",
    category: "wood",
    reflectance: { min: 0.35, max: 0.50 },
    albedo: {
      min: [0.45, 0.36, 0.24],
      max: [0.65, 0.54, 0.38]
    },
    roughness: { min: 0.45, max: 0.70 },
    metallic: 0.0,
    specular: 0.5,
    f0: 0.04,
    notes: [
      "Good for raw pale timber.",
      "Grain detail belongs mostly in albedo and normal maps.",
      "Uncoated wood should not look mirror-like."
    ]
  },
  {
    id: "rubber",
    name: "Rubber",
    description: "Clean, dry, uncoated standard rubber surface.",
    category: "polymer",
    reflectance: { min: 0.05, max: 0.10 },
    albedo: {
      min: [0.08, 0.08, 0.08],
      max: [0.18, 0.18, 0.18]
    },
    roughness: { min: 0.70, max: 0.90 },
    metallic: 0.0,
    specular: 0.4,
    f0: 0.03,
    notes: [
      "Rubber is usually dark and quite rough.",
      "Do not push metallic above zero.",
      "Most of the look comes from roughness and subtle normal detail."
    ]
  },
  {
    id: "aluminium",
    name: "Aluminium",
    description: "Clean bare aluminium in a standard untreated state.",
    category: "metal",
    reflectance: { min: 0.80, max: 0.90 },
    albedo: {
      min: [0.70, 0.70, 0.70],
      max: [0.85, 0.85, 0.85]
    },
    roughness: { min: 0.10, max: 0.30 },
    metallic: 1.0,
    specular: null,
    f0: null,
    notes: [
      "For metallic workflow, base colour represents reflective tint.",
      "Use metallic = 1.0.",
      "Visual variation mainly comes from roughness."
    ]
  }
];
