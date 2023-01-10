import { getUser } from "./database.js";

const username = document.getElementById("username");
const password = document.getElementById("password");

const loginUser = async (event) => {
	event.preventDefault();
	document.getElementById("credentials-err").classList.add("hidden");
	const user = await getUser(username.value);

	if (!user || user.password != password.value) {
		document.getElementById("credentials-err").classList.remove("hidden");
	} else {
		localStorage.setItem("username", `${username.value}`);
		window.location.replace("./movies.html");
	}
};

document.getElementById("login-form").addEventListener("submit", (event) => loginUser(event));
