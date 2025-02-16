// fetch ou axios
// Fetch é nativo JS - já o Axios é uma biblioteca
import "dotenv/config";
import axios from "axios";

const { NODE_END } = process.env;
const URL = NODE_END === "development" ? "http://localhost:3001/api" : "/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
