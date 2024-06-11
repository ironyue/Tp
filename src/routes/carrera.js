const express = require('express');
const router = express.Router();
const carrerasController = require('../controllers/carrerasController');
const { validarCrearCarrera } = require('../middleware/validarSchemas');

router.get('/carrera', carrerasController.obtenerTodas);

router.get('/carrera/:id', carrerasController.obtenerPorId);

router.post('/carrera', validarCrearCarrera, carrerasController.crear);

router.delete('/carrera/:id', carrerasController.borrar);

module.exports = router;
