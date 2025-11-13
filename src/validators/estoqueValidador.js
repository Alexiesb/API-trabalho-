const { body } = require('express-validator');

exports.validateCreateEstoque = [
  body('product').notEmpty().withMessage('O produto é obrigatório'),
  body('quantity').isInt({ gt: -1 }).withMessage('A quantidade em estoque deve ser um número inteiro não negativo'),
];

exports.validateUpdateEstoque = [
  body('product').optional().notEmpty().withMessage('O produto é obrigatório'),
  body('quantity').optional().isInt({ gt: -1 }).withMessage('A quantidade em estoque deve ser um número inteiro não negativo'),
];
