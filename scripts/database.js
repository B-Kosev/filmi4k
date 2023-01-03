// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
	apiKey: "AIzaSyCq-wsUDatEm51kGUkVFF5aCJgXW4exlUQ",
	authDomain: "flimi4k.firebaseapp.com",
	projectId: "flimi4k",
	storageBucket: "flimi4k.appspot.com",
	messagingSenderId: "651125898782",
	appId: "1:651125898782:web:61e72bee238754fbe4f80f",
	measurementId: "G-EZGLD368NP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const dataRef = ref(database, "users");
const usersRef = push(dataRef);

export const addUser = (username, email, password) => {
	const dataRef = ref(database, "users/" + username);
	const usersRef = push(dataRef);
	set(usersRef, {
		username,
		email,
		password,
	});
};
