const app = require('./index');
const { waterWallsHandler } = require('./waterWallsToMatrix');

app.post('/api/waterWalls', waterWallsHandler);
