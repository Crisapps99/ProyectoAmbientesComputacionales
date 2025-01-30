//rutas para las notas
const express = require('express');
const router = express.Router();
const notaController = require('../controllers/notaController');
const { now } = require('mongoose');
//api/notas
//accedemos al metodo
router.post('/', notaController.crearNota);
router.get('/', notaController.obtenerNotas);
router.put('/:id', notaController.actualizarNota);
router.get('/:id', notaController.obtenerNota);
router.delete('/:id', notaController.eliminarNota);
module.exports = router
