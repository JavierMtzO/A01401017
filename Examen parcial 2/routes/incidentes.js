const express = require('express');

const router = express.Router();
path = require('path')

const incidentesController = require('../controllers/incidentes-controller');

router.get('/', incidentesController.get);

router.get('/incidente', incidentesController.getIncidente);
router.post('/incidente', incidentesController.postIncidente);

module.exports = router;