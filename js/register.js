import { addUser, getUser, getUsers } from "./database.js";

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const registerUser = async (event) => {
	event.preventDefault();
	const user = await getUser(username.value);
	const allUsers = await getUsers();
	let emails = [];
	for (const [key, value] of Object.entries(allUsers)) {
		emails.push(value.email);
	}
	document.getElementById("confirm-password-err").classList.add("hidden");
	document.getElementById("username-err").classList.add("hidden");
	document.getElementById("email-err").classList.add("hidden");
	document.getElementById("password-err").classList.add("hidden");
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	if (
		password.value != confirmPassword.value ||
		user?.username === username.value ||
		emails.includes(email.value) ||
		!passwordRegex.test(password.value)
	) {
		if (password.value != confirmPassword.value) document.getElementById("confirm-password-err").classList.remove("hidden");
		if (user.username === username.value) document.getElementById("username-err").classList.remove("hidden");
		if (emails.includes(email.value)) document.getElementById("email-err").classList.remove("hidden");
		if (!passwordRegex.test(password.value)) document.getElementById("password-err").classList.remove("hidden");
	} else {
		addUser(username.value, email.value, password.value);
		window.location.replace("/login.html");
	}
};

document.getElementById("register-form").addEventListener("submit", (event) => {
	registerUser(event);
});
