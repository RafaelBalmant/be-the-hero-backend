const express = require('express');
const incidentsController = require('../../controllers/incedentController')
const incidentsRouter = express.Router();

incidentsRouter.get('/incidents', incidentsController.index);
incidentsRouter.post('/incidents', incidentsController.create);
incidentsRouter.delete('/incidents/:id', incidentsController.delete);


module.exports = incidentsRouter;
