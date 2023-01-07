import { getMovie, updateMovie } from "./database.js";

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
									<button class="rate-btn" id="like"><i class="fa-regular fa-thumbs-up"></i></button>
									<span class="rating">${movie.rating} / 10</span>
									<button class="rate-btn" id="dislike"><i class="fa-regular fa-thumbs-down"></i></button>
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
	document.getElementById("comments").innerHTML += `
	<li>
		<span id="username">${element.username}</span>
			<br />
		<span id="userComment">${element.comment}</span>
	</li>`;
});

document.getElementById("commentForm"),
	addEventListener("submit", (event) => {
		event.preventDefault();
		const username = localStorage.getItem("username");
		const comment = document.getElementById("comment").value;
		movie.commets === undefined ? (movie.comments = [{ username, comment }]) : movie.comments.push({ username, comment });
		updateMovie(movie.id, movie);
		document.getElementById("comments").innerHTML += `
		<li>
			<span id="username">${username}</span>
			<br />
			<span id="userComment">${comment}</span>
		</li>`;
		document.getElementById("comment").value = "";
	});
