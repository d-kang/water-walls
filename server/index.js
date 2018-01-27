const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = module.exports = express();
const PORT = 1212;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.listen(PORT, () => console.log(`lisenting http://localhost:${PORT}`));

require('./routes');
