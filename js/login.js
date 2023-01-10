import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { firebaseConfig } from "./database.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

window.onload = function () {
	document.getElementById("login-form").addEventListener("submit", (event) => loginUser(event));
};

const username = document.getElementById("username");
const password = document.getElementById("password");

const loginUser = (event) => {
	event.preventDefault();
	const usersRef = ref(database, "users/" + username.value);
	document.getElementById("credentials-err").classList.add("hidden");

	get(usersRef).then((info) => {
		const user = info.val();
		if (!user || user.password != password.value) {
			document.getElementById("credentials-err").classList.remove("hidden");
		} else {
			localStorage.setItem("username", `${username.value}`);
			window.location.replace("./movies.html");
		}
	});
};
