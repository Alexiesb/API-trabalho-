const { body } = require('express-validator');

exports.validateCreateProduto = [
  body('name').notEmpty().withMessage('O nome do produto é obrigatório'),
  body('description').notEmpty().withMessage('A descrição do produto é obrigatória'),
  body('price').isFloat({ gt: 0 }).withMessage('O preço do produto deve ser um número positivo'),
  body('category').notEmpty().withMessage('A categoria do produto é obrigatória'),
];

exports.validateUpdateProduto = [
  body('name').optional().notEmpty().withMessage('O nome do produto é obrigatório'),
  body('description').optional().notEmpty().withMessage('A descrição do produto é obrigatória'),
  body('price').optional().isFloat({ gt: 0 }).withMessage('O preço do produto deve ser um número positivo'),
  body('category').optional().notEmpty().withMessage('A categoria do produto é obrigatória'),
];
