const { waterWallsToMatrix } = require('./utils/waterWallsToMatrix');

const waterWallsHandler = (req, res) => {
  const { payload } = req.body;
  const data = waterWallsToMatrix(payload);
  res.send(data);
};

module.exports = {
  waterWallsHandler
};
