import { addMovies } from "./database.js";

const addMoviesBtn = document.getElementById("add-movies-btn");

addMoviesBtn.addEventListener("click", addMovies);
