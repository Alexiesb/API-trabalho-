const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema({
    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido',
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    formaPagamento: {
        type: String,
        required: true,
        enum: ['Cartão de Crédito', 'Boleto', 'PIX']
    },
    status: {
        type: String,
        required: true,
        enum: ['Pendente', 'Pago', 'Falhou'],
        default: 'Pendente'
    }
}, {
    timestamps: true
});

const Pagamento = mongoose.model('Pagamento', pagamentoSchema);

module.exports = Pagamento;
