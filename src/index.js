const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
const categoriaRotas = require('./routes/categoriaRotas');
const enderecoRotas = require('./routes/enderecoRotas');
const estoqueRotas = require('./routes/estoqueRotas');
const produtoRotas = require('./routes/produtoRotas');
const usuarioRotas = require('./routes/usuarioRotas');
const vendedorRotas = require('./routes/vendedorRotas');
const funcionarioRoutes = require('./routes/funcionarioRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const itemPedidoRoutes = require('./routes/itemPedidoRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');

app.use('/api/categorias', categoriaRotas);
app.use('/api/enderecos', enderecoRotas);
app.use('/api/estoques', estoqueRotas);
app.use('/api/produtos', produtoRotas);
app.use('/api/usuarios', usuarioRotas);
app.use('/api/vendedores', vendedorRotas);
app.use('/api/funcionarios', funcionarioRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/itens-pedido', itemPedidoRoutes);
app.use('/api/pagamentos', pagamentoRoutes);

app.get('/', (req, res) => {
  res.send('API is running!');
});

// Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
