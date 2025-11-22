const Pagamento = require('../models/pagamento');
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
        if (!pagamento) {
            return res.status(404).json({ message: 'Pagamento não encontrado' });
        }
        res.json(pagamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        await pagamentoSchema.validate(req.body, { abortEarly: false });
        const pagamento = new Pagamento(req.body);
        await pagamento.save();
        res.status(201).json(pagamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await pagamentoSchema.validate(req.body, { abortEarly: false });
        const pagamento = await Pagamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!pagamento) {
            return res.status(404).json({ message: 'Pagamento não encontrado' });
        }
        res.json(pagamento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const pagamento = await Pagamento.findByIdAndDelete(req.params.id);
        if (!pagamento) {
            return res.status(404).json({ message: 'Pagamento não encontrado' });
        }
        res.json({ message: 'Pagamento deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
