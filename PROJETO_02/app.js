/****************************************************
 * Objetivo: API para realizar requisições de Contatos da UniFecaf
 * Data: 11/05/2026
 * Autor: Jonathan
 * Versão: 1.0
 ****************************************************/

/**
 * MVC - (model, view, controller)
 * 
 * Model - Modelagem dos dados (DB)
 * Controller - É responsável pela regra de negócio do projeto
 * view - É responsável pela integração com o cliente (usuário)
 * 
 * Dependências para acesso a banco de dados
 * - Sequelize
 * - Prisma
 * - Fastfy
 * 
 * Instalação e configuração do prisma
 * - npx install prisma --save
 * - npx install @prisma/client --save-dev
 * - npx install @prisma/adapter mariadb dotenv
 * - npx prisma init --datasource-provider mysql
 * - npx prisma migrate dev --name inicio
 * - npx prisma generate
 */

//Import das dependências
const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

//Criando um objeto do tipo express
const app = express();

app.use((request, response, next) => {
    //Configuração de quem poderá acessar a API (IP ou * todos)
    response.header('Acess-Control-Allow-Origin', '*');

    //Configuração de quais métodos serão aceitos na API
    response.header('Acess-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    app.use(cors());
    next();
})

const controllerContatos = require("./controller/controllerContatos.js")

//EndPoint: GET retorna todos os contatos do DB
app.get("/v1/fecaf/contatos", cors(), async function(request, response, next){
    let dadosContato = await controllerContatos.getContatos();

    if (dadosContato) {
        response.status(200)
        response.json(dadosContato)
    } else {
        return response.status(404);
    }
})





app.listen(8080, function(){
    console.log('API funcionando e aguardando novas Requisições ... ');
});