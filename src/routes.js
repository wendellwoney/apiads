const express = require('express');
const routes = express.Router();


const adsController = require('./Controllers/adsController');
const loginController = require('./Controllers/loginController');

routes.get('/', loginController.verifyJWT, adsController.get);
routes.post('/', loginController.verifyJWT, adsController.insert);
routes.put('/:id', loginController.verifyJWT, adsController.update);
routes.delete('/:id', loginController.verifyJWT, adsController.delete);

//Auth
routes.post('/login', loginController.login);
routes.get('/logout', loginController.logOut);

module.exports = routes;