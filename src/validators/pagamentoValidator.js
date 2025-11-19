const yup = require('yup');

const pagamentoSchema = yup.object().shape({
    pedido: yup.string().required('Pedido é obrigatório'),
    valor: yup.number().required('Valor é obrigatório').positive('Valor deve ser um número positivo'),
    formaPagamento: yup.string().required('Forma de pagamento é obrigatória'),
    status: yup.string().required('Status é obrigatório')
});

module.exports = pagamentoSchema;
