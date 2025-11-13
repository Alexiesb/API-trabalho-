const { body } = require('express-validator');

exports.validateCreateCategoria = [
  body('name').notEmpty().withMessage('O nome da categoria é obrigatório'),
];

exports.validateUpdateCategoria = [
  body('name').optional().notEmpty().withMessage('O nome da categoria é obrigatório'),
];
