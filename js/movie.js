import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { addMovies, firebaseConfig } from "./database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const id = new URL(document.location).searchParams.get("title");

const poster = document.getElementById("poster");
const screenshot = document.getElementById("screenshot");
const titleEnHeader = document.getElementById("title-en-header");
const titleBgHeader = document.getElementById("title-bg-header");
const yearHeader = document.getElementById("year-header");

const title = document.getElementById("title");
const rating = document.getElementById("rating");
const imdbRating = document.getElementById("imdb-rating");
const genresList = document.getElementById("genres-list");
const countriesList = document.getElementById("countries-list");
const year = document.getElementById("year");
const length = document.getElementById("length");
const director = document.getElementById("director");
const description = document.getElementById("description");

const trailer = document.getElementById("trailer");

const movieRef = ref(database, "movies/" + id);

get(movieRef).then((result) => {
	const movie = result.val();
	console.log(movie);

	poster.src = movie.posterUrl;
	poster.alt = movie.title;
	screenshot.src = movie.screenshotUrl;
	screenshot.alt = movie.title;
	titleEnHeader.innerHTML = movie.title_en;
	titleBgHeader.innerHTML = movie.title_bg;
	yearHeader.innerHTML = movie.year;

	title.innerHTML = `${movie.title_en} / ${movie.title_bg}`;
	rating.innerHTML = `${movie.rating} / 10`;
	imdbRating.innerHTML = movie.imdb_rating;
	movie.genres.forEach((genre) => {
		genresList.innerHTML += `${genre}, `;
	});
	genresList.innerHTML = genresList.innerHTML.slice(0, -2);
	movie.countries.forEach((country) => {
		countriesList.innerHTML += `${country}, `;
	});
	countriesList.innerHTML = countriesList.innerHTML.slice(0, -2);
	year.innerHTML = movie.year;
	length.innerHTML = movie.length;
	director.innerHTML = movie.director;
	description.innerHTML = movie.description;

	trailer.src = movie.trailerUrl;
});
