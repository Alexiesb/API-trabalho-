const ItemPedido = require('../models/itemPedido');
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
        if (!itemPedido) {
            return res.status(404).json({ message: 'Item do pedido não encontrado' });
        }
        res.json(itemPedido);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        await itemPedidoSchema.validate(req.body, { abortEarly: false });
        const itemPedido = new ItemPedido(req.body);
        await itemPedido.save();
        res.status(201).json(itemPedido);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await itemPedidoSchema.validate(req.body, { abortEarly: false });
        const itemPedido = await ItemPedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!itemPedido) {
            return res.status(404).json({ message: 'Item do pedido não encontrado' });
        }
        res.json(itemPedido);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const itemPedido = await ItemPedido.findByIdAndDelete(req.params.id);
        if (!itemPedido) {
            return res.status(404).json({ message: 'Item do pedido não encontrado' });
        }
        res.json({ message: 'Item do pedido deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
