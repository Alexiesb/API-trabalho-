const express = require('express');
const router = express.Router();
const vendedorController = require('../controllers/vendedorControlador');
const { validateCreateVendedor, validateUpdateVendedor } = require('../validators/vendedorValidador');

router.post('/', validateCreateVendedor, vendedorController.createVendedor);
router.get('/', vendedorController.getAllVendedores);
router.get('/:id', vendedorController.getVendedorById);
router.put('/:id', validateUpdateVendedor, vendedorController.updateVendedor);
router.delete('/:id', vendedorController.deleteVendedor);

module.exports = router;
