const express = require('express');

const router = express.Router();
path = require('path')

const autosController = require('../controllers/autos-controller');

router.get('/', autosController.get);

router.get('/comprar', autosController.getNuevoAuto);

router.post('/comprar', autosController.postNuevoAuto);

module.exports = router;