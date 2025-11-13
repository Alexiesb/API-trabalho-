const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaControlador');
const { validateCreateCategoria, validateUpdateCategoria } = require('../validators/categoriaValidador');

router.post('/', validateCreateCategoria, categoriaController.createCategoria);
router.get('/', categoriaController.getAllCategorias);
router.get('/:id', categoriaController.getCategoriaById);
router.put('/:id', validateUpdateCategoria, categoriaController.updateCategoria);
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;
