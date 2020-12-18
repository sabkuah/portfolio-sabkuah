const projects = [
  {
    id: "1",
    img: "suki.gif",
    name: "Suki Online Store",
    desc:
      "A snowboard e-commerce site with a shopping cart and checkout. Collaboration using Github and Slack.",
    tech: ["HTML", "SCSS", "JS"],
    link: "wwww.google.ca",
    screenshots: [],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat magni porro, quam fugiat doloremque, asperiores vitae, inventore non molestias rem dolore! Commodi similique sint omnis consectetur veritatis, incidunt eum.",
  },
  {
    id: "2",
    img: "sabflix.gif",
    name: "Sabflix",
    desc:
      "A movie website built using React with data from MovieDB API. Includes filtering and pagination",
    tech: ["React"],
    link: "",
    screenshots: [],
    details: ``,
  },

  {
    id: "3",
    img: "PokeVerse/pokeverse.gif",
    name: "PokeVerse",
    desc:
      "A Pokemon web app with a MSSQL server database, identity authentication and .NET Core backend",
    tech: ["C#/.NET"],
    link: "https://pokeverse.azurewebsites.net/",
    screenshots: [
      "PokeVerse/pokeverse1.png",
      "PokeVerse/pokeverse2.png",
      "PokeVerse/pokeverse3.png",
      "PokeVerse/pokeverse4.png",
    ],
    details: `This is a writeup of PokeVerse`,
  },
  {
    id: "4",
    img: "scorekeeper.gif",
    name: "Scorekeeper.io",
    desc:
      "A simple React application that allows teams to keep track of their score.",
    tech: ["React"],
    link: "",
    screenshots: [],
    details: ``,
  },
  {
    id: "5",
    img: "furious.png",
    name: "Furious 7 (2015)",
    desc:
      "I don't have friends. I got family. I don't have cars, I have goddamn machines.",
    tech: ["Hi-speed Driving", "HTML"],
    link: "",
    screenshots: [],
    details: ``,
  },
  {
    id: "6",
    img: "pirates.png",
    name: "Pirates of the Caribbean (2003)",
    desc: "Ye best start believin' in ghost stories, Miss Turner. Yer in one.",
    tech: ["JS", "Sword-fighting"],
    link: "",
    screenshots: [],
    details: ``,
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
