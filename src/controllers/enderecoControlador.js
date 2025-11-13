const Endereco = require('../models/endereco');

exports.createEndereco = async (req, res) => {
  try {
    const endereco = new Endereco(req.body);
    await endereco.save();
    res.status(201).json(endereco);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllEnderecos = async (req, res) => {
  try {
    const enderecos = await Endereco.find();
    res.json(enderecos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEnderecoById = async (req, res) => {
  try {
    const endereco = await Endereco.findById(req.params.id);
    if (!endereco) {
      return res.status(404).json({ message: 'Endereço não encontrado' });
    }
    res.json(endereco);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEndereco = async (req, res) => {
  try {
    const endereco = await Endereco.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!endereco) {
      return res.status(404).json({ message: 'Endereço não encontrado' });
    }
    res.json(endereco);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEndereco = async (req, res) => {
  try {
    const endereco = await Endereco.findByIdAndDelete(req.params.id);
    if (!endereco) {
      return res.status(404).json({ message: 'Endereço não encontrado' });
    }
    res.json({ message: 'Endereço deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
