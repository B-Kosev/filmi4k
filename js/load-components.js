const head = document.getElementsByTagName("head")[0];
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const aside = document.getElementById("genre-nav");

fetch("./components/head.html")
	.then((result) => result.text())
	.then((data) => {
		head.innerHTML += data;
	});

fetch("./components/header.html")
	.then((result) => result.text())
	.then((data) => {
		header.innerHTML = data;
	});

fetch("./components/footer.html")
	.then((result) => result.text())
	.then((data) => {
		footer.innerHTML = data;
	});

if (aside !== null) {
	fetch("./components/genre-nav.html")
		.then((result) => result.text())
		.then((data) => {
			aside.innerHTML = data;
		});
}

const headerScript = document.createElement("script");
headerScript.src = "./js/header.js";
headerScript.type = "module";

const dbScript = document.createElement("script");
dbScript.src = "./js/database.js";
dbScript.type = "module";

head.appendChild(headerScript);
head.appendChild(dbScript);
