const { body } = require('express-validator');

exports.validateCreateVendedor = [
  body('name').notEmpty().withMessage('O nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('cnpj').notEmpty().withMessage('O CNPJ é obrigatório'),
];

exports.validateUpdateVendedor = [
  body('name').optional().notEmpty().withMessage('O nome é obrigatório'),
  body('email').optional().isEmail().withMessage('Email inválido'),
  body('password').optional().isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('cnpj').optional().notEmpty().withMessage('O CNPJ é obrigatório'),
];
