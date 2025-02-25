// fetch ou axios
// Fetch é nativo JS - já o Axios é uma biblioteca
import axios from "axios";

// const { NODE_END } = process.env;
// const URL = "http://localhost:3001/api";
const URL = "https://spotify-project-t7sh.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
