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
    img: "sabflix.gif",
    name: "Sabflix",
    desc:
      "A movie website built using React with data from MovieDB API. Includes filtering and pagination",
    tech: ["React"],
    link: "",
  },
  {
    id: 3,
    img: "scorekeeper.gif",
    name: "Scorekeeper.io",
    desc:
      "A simple React application that allows teams to keep track of their score.",
    tech: ["React"],
    link: "",
  },

  {
    id: 4,
    img: "shrek.png",
    name: "Shrek (2001)",
    desc:
      "Ogres are like onions. They don't smell very nice but most of them have good hearts and soft spots for princesses",
    tech: ["React", "Burping"],
    link: "",
  },
  {
    id: 5,
    img: "furious.png",
    name: "Furious 7 (2015)",
    desc:
      "I don't have friends. I got family. I don't have cars, I have goddamn machines.",
    tech: ["Hi-speed Driving", "HTML"],
    link: "",
  },
  {
    id: 6,
    img: "pirates.png",
    name: "Pirates of the Caribbean (2003)",
    desc: "Ye best start believin' in ghost stories, Miss Turner. Yer in one.",
    tech: ["JS", "Sword-fighting"],
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
