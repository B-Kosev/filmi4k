// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, set, push, get, update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCq-wsUDatEm51kGUkVFF5aCJgXW4exlUQ",
	authDomain: "flimi4k.firebaseapp.com",
	databaseURL: "https://flimi4k-default-rtdb.firebaseio.com",
	projectId: "flimi4k",
	storageBucket: "flimi4k.appspot.com",
	messagingSenderId: "651125898782",
	appId: "1:651125898782:web:61e72bee238754fbe4f80f",
	measurementId: "G-EZGLD368NP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const addUser = (username, email, password) => {
	const usersRef = ref(database, "users/" + username);
	set(usersRef, {
		username,
		email,
		password,
	});
};

export const getMovies = async () => {
	const moviesRef = ref(database, "movies");
	const movies = await get(moviesRef);
	return movies.val();
};

export const getMovie = async (id) => {
	const movieRef = ref(database, "movies/" + id);
	const movie = await get(movieRef);
	return movie.val();
};

export const getUser = async (id) => {
	const userRef = ref(database, "users/" + id);
	const user = await get(userRef);
	return user.val();
};

export const getUsers = async () => {
	const usersRef = ref(database, "users");
	const users = await get(usersRef);
	return users.val();
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
		likes: 728,
		dislikes: 72,
		rating: 9,
		imdb_rating: 8.3,
		posterUrl: "./images/lionKing.webp",
		screenshotUrl: "./images/lionking-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/lFzVJEksoDY",
		comments: [
			{
				username: "tgstamatov",
				comment: "my favourite movie",
			},
		],
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
		likes: 927,
		dislikes: 128,
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
		likes: 464,
		dislikes: 99,
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
		likes: 927,
		dislikes: 128,
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
		likes: 501,
		dislikes: 50,
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
		likes: 1091,
		dislikes: 68,
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
		likes: 244,
		dislikes: 36,
		rating: 8.7,
		imdb_rating: 7.7,
		comments: [],
		posterUrl: "./images/butterfly.jpg",
		screenshotUrl: "./images/butterfly-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/B8_dgqfPXFg",
	});

	set(ref(database, "movies/thegodfather"), {
		id: "thegodfather",
		title_en: "The Godfather",
		title_bg: "Кръстникът",
		genres: ["Драма", "Криминален"],
		countries: ["САЩ"],
		year: 1972,
		length: 175,
		director: "Франсис Форд Копола",
		description:
			"Франсис Форд Копола представя сагата за фамилията Корлеоне с Марлон Брандов ролята на Кръстника Дон Вито. Копола рисува смразяващата картина на възхода на една сицилианска фамилия, на загубата на властта и влиянието и в Америка, както и предаването им от баща на син. Копола майсторски балансира сцените от семейния живот и отвратителния престъпен бизнес, в който са въвлечени членовете на семейството. Заснет по романа-бестселър на Марио Пузо, този брилянтен филм получи през 1972г. “Оскар” за най-добър филм",
		likes: 962,
		dislikes: 168,
		rating: 7.8,
		imdb_rating: 9.2,
		comments: [],
		posterUrl: "./images/thegodfather.jpg",
		screenshotUrl: "./images/thegodfather-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/UaVTIH8mujA",
	});

	set(ref(database, "movies/schindler"), {
		id: "schindler",
		title_en: "Schindler's List",
		title_bg: "Списъкът на Шиндлер",
		genres: ["Драма", "Исторически", "Военен"],
		countries: ["САЩ"],
		year: 1993,
		length: 195,
		director: "Стивън Спилбърг",
		description:
			"Оскар Шиндлер е голям немски бизнесмен, който отваря фабрика в Полша през Втората Световна Война. Ставайки свидетел на зверствата от страна на нацистите върху еврейското население обаче, той става изключително човечев и превръща фабриката си в лагер на спасението за евреите. Филма е базиран на истинската история на Оскар Шиндлер, който успява да спаси близо 1100 евреи от обгазяване в лагерите в Аушвиц.",
		likes: 694,
		dislikes: 82,
		rating: 8.9,
		imdb_rating: 8.9,
		comments: [],
		posterUrl: "./images/schindler.jpg",
		screenshotUrl: "./images/schindler-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/mxphAlJID9U",
	});

	set(ref(database, "movies/platoon"), {
		id: "platoon",
		title_en: "Platoon",
		title_bg: "Взвод",
		genres: ["Драма", "Екшън", "Военен"],
		countries: ["САЩ"],
		year: 1986,
		length: 120,
		director: "Оливър Стоун",
		description:
			'Носител на 4 награди Оскар®, "Взвод" е филм, който "показва войната от гледната точка на тези, които я водят - самите войници - без да залъгва зрителите, че в нея има нещо забавно" Роджър Ебърт. Сценарист и режисьор е носителят на Оскар® Оливър Стоун, като историята във филма е базирана на личните му преживявания по време на войната. Крис Тейлър (Чарли Шийн) е млад американец, който скоро след пристигането си във Виетнам открива, че трябва да се бори не само с виетконгците, но и със страха, изтощението и гнева си. Ситуацията допълнително се нажежава и от съперничеството между командващите взвода сержанти (номинираният за Оскар Том Беринджър и Уилям Дефо). Непрекъснатата борба, вътрешна и външна, разкъсва Тейлър, докато не свежда съществуването му само до едно - запазването на собствения му живот.',
		likes: 261,
		dislikes: 29,
		rating: 9.0,
		imdb_rating: 8.1,
		comments: [],
		posterUrl: "./images/platoon.jpg",
		screenshotUrl: "./images/platoon-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/R8weLPF4qBQ",
	});

	set(ref(database, "movies/thethinredline"), {
		id: "thethinredline",
		title_en: "The Thin Red Line",
		title_bg: "Тънка червена линия",
		genres: ["Драма", "Екшън", "Военен"],
		countries: ["САЩ"],
		year: 1998,
		length: 170,
		director: "Терънс Малик",
		description:
			"Невероятен актьорски състав, сред който блестят Шон Пен, Ник Нолти и Уди Харълсън, се хвърля в битка в тази завладяващ реалистичен филм за войниците и моралния хаос на Тихоокеанския фронт по време на Втората световна война. Първият филм на големия режисьор Терънс Малик след 20-годишно оттегляне от киното, ТЪНКА ЧЕРВЕНА ЛИНИЯ е шедьовър, определен от критиката като “най-добрия съвременен военен филм!”",
		likes: 235,
		dislikes: 33,
		rating: 8.8,
		imdb_rating: 7.6,
		comments: [],
		posterUrl: "./images/thethinredline.jpg",
		screenshotUrl: "./images/thethinredline-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/mKl5_OxKBn8",
	});

	set(ref(database, "movies/apocalypsenow"), {
		id: "apocalypsenow",
		title_en: "Apocalypse Now",
		title_bg: "Апокалипсис сега",
		genres: ["Драма", "Екшън", "Военен"],
		countries: ["САЩ"],
		year: 1979,
		length: 147,
		director: "Франс Форд Копола",
		description:
			"Шокиращата визия на Копола за човешкото сърце на мрака е разкрита чрез странната лудост на Виетнамската война. Лейтенант Уилард (Мартин Шийн) получава заповед да издири и унищожи мистериозния полковник Курц (Марлон Брандо), който се е оттеглил дълбоко в джунглите. Мисията на Уилард се превръща в епично пътуване към себе си, за да открие в крайна сметка нещо от своята душа в сложната личност на полковник Курц.",
		likes: 150,
		dislikes: 31,
		rating: 8.3,
		imdb_rating: 8.5,
		comments: [],
		posterUrl: "./images/apocalypsenow.jpg",
		screenshotUrl: "./images/apocalypsenow-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/FTjG-Aux_yQ",
	});

	set(ref(database, "movies/thethinredline"), {
		id: "thethinredline",
		title_en: "The Thin Red Line",
		title_bg: "Тънка червена линия",
		genres: ["Драма", "Екшън", "Военен"],
		countries: ["САЩ"],
		year: 1998,
		length: 170,
		director: "Терънс Малик",
		description: "",
		likes: 261,
		dislikes: 29,
		rating: 9.0,
		imdb_rating: 8.1,
		comments: [],
		posterUrl: "./images/thethinredline.jpg",
		screenshotUrl: "./images/thethinredline-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/R8weLPF4qBQ",
	});

	set(ref(database, "movies/privateryan"), {
		id: "privateryan",
		title_en: "Saving Private Ryan",
		title_bg: "Спасяването на редник Райън",
		genres: ["Драма", "Екшън", "Военен"],
		countries: ["САЩ"],
		year: 1998,
		length: 169,
		director: "Стивън Спилбърг",
		description:
			"Разказана през очите на взвод американски войници, историята започва с историческия ден на нашествието на съюзниците в Нормандия, когато бойците дебаркират на морския бряг с опасна специална мисия. Капитан Джон Милър (Том Ханкс) трябва да отведе своите войници отвъд фронтовата линия, за да открият редник Джеймс Райън, чиито трима братя са загинали в битка. Изправени пред непреодолими пречки, мъжете се разбунтуват сред възложената им заповед. Защо трябва осем души да рискуват живота си само заради един войник? Сред бруталната реалност на войната всеки от тях търси отговор за себе си - и сила да преодолее несигурното бъдеще с чест, достойнство и смелост.",
		likes: 419,
		dislikes: 43,
		rating: 9.1,
		imdb_rating: 8.6,
		comments: [],
		posterUrl: "./images/privateryan.jpg",
		screenshotUrl: "./images/privateryan-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/9CiW_DgxCnQ",
	});

	set(ref(database, "movies/exodus"), {
		id: "exodus",
		title_en: "Exodus: Gods and Kings",
		title_bg: "Изход: Богове и Царе",
		genres: ["Драма", "Екшън", "Приключенски"],
		countries: ["САЩ", "Великобритания", "Испания"],
		year: 2014,
		length: 150,
		director: "Ридли Скот",
		description:
			"Приключенският епос „Изход: Богове и Царе“ е историята за смелостта на един човек да се изправи срещу мощта на една империя.По времето на фараоните, когато египтяните са живели добре, а еврейските роби са били измъчвани, Царят управлява всички в Египет с двамата си синове, Рамзес истинския му син, и Мойсей приемния му син. Фараонът цар иска да избере новия владетел на Египет заради влошеното си здраве. Рамзес се възкачва на трона и открива, че брат му е роден евреин. Моисей се опитва да намери себе си и се стреми да помага на неговия народ. Двамата братя сега се конкурират за Египет, един брат роден да управлява, и друг брат роден да се противопостави на правилата и да поведе народа си към славата.",
		likes: 260,
		dislikes: 42,
		rating: 8.6,
		imdb_rating: 6.2,
		comments: [],
		posterUrl: "./images/exodus.jpg",
		screenshotUrl: "./images/exodus-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/t-8YsulfxVI",
	});

	set(ref(database, "movies/thepassionofthechrist"), {
		id: "thepassionofthechrist",
		title_en: "The Passion of the Christ",
		title_bg: "Страстите Христови",
		genres: ["Драма", "Исторически"],
		countries: ["САЩ"],
		year: 2004,
		length: 126,
		director: "Мел Гибсън",
		description:
			"Страстите – на латински означава страдание, но също така дълбока и съвършена любов – и отпраща към мъчителните и в крайна сметка изкупителни събития от последните 12 часа от земния живот на Исус Христос.Мел Гибсън вдъхва живот на вечната история с безкомпромисния реализъм и суровата емоция на съвременното кино.Сценарият е създаден по текстове от библейските евангелия на Матей, Марко, Лука и Йоан.",
		likes: 500,
		dislikes: 0,
		rating: 10.0,
		imdb_rating: 7.1,
		comments: [],
		posterUrl: "./images/thepassionofthechrist.jpg",
		screenshotUrl: "./images/thepassionofthechrist-screenshot.jpg",
		trailerUrl: "https://www.youtube.com/embed/4Aif1qEB_JU",
	});
};

export const updateMovie = (id, movieInfo) => {
	const movieRef = ref(database, "movies/" + id);
	set(movieRef, movieInfo);
};

export const updateUser = (id, userInfo) => {
	const userRef = ref(database, "users/" + id);
	set(userRef, userInfo);
};
