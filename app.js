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

const albedoPreview = document.getElementById("albedoPreview");
const swatchMin = document.getElementById("swatchMin");
const swatchMax = document.getElementById("swatchMax");
const swatchMinText = document.getElementById("swatchMinText");
const swatchMaxText = document.getElementById("swatchMaxText");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
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

function renderEngineMapping(mapping) {
  engineOutput.innerHTML = "";

  Object.entries(mapping).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "engine-row";
    row.innerHTML = `<span>${key}</span><strong>${value}</strong>`;
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
}

function renderMaterial() {
  const material = getSelectedMaterial();
  const engine = engineSelect.value;
  const mapping = material.engines[engine];

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

  renderNotes(material.notes);
  renderEngineMapping(mapping);
}

populateMaterialSelect();
materialSelect.value = MATERIALS[0].id;
renderMaterial();

materialSelect.addEventListener("change", renderMaterial);
engineSelect.addEventListener("change", renderMaterial);
