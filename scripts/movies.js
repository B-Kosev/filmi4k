import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { firebaseConfig } from "./database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const moviesRef = ref(database, "movies");

get(moviesRef).then((info) => {
	const movie = info.val();
	console.log(movie);
	document.getElementById("cards").innerHTML += `
    <section class="card">
	<a href="movie.html?name=potopen">
		<figure class="fig">
			<img src=".${movie.imageUrl}" />
            <figcaption>${movie.title} (${movie.year})</figcaption>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
		</figure>
	</a>
    </section>`;
	for (var i = 1; i <= movie.rating; i++) {
		document.getElementsByClassName("fa-star")[i - 1].classList.add("checkedStar");
	}
});
