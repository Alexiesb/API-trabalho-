const yup = require('yup');

const pedidoSchema = yup.object().shape({
    cliente: yup.string().required('Cliente é obrigatório'),
    funcionario: yup.string().required('Funcionário é obrigatório'),
    status: yup.string().required('Status é obrigatório'),
    enderecoEntrega: yup.string().required('Endereço de entrega é obrigatório')
});

module.exports = pedidoSchema;
