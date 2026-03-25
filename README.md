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

## Tech

This tool is made with:

- HTML
- CSS
- JavaScript
- GitHub Pages

No framework is used.

Data is stored in:

materials.js

Logic is in:

app.js

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
