const express = require('express');
const router = express.Router();
const materiasController = require('../controllers/materiasController');
const { validarCrearMateria } = require('../middleware/validarSchemas');

router.get('/materias', materiasController.obtenerTodas);

router.get('/materias/:id', materiasController.obtenerPorId);

router.post('/materias/:idCarrera', validarCrearMateria, materiasController.crear);

router.delete('/materias/:id', materiasController.borrar);

module.exports = router;
