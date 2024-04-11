const { parseBody } = require('../appModules/http-utils/index');
const { PATH_TO_RATING_FILE, WEIGHT } = require('../appModules/rating/index');
async function voteRouteController(req, res) {
	if (req.method !== 'POST') {
		res.statusCode = 404;
		res.end('Not Found');
		return;
	}

	try {
		const body = await parseBody(req);
		console.log(body);
		res.statusCode = 200;
	} catch (e) {
		res.statusCode = 500;
		res.end(e);
	}

	parseBody(req, async (err) => {
		if (err) {
			res.statusCode = 500;
			res.end('Internal Server Error');
		}
		res.statusCode = 200;
		const body = await parseBody(req);
		const data = JSON.parse(body);
		const rating = createRating(data, WEIGHT);
		const ratingFile = await fs.readFile(PATH_TO_RATING_FILE);
		const ratingArray = JSON.parse(ratingFile);
		const newRating = updateRating(ratingArray, data.id, rating);
		await fs.writeFile(PATH_TO_RATING_FILE, JSON.stringify(newRating));
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(newRating.sort((a, b) => b.rating - a.rating)));
	});
}

module.exports = voteRouteController;
