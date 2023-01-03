import { addUser } from "./database.js";

window.onload = function () {
	document.getElementById("register-form").addEventListener("submit", (event) => registerUser(event));
};

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const registerUser = (event) => {
	event.preventDefault();
	if (password.value != confirmPassword.value) {
		document.getElementById("confirm-password-err").classList.remove("hidden");
	}
	addUser(username.value, email.value, password.value);
};
