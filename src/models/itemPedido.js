const mongoose = require('mongoose');

const itemPedidoSchema = new mongoose.Schema({
    pedido: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pedido',
        required: true
    },
    produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    precoUnitario: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const ItemPedido = mongoose.model('ItemPedido', itemPedidoSchema);

module.exports = ItemPedido;
