import { getMovies } from "./database.js";

let movies = await getMovies();
movies = Object.values(movies);

movies = movies.sort((movie1, movie2) => (movie1.rating > movie2.rating ? -1 : 1));

let cards = document.getElementById("cards");
cards.innerHTML = "";

const numberOfMovies = movies.length < 10 ? movies.length : 10;

for (let i = 0; i < numberOfMovies; i++) {
	cards.innerHTML += `
    <section class="cardTop" id="position${i + 1}">
		<a href="movie.html?title=${movies[i].id}">
			<span id="position">${i + 1}</span>
			<div id="images">
				<img id="poster" src="${movies[i].posterUrl}" />
				<img id="screenshot" src="${movies[i].screenshotUrl}" />
			</div>
			<span>${movies[i].title_en}</span>
			<span>${movies[i].title_bg}</span>
			<span>${movies[i].year}</span>
            <span>Рейтинг: ${movies[i].rating}</span>
		</a>
	</section>
    `;
}
