const yup = require('yup');

const funcionarioSchema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    cpf: yup.string().required('CPF é obrigatório').length(11, 'CPF deve ter 11 caracteres'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    cargo: yup.string().required('Cargo é obrigatório'),
    salario: yup.number().required('Salário é obrigatório').positive('Salário deve ser um número positivo')
});

module.exports = funcionarioSchema;
