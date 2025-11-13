const { body } = require('express-validator');

exports.validateCreateUsuario = [
  body('name').notEmpty().withMessage('O nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('cpf').notEmpty().withMessage('O CPF é obrigatório'),
];

exports.validateUpdateUsuario = [
  body('name').optional().notEmpty().withMessage('O nome é obrigatório'),
  body('email').optional().isEmail().withMessage('Email inválido'),
  body('password').optional().isLength({ min: 6 }).withMessage('A senha deve ter pelo menos 6 caracteres'),
  body('cpf').optional().notEmpty().withMessage('O CPF é obrigatório'),
];
