const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioControlador');
const { validateCreateUsuario, validateUpdateUsuario } = require('../validators/usuarioValidador');

router.post('/', validateCreateUsuario, usuarioController.createUsuario);
router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.put('/:id', validateUpdateUsuario, usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;
