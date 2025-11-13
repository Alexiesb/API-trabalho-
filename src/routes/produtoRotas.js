const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoControlador');
const { validateCreateProduto, validateUpdateProduto } = require('../validators/produtoValidador');

router.post('/', validateCreateProduto, produtoController.createProduto);
router.get('/', produtoController.getAllProdutos);
router.get('/:id', produtoController.getProdutoById);
router.put('/:id', validateUpdateProduto, produtoController.updateProduto);
router.delete('/:id', produtoController.deleteProduto);

module.exports = router;
