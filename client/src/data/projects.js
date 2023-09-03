import dicegoblin from "../assets/dicegoblin.gif"
import dgstatic from "../assets/dgstatic.png"
import pokedexmaster from "../assets/pokedex-master.gif"
import pmstatic from "../assets/pmstatic.png"
import tossedandfound from "../assets/tossed-and-found.gif"
import tafstatic from "../assets/tafstatic.png"
import wordofmouth from "../assets/word-of-mouth.gif"
import womstatic from "../assets/womstatic.png"

export const projects = [
  {
    name: "Pokédex Master",
    desc: `Users are shown a Pokédex entry and prompted to guess the associated Pokémon to capture it. Powered by data from <a href="https://pokeapi.co/" target="_blank">PokéAPI</a>.`,
    img: { static: pmstatic, gif: pokedexmaster },
    highlights: [],
    stack: "React - Node.js - Express - Mongoose - MongoDB",
    repo: "https://github.com/dawnteigh/Pokedex-Master",
    videoId: "H_qdlnG3dpU"
  },
  {
    name: "Dice Goblin",
    desc: "Users can manage their dice collection and track rolls to garner meaningful statistics regarding specific throwing techniques or the balance of their dice. ",
    img: { static: dgstatic, gif: dicegoblin },
    highlights: [],
    stack: "React - Ruby - Sinatra - SQLite",
    repo: "https://github.com/dawnteigh/Dice-Goblin",
    videoId: "pMznK35uu4A"
  },
  {
    name: "Tossed and Found",
    desc: "Users can track their disc golf disc collections, scorekeep rounds, and message other users. Discs are given a unique finder key that can be written on the back, allowing lost discs to be returned to their owners through the app.",
    img: { static: tafstatic, gif: tossedandfound },
    highlights: [],
    stack: "React - Ruby on Rails - PostgreSQL",
    repo: "https://github.com/dawnteigh/Tossed-and-Found",
    videoId: "K-DG0ddg90s"
  },
  {
    name: "Word of Mouth",
    desc: "Users can find the top-rated restaurants based on a specific dish, and submit food-centric reviews of their own.",
    img: { static: womstatic, gif: wordofmouth },
    highlights: [],
    stack: "React - Redux - Ruby on Rails - PostgreSQL",
    repo: "https://github.com/dawnteigh/word-of-mouth",
    videoId: "1c1RF5p3fbM"
  },
]