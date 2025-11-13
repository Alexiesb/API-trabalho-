const express = require('express');
const router = express.Router();
const estoqueController = require('../controllers/estoqueControlador');
const { validateCreateEstoque, validateUpdateEstoque } = require('../validators/estoqueValidador');

router.post('/', validateCreateEstoque, estoqueController.createEstoque);
router.get('/', estoqueController.getAllEstoques);
router.get('/:id', estoqueController.getEstoqueById);
router.put('/:id', validateUpdateEstoque, estoqueController.updateEstoque);
router.delete('/:id', estoqueController.deleteEstoque);

module.exports = router;
