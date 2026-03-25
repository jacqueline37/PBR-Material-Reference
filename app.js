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

if (!window.MATERIALS) {
  console.error("MATERIALS not loaded");
  return;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function linearToSrgbChannel(linear) {
  const c = clamp(linear, 0, 1);
  if (c <= 0.0031308) return 12.92 * c;
  return 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
}

function linearRgbToHex(rgb) {
  const srgb = rgb.map(linearToSrgbChannel);
  const ints = srgb.map(v => Math.round(clamp(v, 0, 1) * 255));
  return `#${ints.map(v => v.toString(16).padStart(2, "0")).join("")}`;
}

function formatNumber(v) {
  return Number(v).toFixed(2);
}

function formatRange(min, max) {
  return `${formatNumber(min)}-${formatNumber(max)}`;
}

function formatReflectanceRange(min, max) {
  return `${Math.round(min*100)}-${Math.round(max*100)}%`;
}

function getSelectedMaterial() {
  return MATERIALS.find(m => m.id === materialSelect.value) || MATERIALS[0];
}

function populateMaterialSelect() {

  materialSelect.innerHTML = "";

  MATERIALS.forEach(m => {
    const o = document.createElement("option");
    o.value = m.id;
    o.textContent = m.name;
    materialSelect.appendChild(o);
  });

}

function renderNotes(notes) {

  notesList.innerHTML = "";

  notes.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    notesList.appendChild(li);
  });

}

function renderEngineRows(rows) {

  engineOutput.innerHTML = "";

  rows.forEach(([k,v]) => {

    const div = document.createElement("div");

    div.className = "engine-row";

    div.innerHTML = `<span>${k}</span><strong>${v}</strong>`;

    engineOutput.appendChild(div);

  });

}

function renderAlbedo(m) {

  const min = m.albedo.min;
  const max = m.albedo.max;

  const minHex = linearRgbToHex(min);
  const maxHex = linearRgbToHex(max);

  albedoLinearValue.textContent =
    `(${min.join(",")}) - (${max.join(",")})`;

  albedoSrgbValue.textContent =
    `${minHex} - ${maxHex}`;

  albedoPreview.style.background =
    `linear-gradient(90deg, ${minHex}, ${maxHex})`;

  swatchMin.style.background = minHex;
  swatchMax.style.background = maxHex;

  swatchMinText.textContent = minHex;
  swatchMaxText.textContent = maxHex;

}

function buildPresetRows(m, engine) {

  const rows = [];

  const minHex = linearRgbToHex(m.albedo.min);
  const maxHex = linearRgbToHex(m.albedo.max);

  rows.push(["BaseColor", `${minHex} - ${maxHex}`]);
  rows.push(["Metallic", m.metallic]);

  if (engine === "unity") {

    const smMin = 1 - m.roughness.max;
    const smMax = 1 - m.roughness.min;

    rows.push(["Smoothness", formatRange(smMin, smMax)]);

  } else {

    rows.push(["Roughness", formatRange(
      m.roughness.min,
      m.roughness.max
    )]);

  }

  return rows;

}

function renderMaterial() {

  const m = getSelectedMaterial();

  resultName.textContent = m.name;
  resultDesc.textContent = m.description;

  reflectanceValue.textContent =
    formatReflectanceRange(
      m.reflectance.min,
      m.reflectance.max
    );

  renderAlbedo(m);

  roughnessValue.textContent =
    formatRange(m.roughness.min, m.roughness.max);

  metallicValue.textContent = m.metallic;

  if (m.f0)
    specularValue.textContent = m.f0;
  else
    specularValue.textContent = "metal";

  renderNotes(m.notes);

  const rows =
    buildPresetRows(m, engineSelect.value);

  renderEngineRows(rows);

}

populateMaterialSelect();

materialSelect.value = MATERIALS[0].id;

renderMaterial();

materialSelect.addEventListener("change", renderMaterial);
engineSelect.addEventListener("change", renderMaterial);

});
