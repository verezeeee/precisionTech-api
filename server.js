import express from 'express';
import connect from './database/connect.js';
import Dados from './models/ModeloDados.js';
import cors from 'cors';

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

//Pegar os dados do DB e exibir no navegador - Rota principal
app.get('/', (req, res) => {
  try {
    Dados.find({}).then(data => {
      res.json(data);
    }).catch(error => {
      res.json({ message: error });
    })
  } catch (error) {
    res.json({ message: error });
  }
});

//Postar os dados no DB
app.post('/uploadData', (req, res) => {
  try {
    const data = new Dados({
      nome: req.body.nome,
      service: req.body.service,
      image: req.body.image,
      data: req.body.data,
      text: req.body.text
    });
    data.save().then(data => {
      res.json(data);
    }).catch(error => {
      res.json({ message: error });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

//Fazer o update de dados
app.patch('/updateData/:id', (req, res) => {
  try {
    Dados.updateOne({ _id: req.params.id }, { $set: { nome: req.body.nome, service: req.body.service, image: req.body.image, data: req.body.data, text: req.body.text } }).then(data => {
      res.json(data);
    }).catch(error => {
      res.json({ message: error });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

//Deletar dados
app.delete('/deleteData/:id', (req, res) => {
  try {
    Dados.deleteOne({ _id: req.params.id }).then(data => {
      res.json(data);
    }).catch(error => {
      res.json({ message: error });
    });
  } catch (error) {
    res.json({ message: error });
  }
});

//Conectar ao banco de dados
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.log("Can't connect to server")
  }
}).catch((error) => {
  console.log("Invalid Database Connection...!");
});