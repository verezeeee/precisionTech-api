import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.MONGO_USER;
const password = process.env.MONGO_PASS;
const database = process.env.MONGO_DBNAME;
const uri = `mongodb+srv://${user}:${password}@${database}.mongodb.net/?retryWrites=true&w=majority`

export default async function connect() {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Conectado ao banco de dados');
    }).catch((error) => {
        console.log(error);
    });
}