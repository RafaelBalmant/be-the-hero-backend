const routerOngs = require('./ongs');
const routerIncidents = require('./incidents');
const routerProfile = require('./profile');
const routerSession = require('./session');
const allRoutes = require("express").Router();

allRoutes.use(
  routerOngs,
  routerIncidents,
  routerProfile,
  routerSession
);


module.exports =  allRoutes;
