const Funcionario = require('../models/funcionario');
const funcionarioSchema = require('../validators/funcionarioValidator');

exports.getAll = async (req, res) => {
    try {
        const funcionarios = await Funcionario.find();
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const funcionario = await Funcionario.findById(req.params.id);
        if (!funcionario) {
            return res.status(404).json({ message: 'Funcionário não encontrado' });
        }
        res.json(funcionario);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        await funcionarioSchema.validate(req.body, { abortEarly: false });
        const funcionario = new Funcionario(req.body);
        await funcionario.save();
        res.status(201).json(funcionario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        await funcionarioSchema.validate(req.body, { abortEarly: false });
        const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!funcionario) {
            return res.status(404).json({ message: 'Funcionário não encontrado' });
        }
        res.json(funcionario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
        if (!funcionario) {
            return res.status(404).json({ message: 'Funcionário não encontrado' });
        }
        res.json({ message: 'Funcionário deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
