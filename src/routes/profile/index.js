const express = require('express');
const profileController = require('../../controllers/profileController');
const profileRouter = express.Router();

profileRouter.get('/profile', profileController.index);

module.exports = profileRouter;
