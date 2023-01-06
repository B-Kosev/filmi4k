export const mapGenres = (genres) => {
	let result = [];
	genres.map((genre) => {
		switch (genre) {
			case "Екшън":
				result.push("action");
				break;
			case "Трилър":
				result.push("thriller");
				break;
			case "Драма":
				result.push("drama");
				break;
			case "Комедия":
				result.push("comedy");
				break;
			case "Романтичен":
				result.push("romantic");
				break;
			case "Ужаси":
				result.push("horror");
				break;
			case "Фантастика":
				result.push("fantastic");
				break;
			case "Приключенски":
				result.push("adventurous");
				break;
			case "Исторически":
				result.push("historical");
				break;
			case "Мистерия":
				result.push("mistery");
				break;
			case "Фентъзи":
				result.push("fantasy");
				break;
			case "Военен":
				result.push("military");
				break;
			case "Уестърн":
				result.push("western");
				break;
			case "Руски":
				result.push("russian");
				break;
			case "Биографичен":
				result.push("biographical");
				break;
			case "Криминален":
				result.push("criminal");
				break;
			case "Документален":
				result.push("documentary");
				break;
			case "Спортен":
				result.push("sporty");
				break;
			case "Индийски":
				result.push("indian");
				break;
		}
	});
	return result;
};
