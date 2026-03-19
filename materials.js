const MATERIALS = [
  {
    id: "concrete",
    name: "Concrete",
    description: "Clean, dry, uncoated concrete in a standard untreated state.",
    reflectance: "20-30%",
    albedo: "0.40-0.55",
    roughness: "0.80-0.95",
    metallic: "0.0",
    specular: "0.5",
    f0: "~0.04",
    notes: [
      "Use this as a starting point for raw untreated concrete.",
      "Roughness carries most of the material feel.",
      "Avoid making non-metal concrete too dark or too glossy."
    ],
    engines: {
      generic: {
        "Base Color": "0.40-0.55 neutral grey",
        "Metallic": "0.0",
        "Roughness": "0.80-0.95",
        "Specular": "0.5"
      },
      blender: {
        "Base Color": "0.40-0.55 grey",
        "Metallic": "0.0",
        "Roughness": "0.80-0.95",
        "Specular": "0.5"
      },
      unreal: {
        "Base Color": "0.40-0.55 grey",
        "Metallic": "0.0",
        "Roughness": "0.80-0.95",
        "Specular": "default or 0.5-like"
      },
      unity: {
        "Base Color": "0.40-0.55 grey",
        "Metallic": "0.0",
        "Smoothness": "0.05-0.20"
      }
    }
  },
  {
    id: "plaster",
    name: "Plaster",
    description: "Clean, dry plaster or similar matte mineral wall material.",
    reflectance: "50-75%",
    albedo: "0.60-0.80",
    roughness: "0.65-0.85",
    metallic: "0.0",
    specular: "0.5",
    f0: "~0.04",
    notes: [
      "Useful for bright interior wall materials.",
      "Keep it matte unless you are authoring a coated surface.",
      "Very bright plaster should still avoid pure white."
    ],
    engines: {
      generic: {
        "Base Color": "0.60-0.80 off-white",
        "Metallic": "0.0",
        "Roughness": "0.65-0.85",
        "Specular": "0.5"
      },
      blender: {
        "Base Color": "0.60-0.80 off-white",
        "Metallic": "0.0",
        "Roughness": "0.65-0.85",
        "Specular": "0.5"
      },
      unreal: {
        "Base Color": "0.60-0.80 off-white",
        "Metallic": "0.0",
        "Roughness": "0.65-0.85",
        "Specular": "default"
      },
      unity: {
        "Base Color": "0.60-0.80 off-white",
        "Metallic": "0.0",
        "Smoothness": "0.15-0.35"
      }
    }
  },
  {
    id: "wood_light",
    name: "Wood (Light)",
    description: "Clean unfinished light wood without varnish or coating.",
    reflectance: "35-50%",
    albedo: "0.45-0.65",
    roughness: "0.45-0.70",
    metallic: "0.0",
    specular: "0.5",
    f0: "~0.04",
    notes: [
      "Good for raw pale timber.",
      "Grain detail belongs mostly in albedo and normal maps.",
      "Uncoated wood should not look mirror-like."
    ],
    engines: {
      generic: {
        "Base Color": "0.45-0.65 warm light brown",
        "Metallic": "0.0",
        "Roughness": "0.45-0.70",
        "Specular": "0.5"
      },
      blender: {
        "Base Color": "0.45-0.65 warm light brown",
        "Metallic": "0.0",
        "Roughness": "0.45-0.70",
        "Specular": "0.5"
      },
      unreal: {
        "Base Color": "0.45-0.65 warm light brown",
        "Metallic": "0.0",
        "Roughness": "0.45-0.70",
        "Specular": "default"
      },
      unity: {
        "Base Color": "0.45-0.65 warm light brown",
        "Metallic": "0.0",
        "Smoothness": "0.30-0.55"
      }
    }
  },
  {
    id: "rubber",
    name: "Rubber",
    description: "Clean, dry, uncoated standard rubber surface.",
    reflectance: "5-10%",
    albedo: "0.08-0.18",
    roughness: "0.70-0.90",
    metallic: "0.0",
    specular: "0.35-0.5",
    f0: "~0.03",
    notes: [
      "Rubber is usually dark and quite rough.",
      "Do not push metallic above zero.",
      "Most of the look comes from roughness and subtle normal detail."
    ],
    engines: {
      generic: {
        "Base Color": "0.08-0.18 dark grey",
        "Metallic": "0.0",
        "Roughness": "0.70-0.90",
        "Specular": "0.35-0.5"
      },
      blender: {
        "Base Color": "0.08-0.18 dark grey",
        "Metallic": "0.0",
        "Roughness": "0.70-0.90",
        "Specular": "0.35-0.5"
      },
      unreal: {
        "Base Color": "0.08-0.18 dark grey",
        "Metallic": "0.0",
        "Roughness": "0.70-0.90",
        "Specular": "default-low"
      },
      unity: {
        "Base Color": "0.08-0.18 dark grey",
        "Metallic": "0.0",
        "Smoothness": "0.10-0.30"
      }
    }
  },
  {
    id: "aluminium",
    name: "Aluminium",
    description: "Clean bare aluminium in a standard untreated state.",
    reflectance: "80-90%",
    albedo: "0.70-0.85",
    roughness: "0.10-0.30",
    metallic: "1.0",
    specular: "metal workflow",
    f0: "metal-specific",
    notes: [
      "For metal workflow, base colour represents reflective tint.",
      "Use metallic = 1.0.",
      "Visual variation mainly comes from roughness."
    ],
    engines: {
      generic: {
        "Base Color": "0.70-0.85 metallic grey",
        "Metallic": "1.0",
        "Roughness": "0.10-0.30",
        "Specular": "not usually adjusted"
      },
      blender: {
        "Base Color": "0.70-0.85 metallic grey",
        "Metallic": "1.0",
        "Roughness": "0.10-0.30",
        "Specular": "leave default"
      },
      unreal: {
        "Base Color": "0.70-0.85 metallic grey",
        "Metallic": "1.0",
        "Roughness": "0.10-0.30",
        "Specular": "default"
      },
      unity: {
        "Base Color": "0.70-0.85 metallic grey",
        "Metallic": "1.0",
        "Smoothness": "0.70-0.90"
      }
    }
  }
];
