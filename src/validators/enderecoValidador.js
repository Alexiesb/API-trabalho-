const { body } = require('express-validator');

exports.validateCreateEndereco = [
  body('street').notEmpty().withMessage('A rua é obrigatória'),
  body('city').notEmpty().withMessage('A cidade é obrigatória'),
  body('state').notEmpty().withMessage('O estado é obrigatório'),
  body('zipCode').notEmpty().withMessage('O CEP é obrigatório'),
];

exports.validateUpdateEndereco = [
  body('street').optional().notEmpty().withMessage('A rua é obrigatória'),
  body('city').optional().notEmpty().withMessage('A cidade é obrigatória'),
  body('state').optional().notEmpty().withMessage('O estado é obrigatório'),
  body('zipCode').optional().notEmpty().withMessage('O CEP é obrigatório'),
];
