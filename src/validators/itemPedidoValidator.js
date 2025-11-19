const yup = require('yup');

const itemPedidoSchema = yup.object().shape({
    pedido: yup.string().required('Pedido é obrigatório'),
    produto: yup.string().required('Produto é obrigatório'),
    quantidade: yup.number().required('Quantidade é obrigatória').positive('Quantidade deve ser um número positivo'),
    precoUnitario: yup.number().required('Preço unitário é obrigatório').positive('Preço unitário deve ser um número positivo')
});

module.exports = itemPedidoSchema;
