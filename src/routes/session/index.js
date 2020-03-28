const express = require('express');
const sessionController = require('../../controllers/sessionController');
const routerSession = express.Router();

routerSession.post('/session', sessionController.create);

module.exports = routerSession;
