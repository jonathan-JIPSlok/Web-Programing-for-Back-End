/***********************************************
 *  Objetivo: API(Application Programming Interfaces) responsável pela saídade de dados de estados e cidades do Brasil
 *  Data 05/05/2026
 *  Autor: Jonathan Yuri
 *  Versão: 1.0
 ***********************************************/

/*
    Para criar uma API, precisamos instalar:
        express - npm install express --save
        cors    - npm install cors --save
        body-parser - npm install body-parser --save

*/

// Import das dependências
const express     = require('express')
const cors        = require('cors')
const bodyParser  = require('body-parser')

// Criando um objeto do tipo express
const app = express();

//request  -> Requisições a chegar
//response -> Retorno da API

//API Privadas -> APIs internas(particulares) das empresas
//API Publicas -> APIs externas, geralmente livres para utilização.
app.use((request, response, next) => {

    //COnfiguração de quem poderá acessar a API (IP ou * que significa todos)
    response.header('Access-Control-Allow-Origin', '*');

    //Configuração de quais métodos serão aceitos na API
    response.header('Access-Control-Allow-Methods', 'GET');

    //Informa as regras ao cors
    app.use(cors());
    next();
})

//EndPoints  -> Pontos de escuta da API
app.get('/estados', cors(), async function (request, response, next) {
    
    //import do arquivo de funções
    let controllerEstados = require('./controller/controller_estados_cidades.js');

    //Solicita a lista de estados para a função
    let estados = controllerEstados.getListEstados();
    //Define o que a API deverá retornar
    if(estados){
        response.status(200);
        response.json(estados);
    } else {
        response.status(404);
    }

    
})

//EndPoint listar as cidades de um estado
app.get('/cidades/estado/:uf', cors(), async function (request, response, next) {
    
    //Pega o parametro do endpoinf (:uf)
    let siglaEstado = request.params.uf;

    //import do arquivo de funções
    let controllerEstados = require('./controller/controller_estados_cidades.js');

    //Solicita a lista de estados para a função
    let estados = controllerEstados.getCidadesEstado(siglaEstado);

    //Define o que a API deverá retornar
    if(estados){
        response.status(200);
        response.json(estados);
    } else {
        response.status(404);
    }

    
})

// é obrigatório para fazer a API ficar escutando requisições
app.listen(3030, function() {
    console.log("API Funcionando e aguardando novas requisições...")
})