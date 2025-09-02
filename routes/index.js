const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Índice de bandas de música.'));

module.exports = router;
