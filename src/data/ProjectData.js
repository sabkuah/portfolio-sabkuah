const projects = [
  {
    id: "5",
    img: "SoilMates/soilmates-1.gif",
    name: "Soil-Mates",
    desc: "A CRUD app for connecting plant lovers with local plant stores",
    tech: ["NodeJS", "MongoDB", "EJS"],
    link: "https://soil-mates.herokuapp.com/",
    screenshots: [
      "SoilMates/soilmates-1.gif",
      "SoilMates/soilmates-2.png",
      "SoilMates/soilmates-3.png",
      "SoilMates/soilmates-4.png",
      "SoilMates/soilmates-5.png",
      "SoilMates/soilmates-6.png",
    ],
    details: `- Applied learning to create a full-stack JavaScript passion project
      - Utilized Restful API routes to add CRUD functionality for local plant stores, their products and reviews
      - Rendered views conditionally based on user authentication and users’ roles Protected data using client and server-side validation, with error-handling using custom middleware
      - Added extra features including animated star reviews, maps using GeoJSON and MapBox, and image upload to Cloudinary`,
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
    id: "6",
    img: "Amazon/amazon-1.gif",
    name: "Amazon Clone",
    desc:
      "Clone of Amazon with add-to-cart, Stripe payment, and transaction history using cloud functions",
    tech: ["React", "NodeJS"],
    link: "https://sabkuah-961f5.web.app",
    screenshots: [
      "Amazon/amazon-2.gif",
      "Amazon/amazon-3.png",
      "Amazon/amazon-4.png",
    ],
    details: `- User authentication with Firebase
      - Stripe payment processing
      - Cloud functions with FireStore
      - BEM naming conventions for styling
      - ES6 Javascript, Hooks, React Context API`,
  },
  {
    id: "4",
    img: "Spotify/spotify-1.gif",
    name: "Spotify CLone",
    desc:
      "Uses SpotifyWebAPI to pull user's playlists, recently played tracks and avatar",
    tech: ["React"],
    link: "https://spotify-sabkuah.web.app/",
    screenshots: [],
    details: `Login redirect to Spotify for user authentication
      Web app pulls user's avatar, list of playlists and 20 most recently played tracks from SpotifyWebAPI`,
  },

  {
    id: "1",
    img: "Suki/suki.gif",
    name: "Suki Online Store",
    desc:
      "A snowboard e-commerce site with a shopping cart and checkout. Collaboration using Github and Slack.",
    tech: ["HTML", "SASS", "JS"],
    link: "",
    screenshots: ["Suki/suki1.png", "Suki/suki2.png"],
    details:
      "The Suki Online Store features a front-end built using HTML, SCSS and ES6 Javascript.  It includes a product catalog, a cart and checkout form.  This was a group project created during the SSD program.",
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
    id: "7",
    img: "scorekeeper.gif",
    name: "Scorekeeper.io",
    desc:
      "A simple React application that allows teams to keep track of their score during intense matches of Taboo.",
    tech: ["React"],
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
