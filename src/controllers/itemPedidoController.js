const mongoose = require('mongoose');
const ItemPedido = require('../models/itemPedido');
const Pedido = require('../models/pedido');
const Produto = require('../models/produto');
const itemPedidoSchema = require('../validators/itemPedidoValidator');

exports.getAll = async (req, res) => {
  try {
    const itensPedido = await ItemPedido.find().populate('pedido').populate('produto');
    res.json(itensPedido);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const itemPedido = await ItemPedido.findById(req.params.id).populate('pedido').populate('produto');
    if (!itemPedido) return res.status(404).json({ message: 'Item do pedido não encontrado' });
    res.json(itemPedido);
  } catch (error) {
    res.status(400).json({ message: 'ID inválido' });
  }
};

exports.create = async (req, res) => {
  try {
    await itemPedidoSchema.validate(req.body, { abortEarly: false });

    const { pedido, produto } = req.body;
    if (!mongoose.Types.ObjectId.isValid(pedido) || !mongoose.Types.ObjectId.isValid(produto)) {
      return res.status(400).json({ message: 'IDs inválidos para pedido ou produto' });
    }

    const [p, prod] = await Promise.all([Pedido.findById(pedido), Produto.findById(produto)]);
    if (!p || !prod) return res.status(400).json({ message: 'Pedido ou produto não encontrado' });

    const itemPedido = new ItemPedido(req.body);
    await itemPedido.save();
    const populado = await ItemPedido.findById(itemPedido._id).populate('pedido').populate('produto');
    res.status(201).json(populado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const existente = await ItemPedido.findById(req.params.id);
    if (!existente) return res.status(404).json({ message: 'Item do pedido não encontrado' });

    const dados = { ...existente.toObject(), ...req.body };

    if (req.body.pedido) {
      if (!mongoose.Types.ObjectId.isValid(req.body.pedido)) return res.status(400).json({ message: 'ID de pedido inválido' });
      const p = await Pedido.findById(req.body.pedido);
      if (!p) return res.status(400).json({ message: 'Pedido não encontrado' });
    }

    if (req.body.produto) {
      if (!mongoose.Types.ObjectId.isValid(req.body.produto)) return res.status(400).json({ message: 'ID de produto inválido' });
      const prod = await Produto.findById(req.body.produto);
      if (!prod) return res.status(400).json({ message: 'Produto não encontrado' });
    }

    await itemPedidoSchema.validate(dados, { abortEarly: false });

    const itemPedido = await ItemPedido.findByIdAndUpdate(
      req.params.id,
      dados,
      { new: true, runValidators: true, context: 'query' }
    ).populate('pedido').populate('produto');

    res.json(itemPedido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.partialUpdate = async (req, res) => {
  try {
    const existente = await ItemPedido.findById(req.params.id);
    if (!existente) return res.status(404).json({ message: 'Item do pedido não encontrado' });

    if (req.body.pedido) {
      if (!mongoose.Types.ObjectId.isValid(req.body.pedido)) return res.status(400).json({ message: 'ID de pedido inválido' });
      const p = await Pedido.findById(req.body.pedido);
      if (!p) return res.status(400).json({ message: 'Pedido não encontrado' });
    }

    if (req.body.produto) {
      if (!mongoose.Types.ObjectId.isValid(req.body.produto)) return res.status(400).json({ message: 'ID de produto inválido' });
      const prod = await Produto.findById(req.body.produto);
      if (!prod) return res.status(400).json({ message: 'Produto não encontrado' });
    }

    const merged = { ...existente.toObject(), ...req.body };
    await itemPedidoSchema.validate(merged, { abortEarly: false });

    const itemPedido = await ItemPedido.findByIdAndUpdate(
      req.params.id,
      { $set: req.body, updatedAt: new Date() },
      { new: true, runValidators: true, context: 'query' }
    ).populate('pedido').populate('produto');

    res.json(itemPedido);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const itemPedido = await ItemPedido.findByIdAndDelete(req.params.id);
    if (!itemPedido) return res.status(404).json({ message: 'Item do pedido não encontrado' });
    res.json({ message: 'Item do pedido deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
