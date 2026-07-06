# PBR-Material-Reference

PBR Material Reference is a small web tool for CG, rendering, and game engine workflows.

It provides realistic starting values for:

- Albedo (linear / sRGB)
- Reflectance
- Roughness
- Metallic
- Specular / F0

for common real-world materials such as concrete, wood, metal, plastic, glass, fabric, skin, snow, etc.

This tool is intended for:

- Unreal Engine
- Unity / HDRP
- Blender
- Generic PBR workflows
- Physically Based Rendering
- Lighting / shading reference
- Technical artists
- Lookdev / shader setup
- Material calibration

Live tool:

https://jacqueline37.github.io/PBR-Material-Reference/

---

## Features

- Material presets based on measured reflectance ranges
- Linear albedo + sRGB preview
- Roughness / Metallic / Specular reference
- Engine presets (Generic / Blender / Unreal / Unity)
- Color preview for albedo range
- Notes for each material

All values assume:

- clean material
- no paint
- no aging
- no dirt
- no weathering
- no coating

This makes the values suitable as base PBR references.

---

## Why this exists

Many PBR guides show only grayscale values or only reflectance.

This tool connects:

reflectance → albedo → roughness → metallic → specular

so material setup becomes easier and more consistent.

The goal is not perfect physical accuracy,
but practical values for real-time rendering.

---

## How to use

1. Open the live tool.
2. Pick a material from the dropdown (concrete, wood, metal, glass, skin, etc.).
3. Pick the engine you're working in (Generic, Blender, Unreal, or Unity/HDRP).
4. Read off the reflectance, albedo, roughness, metallic, and specular/F0 values, and copy any value straight into your shader or material editor.

---

## Supported materials

- Concrete
- Plaster
- Wood
- Rubber
- Aluminium
- Steel
- Copper
- Brick
- Ceramic
- Plastic
- Glass
- Fabric
- Asphalt
- Snow
- Skin

More materials may be added later.

---

## License

MIT

You can use this freely for:

- games
- tools
- education
- rendering
- shaders
- documentation
- tutorials

No attribution required, but appreciated.
