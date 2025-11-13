const Vendedor = require('../models/vendedor');

exports.createVendedor = async (req, res) => {
  try {
    const vendedor = new Vendedor(req.body);
    await vendedor.save();
    res.status(201).json(vendedor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllVendedores = async (req, res) => {
  try {
    const vendedores = await Vendedor.find();
    res.json(vendedores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getVendedorById = async (req, res) => {
  try {
    const vendedor = await Vendedor.findById(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor não encontrado' });
    }
    res.json(vendedor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateVendedor = async (req, res) => {
  try {
    const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor não encontrado' });
    }
    res.json(vendedor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteVendedor = async (req, res) => {
  try {
    const vendedor = await Vendedor.findByIdAndDelete(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor não encontrado' });
    }
    res.json({ message: 'Vendedor deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
