Esse é o projeto do meu primeiro servidor ultilizando o express. ele foi feito nas aulas do primeiro servidor e na aula de rotas
nessas aula aprendi os seguintes conceitos para começar esse servidor: 
- Pacotes e de como eles sao intalado atravez do comando NPM
- comando NPM init para inicializar um projeto e criar o arquivo package.json
- aqui foi criado também um arquivo .gitignore para definir quais arquivos e pastas devem ser ignorados pelo Git(no caso aqui foi acrescentado a pasta node_modules).
  
No arquivo index.js foi feita a importação do express como biblioteca utilizando o método require (const express = require('express')) e criado uma rota utilizando o método get(app.get('/', (requisicao, resposta) => {
    resposta.send('ola... esse...');) e definimos uma porta em que o servidor irá escutar (app.listen(3000))
