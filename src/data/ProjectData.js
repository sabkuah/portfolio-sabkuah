const projects = [
  {
    id: 1,
    img: "suki.gif",
    name: "Suki Online Store",
    desc:
      "A snowboard e-commerce site with a shopping cart and checkout. Collaboration using Github and Slack.",
    tech: ["HTML", "SCSS", "JS"],
    link: "wwww.google.ca",
  },
  {
    id: 2,
    img: "../images/cork.png",
    name: "Sabflix",
    desc:
      "A movie website built using React with data from MovieDB API. Includes filtering and pagination",
    tech: ["React"],
    link: "",
  },
  {
    id: 3,
    img: "",
    name: "Scorekeeper.io",
    desc:
      "A simple React application that allows teams to keep track of their score.",
    tech: ["React"],
    link: "",
  },
];

export function getProjects() {
  return projects;
}

export function getTechnologies() {
  var technologies = [];

  projects.forEach((p) => {
    p.tech.forEach((t) => {
      technologies.push(t);
    });
  });

  return Array.from(new Set(technologies));
}
