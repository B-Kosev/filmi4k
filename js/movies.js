import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { firebaseConfig } from "./database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const moviesRef = ref(database, "movies");

get(moviesRef).then((result) => {
	let cards = document.getElementById("cards");
	Object.values(result.val()).forEach((movie) => {
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
});
