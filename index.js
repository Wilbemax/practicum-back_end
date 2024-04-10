const defaultRouteController = require('./controllers/default');
const voteRouteController = require('./controllers/vote');
const mainRouteController = require('./controllers/main');
const gameRouteController = require('./controllers/game');

const staticFile = require('./appModules/http-utils/static-file');
const parseBody = require('./appModules/http-utils/parse-body')
const mimeTypes = require('./appModules/http-utils/mime-types')

module.exports = {defaultRouteController, voteRouteController, mainRouteController, gameRouteController, staticFile, parseBody, mimeTypes}