const mongoose = require('mongoose');
const Pagamento = require('../models/pagamento');
const Pedido = require('../models/pedido');
const pagamentoSchema = require('../validators/pagamentoValidator');

exports.getAll = async (req, res) => {
  try {
    const pagamentos = await Pagamento.find().populate('pedido');
    res.json(pagamentos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const pagamento = await Pagamento.findById(req.params.id).populate('pedido');
    if (!pagamento) return res.status(404).json({ message: 'Pagamento não encontrado' });
    res.json(pagamento);
  } catch (error) {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.create = async (req, res) => {
  try {
    await pagamentoSchema.validate(req.body, { abortEarly: false });

    const { pedido } = req.body;
    if (!mongoose.Types.ObjectId.isValid(pedido)) return res.status(400).json({ message: 'ID de pedido inválido' });

    const p = await Pedido.findById(pedido);
    if (!p) return res.status(400).json({ message: 'Pedido não encontrado' });

    const pagamento = new Pagamento(req.body);
    await pagamento.save();
    const populado = await Pagamento.findById(pagamento._id).populate('pedido');
    res.status(201).json(populado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const existente = await Pagamento.findById(req.params.id);
    if (!existente) return res.status(404).json({ message: 'Pagamento não encontrado' });

    const dados = { ...existente.toObject(), ...req.body };

    if (req.body.pedido) {
      if (!mongoose.Types.ObjectId.isValid(req.body.pedido)) return res.status(400).json({ message: 'ID de pedido inválido' });
      const p = await Pedido.findById(req.body.pedido);
      if (!p) return res.status(400).json({ message: 'Pedido não encontrado' });
    }

    await pagamentoSchema.validate(dados, { abortEarly: false });

    const pagamento = await Pagamento.findByIdAndUpdate(
      req.params.id,
      dados,
      { new: true, runValidators: true, context: 'query' }
    ).populate('pedido');

    res.json(pagamento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.partialUpdate = async (req, res) => {
  try {
    const existente = await Pagamento.findById(req.params.id);
    if (!existente) return res.status(404).json({ message: 'Pagamento não encontrado' });

    if (req.body.pedido) {
      if (!mongoose.Types.ObjectId.isValid(req.body.pedido)) return res.status(400).json({ message: 'ID de pedido inválido' });
      const p = await Pedido.findById(req.body.pedido);
      if (!p) return res.status(400).json({ message: 'Pedido não encontrado' });
    }

    const merged = { ...existente.toObject(), ...req.body };
    await pagamentoSchema.validate(merged, { abortEarly: false });

    const pagamento = await Pagamento.findByIdAndUpdate(
      req.params.id,
      { $set: req.body, updatedAt: new Date() },
      { new: true, runValidators: true, context: 'query' }
    ).populate('pedido');

    res.json(pagamento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByIdAndDelete(req.params.id);
    if (!pagamento) return res.status(404).json({ message: 'Pagamento não encontrado' });
    res.json({ message: 'Pagamento deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
