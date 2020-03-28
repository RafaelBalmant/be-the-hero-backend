const express = require('express');
const allRoutes = require('./routes');
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.use(allRoutes);

app.listen(3333);
