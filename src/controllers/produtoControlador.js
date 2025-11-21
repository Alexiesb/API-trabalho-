const Produto = require('../models/produto');

exports.createProduto = async (req, res) => {
  try {
    const produto = new Produto(req.body);
    await produto.save();
    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find()
      .populate("categoria")
      .populate("vendedor");

    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProdutoById = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id)
      .populate("categoria")
      .populate("vendedor");

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(produto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProduto = async (req, res) => {
  try {
    const produto = await Produto.findByIdAndDelete(req.params.id);

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
