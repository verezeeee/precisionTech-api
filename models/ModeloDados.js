import mongoose from "mongoose";

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
        //Imagem convertida em base64 para ser salva no banco de dados
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

export default mongoose.models.posts || mongoose.model('Dados', DadosSchema);