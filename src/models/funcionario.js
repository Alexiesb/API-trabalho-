const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cargo: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Funcionario = mongoose.model('Funcionario', funcionarioSchema);

module.exports = Funcionario;
