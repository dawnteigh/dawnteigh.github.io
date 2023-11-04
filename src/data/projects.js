import dicegoblin from "../assets/dicegoblin.gif"
import dgstatic from "../assets/dgstatic.png"
import pokedexmaster from "../assets/pokedex-master.gif"
import pmstatic from "../assets/pmstatic.png"
import tossedandfound from "../assets/tossed-and-found.gif"
import tafstatic from "../assets/tafstatic.png"
import wordofmouth from "../assets/word-of-mouth.gif"
import womstatic from "../assets/womstatic.png"
import equaledstatic from "../assets/equaledstatic.png"
import equaled from "../assets/equaled.gif"

export const projects = [
  {
    name: "Pokédex Master",
    desc: `Users are shown a Pokédex entry and prompted to guess the associated Pokémon to capture it. Powered by data from <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>.`,
    img: { static: pmstatic, gif: pokedexmaster },
    highlights: [
      "My first React project; the original used JSON Server in place of a real backend and DB",
      "Implemented Node, with Express for routing and Mongoose to connect to and manage a MongoDB instance",
      "Incorporated React's useContext hook to manage local state and minimize prop drilling",
      "Navigated deeply nested data from two divergent endpoints to return curated response objects to the client",
      "Created functions to scrub data entries of any direct answer giveaways and to format user responses to match API data"
    ],
    stack: "React - Node.js - Express - Mongoose - MongoDB",
    repo: "https://github.com/dawnteigh/Pokedex-Master",
    videoId: "Wz7QNcJWP28",
    deploy: "https://pokedex-master.onrender.com"
  },
  {
    name: "Dice Goblin",
    desc: "Users can manage their dice collection and track rolls to garner meaningful statistics regarding specific throwing techniques or the balance of their dice. ",
    img: { static: dgstatic, gif: dicegoblin },
    highlights: [
      "Leveraged a Model-View-Controller type of organization to establish a clear separation of concerns between frontend and backend, using the frameworks of ActiveRecord and React in tandem with the DSL Sinatra",
      "Wrote a multitude of custom Ruby methods to manipulate data and serve statistics to the user in real-time",
      "Combined casino dealing perspective with a JavaScript switch statement to render the roll percentages of 2d6, adding utility for craps players",
      "Incorporated React Bootstrap components to streamline UI development"
    ],
    stack: "React - Ruby - Sinatra - SQLite",
    repo: "https://github.com/dawnteigh/Dice-Goblin",
    videoId: "pMznK35uu4A",
    deploy: false
  },
  {
    name: "Tossed and Found",
    desc: "Users can track their disc golf disc collections, scorekeep rounds, and message other users. Discs are given a unique finder key that can be written on the back, allowing lost discs to be returned to their owners through the app.",
    img: { static: tafstatic, gif: tossedandfound },
    highlights: [
      "Constructed MVC-style application using Ruby on Rails, with React for the views and PostgreSQL as the relational database management system",
      "Used Active Model Serializers to tailor JSON responses to the needs of the frontend",
      "Deployed the BCrypt Ruby gem as a means to securely hash and store users’ passwords",
      "Included ActionDispatch middleware for sessions and cookies to store user preferences and login status in the browser"
    ],
    stack: "React - Ruby on Rails - PostgreSQL",
    repo: "https://github.com/dawnteigh/Tossed-and-Found",
    videoId: "K-DG0ddg90s",
    deploy: "https://tossed-and-found.onrender.com"
  },
  {
    name: "Word of Mouth",
    desc: "Find out what restaurant does a particular dish best according to user reviews. In addition to the search feature, a user can submit and manage food-centric reviews of their own.",
    img: { static: womstatic, gif: wordofmouth },
    highlights: [
      "Utilized Redux with Thunk middleware for asynchronous state management",
      "Applied nested forms for a clean, step-by-step review creating process that concerns multiple database models",
      "Implemented nested client-side routing using React Router v6"
    ],
    stack: "React - Redux - Ruby on Rails - PostgreSQL",
    repo: "https://github.com/dawnteigh/word-of-mouth",
    videoId: "1c1RF5p3fbM",
    deploy: "https://word-of-mouth.onrender.com"
  },
  {
    name: "Hackathon: EqualEd",
    desc: `Educational platform that utilizes ChatGPT 3.5 to summarize and/or translate course content to be more accessible to users with varied learning requirements.`,
    img: { static: equaledstatic, gif: equaled },
    highlights: [
      "In a project manager role, collaborated with UI/UX designers, cybersecurity engineers, and full-stack developers to meet a deadline",
      "Utilized the openai-ruby gem and engineered prompts to get summaries and translations from ChatGPT",
      "Used Redux Toolkit to handle data in the frontend and manage loading state while ChatGPT generates responses"
    ],
    stack: "React - Redux - Ruby on Rails - PostgreSQL",
    repo: "https://github.com/Limeload/EqualEd",
    videoId: "8IbONlBJId0",
    deploy: false
  },
]