import { getMovies } from "./database.js";
import { mapGenres } from "./utils.js";

let movies = await getMovies();
movies = Object.values(movies);

const genreFilter = new URL(document.location).searchParams.get("genre");

const displayMovies = (movies) => {
	let cards = document.getElementById("cards");
	cards.innerHTML = "";
	movies.forEach((movie) => {
		cards.innerHTML += `
			<section class="card">
			<a href="movie.html?title=${movie.id}">
				<figure class="fig">
					<img src="${movie.posterUrl}" />
					<figcaption>${movie.title_en}<br/>${movie.title_bg}<br/>(${movie.year})</figcaption>
				</figure>
			</a>
			</section>`;
	});
};

if (!genreFilter) {
	displayMovies(movies);
} else {
	movies = movies.filter((movie) => mapGenres(movie.genres).includes(genreFilter));
	displayMovies(movies);
}

const sortButtons = document.getElementsByClassName("filter-btn");

for (let i = 0; i < sortButtons.length; i++) {
	sortButtons[i].addEventListener("click", () => {
		const ascending = sortButtons[i].children[0];
		const descending = sortButtons[i].children[1];
		const criteria = sortButtons[i].getAttribute("criteria");
		for (let j = 0; j < sortButtons.length; j++) {
			if (j != i) {
				sortButtons[j].children[0].classList.add("hidden");
				sortButtons[j].children[1].classList.add("hidden");
			}
		}

		if (descending.classList.contains("hidden")) {
			ascending.classList.add("hidden");
			descending.classList.remove("hidden");
			movies = movies.sort((movie1, movie2) => (movie1[criteria] > movie2[criteria] ? -1 : 1));
			displayMovies(movies);
		} else {
			ascending.classList.remove("hidden");
			descending.classList.add("hidden");
			movies = movies.sort((movie1, movie2) => (movie1[criteria] > movie2[criteria] ? 1 : -1));
			displayMovies(movies);
		}
	});
}
