document.addEventListener("DOMContentLoaded", () => {
  const materialSelect = document.getElementById("materialSelect");
  const engineSelect = document.getElementById("engineSelect");

  const resultName = document.getElementById("resultName");
  const resultDesc = document.getElementById("resultDesc");
  const reflectanceValue = document.getElementById("reflectanceValue");
  const albedoLinearValue = document.getElementById("albedoLinearValue");
  const albedoSrgbValue = document.getElementById("albedoSrgbValue");
  const roughnessValue = document.getElementById("roughnessValue");
  const metallicValue = document.getElementById("metallicValue");
  const specularValue = document.getElementById("specularValue");

  const notesList = document.getElementById("notesList");
  const engineOutput = document.getElementById("engineOutput");
  const engineTitle = document.getElementById("engineTitle");

  const albedoPreview = document.getElementById("albedoPreview");
  const swatchMin = document.getElementById("swatchMin");
  const swatchMax = document.getElementById("swatchMax");
  const swatchMinText = document.getElementById("swatchMinText");
  const swatchMaxText = document.getElementById("swatchMaxText");
  const copySwatchMin = document.getElementById("copySwatchMin");
  const copySwatchMax = document.getElementById("copySwatchMax");

  const langToggle = document.getElementById("langToggle");

  if (
    !materialSelect || !engineSelect || !resultName || !resultDesc ||
    !reflectanceValue || !albedoLinearValue || !albedoSrgbValue ||
    !roughnessValue || !metallicValue || !specularValue ||
    !notesList || !engineOutput || !engineTitle ||
    !albedoPreview || !swatchMin || !swatchMax ||
    !swatchMinText || !swatchMaxText ||
    !copySwatchMin || !copySwatchMax || !langToggle
  ) {
    console.error("Required DOM elements are missing.");
    return;
  }

  if (!window.MATERIALS || !Array.isArray(window.MATERIALS) || window.MATERIALS.length === 0) {
    console.error("MATERIALS is missing or empty.");
    return;
  }

  const TRANSLATIONS = {
    en: {
      eyebrow: "PBR Material Reference",
      h1: "PBR Material Reference Values for Albedo, Roughness, Metallic, Specular",
      lead: "Select a material to get practical starting ranges for reflectance, albedo, roughness, metallic, specular, and engine-specific output.",
      aboutTitle: "About PBR Material Reference",
      aboutP1: "This tool provides PBR material reference values for albedo, roughness, metallic, specular and reflectance.",
      aboutP2: "It can be used for Unreal Engine, Unity, Blender, and generic PBR workflows.",
      aboutP3: "Supported materials include concrete, wood, metal, plastic, glass, fabric, brick, asphalt, snow, skin, gold, silver, marble, granite, leather, water, ice and more than 50 materials in total.",
      materialLabel: "Material",
      presetLabel: "Preset",
      materialReferenceTitle: "Material Reference",
      reflectance: "Reflectance",
      albedoLinear: "Albedo (Linear)",
      albedoSrgb: "Albedo (sRGB)",
      roughness: "Roughness",
      metallic: "Metallic",
      specularF0: "Specular / F0",
      albedoPreview: "Albedo Preview",
      minimum: "Minimum",
      maximum: "Maximum",
      copy: "Copy",
      copied: "Copied",
      copyMinAria: "Copy minimum albedo hex code",
      copyMaxAria: "Copy maximum albedo hex code",
      notesTitle: "Notes",
      presetOutput: "Preset Output",
      metalWorkflow: "Metal workflow"
    },
    ja: {
      eyebrow: "PBR マテリアル リファレンス",
      h1: "PBRマテリアルの基準値 — Albedo・Roughness・Metallic・Specular",
      lead: "マテリアルを選択すると、反射率・アルベド・ラフネス・メタリック・スペキュラーの実用的な目安値と、各エンジン向けの出力を確認できます。",
      aboutTitle: "このツールについて",
      aboutP1: "このツールは、Albedo・Roughness・Metallic・Specular・ReflectanceのPBRマテリアル基準値を提供します。",
      aboutP2: "Unreal Engine、Unity、Blender、汎用PBRワークフローに対応しています。",
      aboutP3: "対応マテリアルはコンクリート、木材、金属、プラスチック、ガラス、布、レンガ、アスファルト、雪、肌、金、銀、大理石、花崗岩、革、水、氷など、全50種類以上です。",
      materialLabel: "マテリアル",
      presetLabel: "プリセット",
      materialReferenceTitle: "マテリアル基準値",
      reflectance: "反射率(Reflectance)",
      albedoLinear: "Albedo(リニア)",
      albedoSrgb: "Albedo(sRGB)",
      roughness: "Roughness(粗さ)",
      metallic: "Metallic(金属度)",
      specularF0: "Specular / F0",
      albedoPreview: "Albedoプレビュー",
      minimum: "最小",
      maximum: "最大",
      copy: "コピー",
      copied: "コピー済み",
      copyMinAria: "最小Albedoのhexコードをコピー",
      copyMaxAria: "最大Albedoのhexコードをコピー",
      notesTitle: "補足",
      presetOutput: "プリセット出力",
      metalWorkflow: "金属ワークフロー(Metal workflow)"
    }
  };

  let currentLang = "en";

  function t() {
    return TRANSLATIONS[currentLang];
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function copyToClipboard(text, button) {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText(text).then(() => {
      const original = button.textContent;
      button.textContent = t().copied;
      button.classList.add("copied");
      setTimeout(() => {
        button.textContent = original;
        button.classList.remove("copied");
      }, 1200);
    }).catch(() => {});
  }

  function applyLang(lang) {
    currentLang = lang === "ja" ? "ja" : "en";
    const dict = t();

    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    langToggle.textContent = currentLang === "ja" ? "日本語" : "EN";
    langToggle.setAttribute("aria-pressed", currentLang === "ja" ? "true" : "false");

    localStorage.setItem("pbr-lang", currentLang);

    renderMaterial();
  }

  function getInitialLang() {
    const saved = localStorage.getItem("pbr-lang");
    if (saved === "en" || saved === "ja") return saved;
    return navigator.language && navigator.language.toLowerCase().startsWith("ja") ? "ja" : "en";
  }

  function linearToSrgbChannel(linear) {
    const c = clamp(linear, 0, 1);
    if (c <= 0.0031308) {
      return 12.92 * c;
    }
    return 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  }

  function linearRgbToHex(rgb) {
    const srgb = rgb.map(linearToSrgbChannel);
    const ints = srgb.map((v) => Math.round(clamp(v, 0, 1) * 255));
    return `#${ints.map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase()}`;
  }

  function formatNumber(value) {
    return Number(value).toFixed(2);
  }

  function formatRange(min, max, suffix = "") {
    return `${formatNumber(min)}-${formatNumber(max)}${suffix}`;
  }

  function formatRgbRange(minRgb, maxRgb) {
    const minText = `(${minRgb.map(formatNumber).join(", ")})`;
    const maxText = `(${maxRgb.map(formatNumber).join(", ")})`;
    return `${minText} - ${maxText}`;
  }

  function formatReflectanceRange(min, max) {
    return `${Math.round(min * 100)}-${Math.round(max * 100)}%`;
  }

  function getSelectedMaterial() {
    return MATERIALS.find((material) => material.id === materialSelect.value) || MATERIALS[0];
  }

  function populateMaterialSelect() {
    materialSelect.innerHTML = "";

    MATERIALS.forEach((material) => {
      const option = document.createElement("option");
      option.value = material.id;
      option.textContent = material.name;
      materialSelect.appendChild(option);
    });
  }

  function renderNotes(notes) {
    notesList.innerHTML = "";
    notes.forEach((note) => {
      const li = document.createElement("li");
      li.textContent = note;
      notesList.appendChild(li);
    });
  }

  const NON_COPYABLE_KEYS = new Set(["Workflow Note", "Derived From"]);

  function renderEngineRows(rows) {
    engineOutput.innerHTML = "";

    rows.forEach(([key, value]) => {
      const row = document.createElement("div");
      row.className = "engine-row";

      const keySpan = document.createElement("span");
      keySpan.textContent = key;

      const valueWrap = document.createElement("div");
      valueWrap.className = "engine-value";

      const strong = document.createElement("strong");
      strong.textContent = value;
      valueWrap.appendChild(strong);

      if (!NON_COPYABLE_KEYS.has(key)) {
        const copyBtn = document.createElement("button");
        copyBtn.type = "button";
        copyBtn.className = "copy-btn";
        copyBtn.textContent = t().copy;
        copyBtn.setAttribute("aria-label", currentLang === "ja" ? `${key} をコピー` : `Copy ${key}`);
        copyBtn.addEventListener("click", () => copyToClipboard(value, copyBtn));
        valueWrap.appendChild(copyBtn);
      }

      row.appendChild(keySpan);
      row.appendChild(valueWrap);
      engineOutput.appendChild(row);
    });
  }

  function renderAlbedo(material) {
    const minLinear = material.albedo.min;
    const maxLinear = material.albedo.max;

    const minHex = linearRgbToHex(minLinear);
    const maxHex = linearRgbToHex(maxLinear);

    albedoLinearValue.textContent = formatRgbRange(minLinear, maxLinear);
    albedoSrgbValue.textContent = `${minHex} - ${maxHex}`;

    albedoPreview.style.background = `linear-gradient(90deg, ${minHex}, ${maxHex})`;

    swatchMin.style.background = minHex;
    swatchMax.style.background = maxHex;

    swatchMinText.textContent = `${minHex} / linear ${minLinear.map(formatNumber).join(", ")}`;
    swatchMaxText.textContent = `${maxHex} / linear ${maxLinear.map(formatNumber).join(", ")}`;

    copySwatchMin.dataset.hex = minHex;
    copySwatchMax.dataset.hex = maxHex;
  }

  function buildSpecialRows(material, engine) {
    if (!material.special) return [];

    const rows = [];

    if (material.special === "transmissive") {
      const ior = (1 + Math.sqrt(material.f0)) / (1 - Math.sqrt(material.f0));

      if (engine === "blender") {
        rows.push(["Transmission Weight", "1.00"]);
        rows.push(["IOR", formatNumber(ior)]);
      } else if (engine === "unreal") {
        rows.push(["Blend Mode", "Translucent (enables Refraction input)"]);
        rows.push(["IOR", formatNumber(ior)]);
      } else if (engine === "unity") {
        rows.push(["Material Type", "Translucent (HDRP Lit) or a custom transparent shader"]);
        rows.push(["IOR", formatNumber(ior)]);
      } else if (engine === "arnold") {
        rows.push(["Transmission Weight", "1.00"]);
      } else {
        rows.push(["IOR", formatNumber(ior)]);
        rows.push(["Transmission", "Enable transmission/refraction for this material"]);
      }
    } else if (material.special === "sss") {
      if (engine === "blender" || engine === "arnold") {
        rows.push(["Subsurface Weight", "0.20-0.50 (typical)"]);
      } else if (engine === "unreal") {
        rows.push(["Shading Model", "Subsurface / Subsurface Profile"]);
      } else if (engine === "unity") {
        rows.push(["Material Type", "Subsurface Scattering (HDRP Lit)"]);
      } else {
        rows.push(["Subsurface", "Enable subsurface scattering (see notes)"]);
      }
    } else if (material.special === "cloth") {
      if (engine === "blender" || engine === "arnold") {
        rows.push(["Sheen Weight", "0.30-0.60 (typical)"]);
      } else if (engine === "unreal") {
        rows.push(["Shading Model", "Cloth (adds Fuzz Color + Cloth Amount)"]);
      } else if (engine === "unity") {
        rows.push(["Shader", "HDRP Fabric shader (Cotton/Wool) recommended"]);
      } else {
        rows.push(["Sheen", "Consider a grazing-angle sheen term (typical weight 0.30-0.60)"]);
      }
    }

    return rows;
  }

  function buildPresetRows(material, engine) {
    const rows = [];
    const minHex = linearRgbToHex(material.albedo.min);
    const maxHex = linearRgbToHex(material.albedo.max);

    rows.push(["Base Color (sRGB)", `${minHex} - ${maxHex}`]);
    rows.push([
      "Base Color (Linear)",
      `${material.albedo.min.map(formatNumber).join(", ")} - ${material.albedo.max.map(formatNumber).join(", ")}`
    ]);
    rows.push([engine === "arnold" ? "Metalness" : "Metallic", formatNumber(material.metallic)]);

    if (engine === "unity") {
      const smoothnessMin = 1 - material.roughness.max;
      const smoothnessMax = 1 - material.roughness.min;

      rows.push(["Smoothness", formatRange(smoothnessMin, smoothnessMax)]);
      rows.push(["Derived From", `1 - Roughness (${formatRange(material.roughness.min, material.roughness.max)})`]);
      rows.push(["Workflow Note", "Unity/HDRP commonly uses Smoothness rather than Roughness"]);
    } else if (engine === "arnold") {
      rows.push(["Specular Roughness", formatRange(material.roughness.min, material.roughness.max)]);
    } else {
      rows.push(["Roughness", formatRange(material.roughness.min, material.roughness.max)]);
    }

    if (material.metallic >= 1) {
      rows.push(["Specular", "Metal workflow"]);
    } else {
      if (engine === "unreal") {
        const isDefault = Math.abs(material.specular - 0.5) < 0.005;
        rows.push([
          "Specular",
          isDefault
            ? "0.50 (default)"
            : `${formatNumber(material.specular)} (deviates from default 0.5)`
        ]);
      } else if (engine === "unity") {
        const isDefaultF0 = Math.abs(material.f0 - 0.04) < 0.005;
        rows.push([
          "Specular",
          isDefaultF0
            ? "Handled automatically (assumes ~0.04 F0)"
            : `Metallic workflow assumes ~0.04 F0; use Specular Color workflow for F0 ≈ ${formatNumber(material.f0)}`
        ]);
      } else if (engine === "arnold") {
        rows.push(["Specular Weight", "1.0 (default)"]);
      } else {
        rows.push(["Specular", formatNumber(material.specular)]);
      }

      if (material.f0 !== null) {
        if (engine === "arnold") {
          const ior = (1 + Math.sqrt(material.f0)) / (1 - Math.sqrt(material.f0));
          rows.push(["Specular IOR", formatNumber(ior)]);
        } else {
          rows.push(["F0", formatNumber(material.f0)]);
        }
      }
    }

    rows.push(...buildSpecialRows(material, engine));

    if (engine === "blender") {
      rows.push(["Workflow Note", "Blender Principled uses Roughness directly"]);
    } else if (engine === "unreal") {
      rows.push(["Workflow Note", "Unreal uses Roughness directly"]);
    } else if (engine === "generic") {
      rows.push(["Workflow Note", "Generic metal/roughness workflow"]);
    } else if (engine === "arnold") {
      rows.push(["Workflow Note", "Arnold standard_surface uses Specular Roughness and Metalness directly"]);
    }

    return rows;
  }

  function renderMaterial() {
    const material = getSelectedMaterial();
    const engine = engineSelect.value;
    const engineLabel = engineSelect.options[engineSelect.selectedIndex].text;

    resultName.textContent = material.name;
    resultDesc.textContent = material.description;

    reflectanceValue.textContent = formatReflectanceRange(
      material.reflectance.min,
      material.reflectance.max
    );

    renderAlbedo(material);

    roughnessValue.textContent = formatRange(
      material.roughness.min,
      material.roughness.max
    );

    metallicValue.textContent = formatNumber(material.metallic);

    if (material.specular !== null && material.f0 !== null) {
      specularValue.textContent = `${formatNumber(material.specular)} / ${formatNumber(material.f0)}`;
    } else {
      specularValue.textContent = t().metalWorkflow;
    }

    engineTitle.textContent = `${t().presetOutput} - ${engineLabel}`;

    renderNotes(material.notes);
    renderEngineRows(buildPresetRows(material, engine));
  }

  populateMaterialSelect();
  materialSelect.value = MATERIALS[0].id;
  applyLang(getInitialLang());

  materialSelect.addEventListener("change", renderMaterial);
  engineSelect.addEventListener("change", renderMaterial);

  copySwatchMin.addEventListener("click", () => copyToClipboard(copySwatchMin.dataset.hex, copySwatchMin));
  copySwatchMax.addEventListener("click", () => copyToClipboard(copySwatchMax.dataset.hex, copySwatchMax));

  langToggle.addEventListener("click", () => {
    applyLang(currentLang === "ja" ? "en" : "ja");
  });
});
