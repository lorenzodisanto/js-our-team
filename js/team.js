const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// CONSOLE LOG DELL'ARRAY
for (let person of team) {
  console.log(person);
}

// STAMPO L'ARRAY NEL DOM
const userContainer = document.getElementById("teams");
for (let person of team) {
  const userHtml = `
  <div class = "col-4">
  <div class = "card">
  <p>${person.name}</p>
  <p>${person.role}</p>
  <p>${person.image}</p>
  </div>
  </div>`;

  userContainer.innerHTML += userHtml;
}
