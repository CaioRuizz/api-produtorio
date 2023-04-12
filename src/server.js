const express = require('express');

const cors = require('cors');

const produtorio = require('./controllers/produtorio');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/iterativo', produtorio.iterativo);

app.post('/recursivo', produtorio.recursivo);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));