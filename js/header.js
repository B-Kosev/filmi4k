window.onload = function () {
	if (localStorage.getItem("username")) {
		document.getElementById("login-parent").classList.add("hidden");
		document.getElementById("register-parent").classList.add("hidden");
		document.getElementById("greeting-parent").classList.remove("hidden");
		document.getElementById("greeting").innerText = localStorage.getItem("username");
		document.getElementById("logout-button-parent").classList.remove("hidden");
	} else {
		document.getElementById("login-parent").classList.remove("hidden");
		document.getElementById("register-parent").classList.remove("hidden");
		document.getElementById("greeting-parent").classList.add("hidden");
		document.getElementById("logout-button-parent").classList.add("hidden");
	}

	document.getElementById("logout-button").addEventListener("click", () => {
		localStorage.removeItem("username");
		window.location.replace("./index.html");
	});
};
