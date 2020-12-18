const projects = [
  {
    id: "1",
    img: "Suki/suki.gif",
    name: "Suki Online Store",
    desc:
      "A snowboard e-commerce site with a shopping cart and checkout. Collaboration using Github and Slack.",
    tech: ["HTML", "SCSS", "JS"],
    link: "",
    screenshots: ["Suki/suki1.png", "Suki/suki2.png"],
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
    details:
      "Sabflix is a movie website built using React with data from the MovieDB API.",
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
    details:
      "PokeVerse is a web application with razor pages, a MSSQL server database and .NET Core backend.  The app allows registered users to add pokemon from a catalog to pokedex and delete them.  Changes to the user's pokedex are stored in the database.  The app's catalogue page has pagination, filtering and sorting features.  It also includes security features such as Google ReCaptcha and identity verification using SendGrid. This app is deployed on Azure web services.",
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
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat magni porro, quam fugiat doloremque, asperiores vitae, inventore non molestias rem dolore! Commodi similique sint omnis consectetur veritatis, incidunt eum.",
  },
  {
    id: "5",
    img: "furious.png",
    name: "Furious 7 (2015)",
    desc:
      "I don't have friends. I got family. I don't have cars, I have machines.",
    tech: ["Hi-speed Driving", "HTML"],
    link: "",
    screenshots: [],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat magni porro, quam fugiat doloremque, asperiores vitae, inventore non molestias rem dolore! Commodi similique sint omnis consectetur veritatis, incidunt eum.",
  },
  {
    id: "6",
    img: "pirates.png",
    name: "Pirates of the Caribbean (2003)",
    desc: "Ye best start believin' in ghost stories, Miss Turner. Yer in one.",
    tech: ["JS", "Sword-fighting"],
    link: "",
    screenshots: [],
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellat magni porro, quam fugiat doloremque, asperiores vitae, inventore non molestias rem dolore! Commodi similique sint omnis consectetur veritatis, incidunt eum.",
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
