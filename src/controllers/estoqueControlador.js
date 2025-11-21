const Estoque = require('../models/estoque');

exports.createEstoque = async (req, res) => {
  try {
    const estoque = new Estoque(req.body);
    await estoque.save();
    res.status(201).json(estoque);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllEstoques = async (req, res) => {
  try {
    const estoques = await Estoque.find().populate('produto');
    res.json(estoques);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEstoqueById = async (req, res) => {
  try {
    const estoque = await Estoque.findById(req.params.id).populate('produto');
    if (!estoque) {
      return res.status(404).json({ message: 'Estoque não encontrado' });
    }
    res.json(estoque);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!estoque) {
      return res.status(404).json({ message: 'Estoque não encontrado' });
    }
    res.json(estoque);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findByIdAndDelete(req.params.id);
    if (!estoque) {
      return res.status(404).json({ message: 'Estoque não encontrado' });
    }
    res.json({ message: 'Estoque deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
