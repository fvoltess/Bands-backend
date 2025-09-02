const express = require('express');
const router = express.Router();
const bandasController = require('../controllers/bandasController');

router.get('/', bandasController.listar);

router.get('/id/:id', bandasController.detalle);

router.get('/genero/:genero', bandasController.porGenero);

module.exports = router;
