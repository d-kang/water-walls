const { waterWallsToMatrix } = require('./waterWallsToMatrix');

const waterWallsHandler = (req, res) => {
  const { payload } = req.body;
  console.log('hi i ran')
  // const data = waterWallsToMatrix(payload);
  // res.send(data);
  res.send({hi: 'hello'});
};

module.exports = {
  waterWallsHandler
};
