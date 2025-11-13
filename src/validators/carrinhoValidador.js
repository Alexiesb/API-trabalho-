const { body } = require('express-validator');

exports.validateCreateCarrinho = [
  body('user').notEmpty().withMessage('O usuário é obrigatório'),
  body('items').isArray({ min: 1 }).withMessage('O carrinho deve ter pelo menos um item'),
];

exports.validateUpdateCarrinho = [
  body('user').optional().notEmpty().withMessage('O usuário é obrigatório'),
  body('items').optional().isArray({ min: 1 }).withMessage('O carrinho deve ter pelo menos um item'),
];
