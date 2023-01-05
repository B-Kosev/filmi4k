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

export const addMovies = () => {
	set(ref(database, "movies/thelionking"), {
		id: "thelionking",
		title_en: "The Lion King",
		title_bg: "Цар Лъв",
		genres: ["Екшън", "Трилър", "Драма"],
		countries: ["САЩ"],
		year: 1994,
		length: 88,
		director: "Роб Минкоф",
		description:
			"Героичната история проследява епичните приключения на малкото лъвче Симба, което се бори да се справи с отговорностите на възмъжаването и на своята предопределена роля на цар на джунглата.",
		rating: 9,
		imdb_rating: 8.3,
		comments: [],
		posterUrl: "./images/lionKing.webp",
		screenshotUrl: "./images/lionking-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/lFzVJEksoDY",
	});

	set(ref(database, "movies/interstellar"), {
		id: "interstellar",
		title_en: "Interstellar",
		title_bg: "Интерстелар",
		genres: ["Фантастика", "Приключенски", "Драма"],
		countries: ["САЩ", "Великобритания"],
		year: 2014,
		length: 169,
		director: "Кристофър Нолан",
		description:
			"Докато времето ни на Земята изтича, екип от изследователи се заема с най-важната мисия в историята на човечеството: пътуване извън познатата галактика, за да разбере дали сред звездите има бъдеще за хората.",
		rating: 8.8,
		imdb_rating: 8.8,
		comments: [],
		posterUrl: "./images/interstellar.jpg",
		screenshotUrl: "./images/interstellar-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/zSWdZVtXT7E",
	});

	set(ref(database, "movies/inception"), {
		id: "inception",
		title_en: "Inception",
		title_bg: "Генезис",
		genres: ["Фантастика", "Екшън", "Трилър"],
		countries: ["САЩ", "Великобритания"],
		year: 2010,
		length: 148,
		director: "Кристофър Нолан",
		description:
			"Дом Коб е опитен крадец, несъмнено най-добрият в опасното изкуство на извличане-крадене на ценни тайни от дълбокото подсъзнание в състояние на сън, когато мозъкът е най-уязвим. Необичайната способност на Коб го е направила много търсен в този коварен нов свят на корпоративен шпионаж, но го е превърнала в беглец, взимайки му всичко, което е обичал.Сега на Коб му се предлага шанс за спасение. Една последна поръчка може да му върне живота, но само, ако успее да постигне смятаното за невъзможно - генезис. Вместо да трябва да направят перфектната кражба на идеи, Коб и неговият специален екип ще трябва да посадят една. Ако успеят, ще е перфектното престъпление. Но нито добрата подготовка, нито познанията им могат да подготвят екипа за опасния враг, срещу когото ще се изправят. Враг, който само Коб може да предвиди.",
		rating: 8.3,
		imdb_rating: 8.8,
		comments: [],
		posterUrl: "./images/inception.jpg",
		screenshotUrl: "./images/inception-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
	});

	set(ref(database, "movies/tenet"), {
		id: "tenet",
		title_en: "Tenet",
		title_bg: "Тенет",
		genres: ["Фантастика", "Екшън", "Трилър"],
		countries: ["САЩ", "Великобритания"],
		year: 2020,
		length: 150,
		director: "Кристофър Нолан",
		description:
			"В борбата си за спасението на света от Трета световна война, Героят е въоръжен само с една кодова дума – „Тенет“. Мисията му го въвлича в мътните и опасни води на международния шпионаж, но това, пред което се изправя е извън реалното време, нещо напълно непознато. Не е пътуване във времето, а е «Инверсия»…",
		rating: 7.8,
		imdb_rating: 6.1,
		comments: [],
		posterUrl: "./images/tenet.jpg",
		screenshotUrl: "./images/tenet-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/LdOM0x0XDMo",
	});

	set(ref(database, "movies/thegreenmile"), {
		id: "thegreenmile",
		title_en: "The Green Mile",
		title_bg: "Зеленият път",
		genres: ["Фентъзи", "Криминален", "Драма"],
		countries: ["САЩ"],
		year: 1999,
		length: 189,
		director: "Франк Дарабонт",
		description:
			"През 1935 г. обитателите на затвора “Колд Маунтийн” кръщават пътеката към ешафода “Зеленият път” заради цвета на линолеума, с който е постлана. Пол Еджкомб (Том Ханкс) е главен надзирател в затвора, когато пристига нов осъден - Джон Кофи (Майкъл Кларк Дънкан) е обвинен в садистичното убийство на две малки момиченца. Въпреки огромният му ръст и ужасяващите престъпления, заради които е затворен, Кофи изглежда добър човек, който се държи по-скоро като невинно дете, отколкото като закоравял бандит. Скоро Еджкомб и двама от неговите колеги – Хауъл (Дейвид Морс) и Стентън (Бари Пепър) забелязват нещо необичайно у Кофи: той е способен по чудат начин да лекува останалите затворници от болежките им. Тези негови умения напълно объркват надзирателите относно вероятността точно Кофи да е извършил приписваните му убийства.",
		rating: 9.1,
		imdb_rating: 8.5,
		comments: [],
		posterUrl: "./images/thegreenmile.jpg",
		screenshotUrl: "./images/thegreenmile-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/Bg7epsq0OIQ",
	});

	set(ref(database, "movies/theshawshankredemption"), {
		id: "theshawshankredemption",
		title_en: "The Shawshank Redemption",
		title_bg: "Изкуплението Шоушенк",
		genres: ["Криминален", "Драма"],
		countries: ["САЩ"],
		year: 1994,
		length: 142,
		director: "Франк Дарабонт",
		description:
			"40-те г. на 20 век. Анди Дюфрен е млад проспериращ банкер, чийто живот се променя драматично, когато е обвинен в убийството на жена си и нейният любовник и е осъден на доживотен затвор... Куражът на Анди и приятелството му с черноборсаджията на затвора Ред Рединг ще му помогнат да запази надеждата си жива. Това не е филм за отчаянието и самотата. Не е филм за изолацията. Това е филм за възкресените надежди, за приятелството, за мечтите и куражът на един мъж. Това е филм за свободата.",
		rating: 9.4,
		imdb_rating: 9.3,
		comments: [],
		posterUrl: "./images/shawshank.jpg",
		screenshotUrl: "./images/shawshank-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/PLl99DlL6b4",
	});

	set(ref(database, "movies/thebutterflyeffect"), {
		id: "thebutterflyeffect",
		title_en: "The Butterfly Effect",
		title_bg: "Ефектът на пеперудата",
		genres: ["Драма", "Мистерия", "Трилър"],
		countries: ["САЩ"],
		year: 2004,
		length: 113,
		director: "Дж. Макий Гръбър",
		description:
			"Евън Треборн е изгубил представа за времето. От най-ранна възраст, важни моменти в неговия живот изчезват в черна дупка от забрава, момчешките му години са белязани от поредица ужасяващи събития, който той обаче не може да си спомни. Това което остава са духът на спомена и разбитите животи на приятелите му от детството - Кейли, Лени и Томи. През детството си Еван е под наблюдение и грижа на психолог, който го съветва да си води дневник, в който да описва подробно живота си, ден по ден. Години по-късно, той открива случайно старите си дневници. Започвайки да ги чете, Еван се връща назад във времето, без да може да си обясни как. Той разбира, че старите му дневници, който лежат захвърлени са средство, с което той може да се връща назад във времето и да преоткрива загубените си спомени. Но по този начин Еван само открива каква отговорност носи за опропастените съдби на своите приятели и най-вечен а Кейли, първото момиче, което е обичал.",
		rating: 8.7,
		imdb_rating: 7.7,
		comments: [],
		posterUrl: "./images/butterfly.jpg",
		screenshotUrl: "./images/butterfly-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/B8_dgqfPXFg",
	});
};
