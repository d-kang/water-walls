const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = module.exports = express();
const PORT = 1212;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.listen(PORT, () => console.log(`lisenting http://localhost:${PORT}`));

require('./routes');
