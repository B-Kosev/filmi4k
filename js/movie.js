import { getMovie, getUser, updateMovie, updateUser } from "./database.js";

const id = new URL(document.location).searchParams.get("title");

const movie = await getMovie(id);

const movieArticle = document.getElementById("movie");

movieArticle.innerHTML = `<div class="movie-header">
						<div class="poster">
							<img src="${movie.posterUrl}" alt="${movie.title}" />
						</div>
						<div class="screenshot">
							<img src="${movie.screenshotUrl}" alt="${movie.title}" />
							<div class="movie-info">
								<span class="title-en">${movie.title_en}</span>
								<br />
								<span class="title-bg">${movie.title_bg}</span>
								<br />
								<span class="year">${movie.year}</span>
							</div>
						</div>
					</div>
					<div class="movie-content">
						<div class="meta-info">
							<div class="title-rating-wrapper">
								<h3 class="movie-title">${movie.title_en} / ${movie.title_bg}</h3>
								<div class="rating-wrapper">
									<button class="rate-btn" id="like"><i class="fa-regular fa-thumbs-up" id="likeIcon"></i></button>
									<span id="rating">${movie.rating} / 10</span>
									<button class="rate-btn" id="dislike"><i class="fa-regular fa-thumbs-down" id="dislikeIcon"></i></button>
								</div>
							</div>
							<div class="imdb-wrapper">
								<i class="fa-brands fa-imdb"></i><b></b>
								<span>${movie.imdb_rating}</span>
							</div>
							<div class="genre-wrapper">
								<b>Жанр:</b>
								<span>${movie.genres.join(", ")}</span>
							</div>
							<div class="country-wrapper">
								<b>Държава:</b>
								<span>${movie.countries.join(", ")}</span>
							</div>
							<div class="year-wrapper">
								<b>Година:</b>
								<span>${movie.year}</span>
							</div>
							<div class="length-wrapper">
								<b>Продължителност:</b>
								<span>${movie.length}</span>
								мин.
							</div>
							<div class="director-wrapper">
								<b>Режисьор:</b>
								<span>${movie.director}</span>
							</div>
							<div class="description-wrapper">
								<b>Описание:</b>
								<br />
								<span>${movie.description}</span>
							</div>
						</div>
						<div class="trailer">
							<iframe
								width="560"
								height="315"
								src="${movie.trailerUrl}"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowfullscreen
							></iframe>
						</div>
						<div id="commentSection">
							<h4>Коментари</h4>
							<form id="commentForm">
								<input
									class="commentFormElement"
									type="text"
									placeholder="Добавете коментар..."
									name="comment"
									id="comment"
									maxlength="200"
									required
								/>
								<input
									class="commentFormElement btn"
									id="submitCommentButton"
									type="submit"
									value="Коментар"
									name="addComment"
								/>
							</form>
							<ul id="comments"></ul>
						</div>
					</div>`;

movie.comments?.forEach((element) => {
	document.getElementById("comments").innerHTML =
		`
	<li>
		<span id="username">${element.username}</span>
		<span id="date">${element.date}</span>
			<br />
		<span id="userComment">${element.comment}</span>
	</li>` + document.getElementById("comments").innerHTML;
});

const currentUser = await getUser(localStorage.getItem("username"));
if (!currentUser) document.getElementById("commentForm").classList.add("hidden");

document.getElementById("commentForm"),
	addEventListener("submit", (event) => {
		event.preventDefault();
		if (!currentUser) return;
		const username = localStorage.getItem("username");
		const comment = document.getElementById("comment").value;
		const date = new Date().toLocaleString();
		movie.comments === undefined
			? (movie.comments = [{ username, comment, date }])
			: movie.comments.push({ username, comment, date });
		updateMovie(movie.id, movie);
		document.getElementById("comments").innerHTML =
			`
		<li>
			<span id="username">${username}</span>
			<span id="date">${date}</span>
			<br />
			<span id="userComment">${comment}</span>
		</li>` + document.getElementById("comments").innerHTML;
		document.getElementById("comment").value = "";
	});

const likeButton = document.getElementById("like");
const dislikeButton = document.getElementById("dislike");

const likeIcon = document.getElementById("likeIcon");
const dislikeIcon = document.getElementById("dislikeIcon");

if (currentUser?.likedMovies?.includes(movie.id)) {
	likeIcon.classList.remove("fa-regular");
	likeIcon.classList.add("fa-solid");
}

if (currentUser?.dislikedMovies?.includes(movie.id)) {
	dislikeIcon.classList.remove("fa-regular");
	dislikeIcon.classList.add("fa-solid");
}

likeButton.addEventListener("click", () => {
	if (!currentUser) return;
	if (dislikeIcon.classList.contains("fa-solid")) {
		dislikeIcon.classList.remove("fa-solid");
		dislikeIcon.classList.add("fa-regular");
		movie.dislikes--;
		currentUser.dislikedMovies = currentUser.dislikedMovies?.filter((dislikedMovie) => dislikedMovie != movie.id);
	}

	if (!likeIcon.classList.contains("fa-solid")) {
		likeIcon.classList.add("fa-solid");
		movie.likes++;
		currentUser.likedMovies ? currentUser.likedMovies.push(movie.id) : (currentUser.likedMovies = [movie.id]);
	} else {
		likeIcon.classList.remove("fa-solid");
		likeIcon.classList.add("fa-regular");
		movie.likes--;
		currentUser.likedMovies = currentUser.likedMovies?.filter((likedMovie) => likedMovie != movie.id);
	}
	movie.rating = ((10 * movie.likes) / (movie.dislikes + movie.likes)).toFixed(1);
	document.getElementById("rating").innerHTML = `${movie.rating} / 10`;
	updateMovie(movie.id, movie);
	updateUser(currentUser.username, currentUser);
});

dislikeButton.addEventListener("click", () => {
	if (!currentUser) return;
	if (likeIcon.classList.contains("fa-solid")) {
		likeIcon.classList.remove("fa-solid");
		likeIcon.classList.add("fa-regular");
		movie.likes--;
		currentUser.likedMovies = currentUser.likedMovies.filter((likedMovie) => likedMovie != movie.id);
	}

	if (!dislikeIcon.classList.contains("fa-solid")) {
		dislikeIcon.classList.add("fa-solid");
		movie.dislikes++;
		currentUser.dislikedMovies ? currentUser.dislikedMovies.push(movie.id) : (currentUser.dislikedMovies = [movie.id]);
	} else {
		dislikeIcon.classList.remove("fa-solid");
		dislikeIcon.classList.add("fa-regular");
		movie.dislikes--;
		currentUser.dislikedMovies = currentUser.dislikedMovies.filter((dislikedMovie) => dislikedMovie != movie.id);
	}
	movie.rating = ((10 * movie.likes) / (movie.dislikes + movie.likes)).toFixed(1);
	document.getElementById("rating").innerHTML = `${movie.rating} / 10`;
	updateMovie(movie.id, movie);
	updateUser(currentUser.username, currentUser);
});
