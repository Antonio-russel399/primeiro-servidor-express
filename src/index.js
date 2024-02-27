
const express = require('express');

const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send('ola... esse...');

});

app.listen(3000);

