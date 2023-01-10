import { getMovies } from "./database.js";

let movies = await getMovies();
movies = Object.values(movies);

movies = movies.sort((movie1, movie2) => (movie1.rating > movie2.rating ? -1 : 1));

let cards = document.getElementById("cards");

const numberOfMovies = movies.length < 10 ? movies.length : 10;

const sortButtons = document.getElementsByClassName("filter-btn");
let criteria = "rating";

for (let i = 0; i < sortButtons.length; i++) {
	sortButtons[i].addEventListener("click", () => {
		criteria = sortButtons[i].getAttribute("criteria");
		for (let j = 0; j < sortButtons.length; j++) {
			if (j != i) sortButtons[j].classList.remove("selected");
		}
		sortButtons[i].classList.add("selected");
		movies = movies.sort((movie1, movie2) => (movie1[criteria] > movie2[criteria] ? -1 : 1));
		displayMovies(sortButtons[i].innerHTML);
	});
}

const displayMovies = (readableCriteria) => {
	cards.innerHTML = "";
	for (let i = 0; i < numberOfMovies; i++) {
		cards.innerHTML += `
    <section class="cardTop" id="position${i + 1}">
		<a href="movie.html?title=${movies[i].id}">
			<span id="position">${i + 1}</span>
			<div id="images">
				<img id="poster" src="${movies[i].posterUrl}" />
			</div>
			<span id="movieTitle">${movies[i].title_en}/${movies[i].title_bg}</span>
			<span>(${movies[i].year})</span>
            <span>${readableCriteria}: ${movies[i][criteria]}</span>
		</a>
	</section>
    `;
	}
};
displayMovies("Filmi 4K Рейтинг");
