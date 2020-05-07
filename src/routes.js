const express = require('express');
const routes = express.Router();

const adsController = require('./Controllers/adsController');

routes.get('/', adsController.get);
routes.post('/', adsController.insert);
routes.put('/:id', adsController.update);
routes.delete('/:id', adsController.delete);

module.exports = routes;