const express = require('express');
const ongController = require('../../controllers/ongController');
const ongsRouter = express.Router();


ongsRouter.get('/ongs', ongController.index);
ongsRouter.post('/ongs', ongController.create);

module.exports = ongsRouter;
