const Pedido = require('../models/pedido');
const pedidoSchema = require('../validators/pedidoValidator');

exports.getAll = async (req, res) => {
    try {
        const pedidos = await Pedido.find().populate('cliente').populate('funcionario').populate('enderecoEntrega');
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const pedido = await Pedido.findById(req.params.id).populate('cliente').populate('funcionario').populate('enderecoEntrega');
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        await pedidoSchema.validate(req.body, { abortEarly: false });
        const pedido = new Pedido(req.body);
        await pedido.save();
        res.status(201).json(pedido);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await pedidoSchema.validate(req.body, { abortEarly: false });
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const pedido = await Pedido.findByIdAndDelete(req.params.id);
        if (!pedido) {
            return res.status(404).json({ message: 'Pedido não encontrado' });
        }
        res.json({ message: 'Pedido deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
