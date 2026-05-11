/**********************************************************************
* Objetivo: Funções para manipular dados de estados e cidades do Brasil
* Data: 04/05/2026
* Autor: Jonathan Yuri
* Versão: 1.0
***********************************************************************/

// import do arquivos de dados de estados e cidades
const dados_estados_cidades = require("../modulo/estados_cidades.js");

//Retorna a lista de estados
const getListEstados = function(){

    // Cria uma variavel do tipo array
    let arrayListaDeEstados = [];

    let jsonEstados = {};

    dados_estados_cidades.listaDeEstados.estados.forEach(function(estado) {
        // Cria uma variavil do tipo JSON
        let jsonListaDeEstado = {};

        //Cria os atributos do JSON
        jsonListaDeEstado.uf = estado.sigla;
        jsonListaDeEstado.description = estado.nome;

        //Adiciona o Json com o estado dentro do array
        arrayListaDeEstados.push(jsonListaDeEstado);
    });

    // Padronizando a saídad da função para ser sempre um json
    jsonEstados.estados = arrayListaDeEstados
    jsonEstados.count = arrayListaDeEstados.length;

    return jsonEstados;

}

const getCidadesEstado = function(siglaEstado) {
    // Array que vai receber as cidades
    let arrayCidades = [];

    // Json contendo os dados
    let jsonCidadesEstados = {};

    let erro = true

    //forEach em cada estado
    dados_estados_cidades.listaDeEstados.estados.forEach( function(estado) {
        
        // escolhendo a sigla desejada
        if(estado.sigla.indexOf(siglaEstado.toUpperCase()) == 0) {
            erro = false

            //forEach para pegar todos os nomes das cidades desejadas
            estado.cidades.forEach(function(array){

                // Adicionando a cidade ao array das cidades
                arrayCidades.push(array.nome)
            })
        }
    })
    
    jsonCidadesEstados.uf = siglaEstado.toUpperCase()
    jsonCidadesEstados.cidades = arrayCidades
    jsonCidadesEstados.count = jsonCidadesEstados.cidades.length

    if (erro){
        return false
    } else { 
        return jsonCidadesEstados
    }
}

module.exports = {
    getCidadesEstado,
    getListEstados
}