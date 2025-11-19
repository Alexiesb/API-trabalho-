const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario',
        required: true
    },
    dataPedido: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['Pendente', 'Em processamento', 'Enviado', 'Entregue', 'Cancelado'],
        default: 'Pendente'
    },
    enderecoEntrega: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Endereco',
        required: true
    }
}, {
    timestamps: true
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
