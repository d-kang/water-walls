const { waterWallsToMatrix } = require('./waterWallsToMatrix');

const waterWallsHandler = (req, res) => {
  const { payload } = req.body;
  console.log('payload', payload);
  console.log('typeofpayload', typeof payload);
  const data = waterWallsToMatrix(payload);
  console.log('data', data);
  res.send(data);
};

module.exports = {
  waterWallsHandler
};
