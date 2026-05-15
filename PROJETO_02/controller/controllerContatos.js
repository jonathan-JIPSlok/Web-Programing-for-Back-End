const contatoDAO = require('../model/DAO/contatoDAO.js');

const getContatos = async function () {
    let jsonContatos = {};
    let dadosContatos = await contatoDAO.selectAllContatos();

    if (dadosContatos) {
        jsonContatos.count = dadosContatos.length; // corrigido
        jsonContatos.contatos = dadosContatos;
        return jsonContatos;
    } else {
        return false;
    }
};

module.exports = { getContatos };