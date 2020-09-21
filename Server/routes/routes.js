const express = require('express');
const sc = require('../controller/student.controller')

var router = express.Router();

/**
 * POST: parar insertar datos y enviar datos sensibles.
 * GET: Para obtener datos.
 * PUT: Modificar datos.
 * DELETE: Eliminar datos.
 */

// Crear
router.post('/', sc.create );

// Visualizar
router.get('/', sc.obtener);

//Actualizar datos
router.put('/:id', sc.Update);

//Eliminar datos
router.delete('/:id', sc.Delete);

module.exports = router;