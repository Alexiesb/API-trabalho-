const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

router.get('/', pagamentoController.getAll);
router.get('/:id', pagamentoController.getById);
router.post('/', pagamentoController.create);
router.put('/:id', pagamentoController.update);
router.delete('/:id', pagamentoController.delete);

module.exports = router;
