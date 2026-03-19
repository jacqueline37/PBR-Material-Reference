const materialSelect = document.getElementById("materialSelect");
const engineSelect = document.getElementById("engineSelect");

const resultName = document.getElementById("resultName");
const resultDesc = document.getElementById("resultDesc");
const reflectanceValue = document.getElementById("reflectanceValue");
const albedoValue = document.getElementById("albedoValue");
const roughnessValue = document.getElementById("roughnessValue");
const metallicValue = document.getElementById("metallicValue");
const specularValue = document.getElementById("specularValue");
const f0Value = document.getElementById("f0Value");
const notesList = document.getElementById("notesList");
const engineOutput = document.getElementById("engineOutput");

function populateMaterialSelect() {
  MATERIALS.forEach((material) => {
    const option = document.createElement("option");
    option.value = material.id;
    option.textContent = material.name;
    materialSelect.appendChild(option);
  });
}

function getSelectedMaterial() {
  return MATERIALS.find((m) => m.id === materialSelect.value) || MATERIALS[0];
}

function renderMaterial() {
  const material = getSelectedMaterial();
  const engine = engineSelect.value;
  const mapping = material.engines[engine];

  resultName.textContent = material.name;
  resultDesc.textContent = material.description;
  reflectanceValue.textContent = material.reflectance;
  albedoValue.textContent = material.albedo;
  roughnessValue.textContent = material.roughness;
  metallicValue.textContent = material.metallic;
  specularValue.textContent = material.specular;
  f0Value.textContent = material.f0;

  notesList.innerHTML = "";
  material.notes.forEach((note) => {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
  });

  engineOutput.innerHTML = "";
  Object.entries(mapping).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "engine-row";
    row.innerHTML = `<span>${key}</span><strong>${value}</strong>`;
    engineOutput.appendChild(row);
  });
}

populateMaterialSelect();
materialSelect.value = MATERIALS[0].id;
renderMaterial();

materialSelect.addEventListener("change", renderMaterial);
engineSelect.addEventListener("change", renderMaterial);
