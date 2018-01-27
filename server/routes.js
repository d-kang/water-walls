const app = require('./index');
const { waterWallsHandler } = require('./handlers');

app.post('/api/waterWalls', waterWallsHandler);
