require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const user = process.env.MONGO_USER
const password = process.env.MONGO_PASS
const db = process.env.MONGO_DBNAME
const mongoose = require('mongoose')
const uri = `mongodb+srv://${user}:${password}@${db}.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`
const Dados = require('./models/ModeloDados')

app.use(cors())
app.use(express.json())

mongoose
    .connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('API precisionTech')
})

app.post('/dados', async (req, res) => {
    try {
        const dados = await Dados.create(req.body)
        res.status(200).json(dados)
    } catch (error) {
        res.status(500).json({error: error.message})
        console.log(err)
    }
})

app.listen(port, () => {
    console.log(`API running on port ${port}`)
})