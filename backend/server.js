const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // conecta o app com o backend

const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Bem-Vindo ao app UNC com Você!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});