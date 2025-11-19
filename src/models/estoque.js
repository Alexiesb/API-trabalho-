const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
  produto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produto',
    required: true,
  },
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendedor',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model('Estoque', estoqueSchema);
