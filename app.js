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

  const themeToggle = document.getElementById("themeToggle");

  if (
    !materialSelect || !engineSelect || !resultName || !resultDesc ||
    !reflectanceValue || !albedoLinearValue || !albedoSrgbValue ||
    !roughnessValue || !metallicValue || !specularValue ||
    !notesList || !engineOutput || !engineTitle ||
    !albedoPreview || !swatchMin || !swatchMax ||
    !swatchMinText || !swatchMaxText ||
    !copySwatchMin || !copySwatchMax || !themeToggle
  ) {
    console.error("Required DOM elements are missing.");
    return;
  }

  if (!window.MATERIALS || !Array.isArray(window.MATERIALS) || window.MATERIALS.length === 0) {
    console.error("MATERIALS is missing or empty.");
    return;
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function copyToClipboard(text, button) {
    if (!navigator.clipboard) return;

    navigator.clipboard.writeText(text).then(() => {
      const original = button.textContent;
      button.textContent = "Copied";
      button.classList.add("copied");
      setTimeout(() => {
        button.textContent = original;
        button.classList.remove("copied");
      }, 1200);
    }).catch(() => {});
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.textContent = theme === "light" ? "Light" : "Dark";
    themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }

  function getInitialTheme() {
    const saved = localStorage.getItem("pbr-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
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
        copyBtn.textContent = "Copy";
        copyBtn.setAttribute("aria-label", `Copy ${key}`);
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

  function buildPresetRows(material, engine) {
    const rows = [];
    const minHex = linearRgbToHex(material.albedo.min);
    const maxHex = linearRgbToHex(material.albedo.max);

    rows.push(["Base Color (sRGB)", `${minHex} - ${maxHex}`]);
    rows.push([
      "Base Color (Linear)",
      `${material.albedo.min.map(formatNumber).join(", ")} - ${material.albedo.max.map(formatNumber).join(", ")}`
    ]);
    rows.push(["Metallic", formatNumber(material.metallic)]);

    if (engine === "unity") {
      const smoothnessMin = 1 - material.roughness.max;
      const smoothnessMax = 1 - material.roughness.min;

      rows.push(["Smoothness", formatRange(smoothnessMin, smoothnessMax)]);
      rows.push(["Derived From", `1 - Roughness (${formatRange(material.roughness.min, material.roughness.max)})`]);
      rows.push(["Workflow Note", "Unity/HDRP commonly uses Smoothness rather than Roughness"]);
    } else {
      rows.push(["Roughness", formatRange(material.roughness.min, material.roughness.max)]);
    }

    if (material.metallic >= 1) {
      rows.push(["Specular", "Metal workflow"]);
    } else {
      if (engine === "unreal") {
        rows.push(["Specular", "Usually leave at default"]);
      } else if (engine === "unity") {
        rows.push(["Specular", "Usually handled by shader/workflow"]);
      } else {
        rows.push(["Specular", formatNumber(material.specular)]);
      }

      if (material.f0 !== null) {
        rows.push(["F0", formatNumber(material.f0)]);
      }
    }

    if (engine === "blender") {
      rows.push(["Workflow Note", "Blender Principled uses Roughness directly"]);
    } else if (engine === "unreal") {
      rows.push(["Workflow Note", "Unreal uses Roughness directly"]);
    } else if (engine === "generic") {
      rows.push(["Workflow Note", "Generic metal/roughness workflow"]);
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
      specularValue.textContent = "Metal workflow";
    }

    engineTitle.textContent = `Preset Output - ${engineLabel}`;

    renderNotes(material.notes);
    renderEngineRows(buildPresetRows(material, engine));
  }

  populateMaterialSelect();
  materialSelect.value = MATERIALS[0].id;
  renderMaterial();
  applyTheme(getInitialTheme());

  materialSelect.addEventListener("change", renderMaterial);
  engineSelect.addEventListener("change", renderMaterial);

  copySwatchMin.addEventListener("click", () => copyToClipboard(copySwatchMin.dataset.hex, copySwatchMin));
  copySwatchMax.addEventListener("click", () => copyToClipboard(copySwatchMax.dataset.hex, copySwatchMax));

  themeToggle.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    localStorage.setItem("pbr-theme", next);
    applyTheme(next);
  });
});
