const express = require('express');
const router = express.Router();
const enderecoController = require('../controllers/enderecoControlador');
const { validateCreateEndereco, validateUpdateEndereco } = require('../validators/enderecoValidador');

router.post('/', validateCreateEndereco, enderecoController.createEndereco);
router.get('/', enderecoController.getAllEnderecos);
router.get('/:id', enderecoController.getEnderecoById);
router.put('/:id', validateUpdateEndereco, enderecoController.updateEndereco);
router.delete('/:id', enderecoController.deleteEndereco);

module.exports = router;
