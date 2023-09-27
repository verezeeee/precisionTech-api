const mongoose = require('mongoose');

const DadosSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const Dados = mongoose.model('Dados', DadosSchema);
module.exports = Dados;