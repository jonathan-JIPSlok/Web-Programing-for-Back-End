require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');

// Instancia o adaptador (funciona para MySQL e MariaDB)
const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT || 3306,
  connectionLimit: 5,
});

// Cria o client com o adaptador
const prisma = new PrismaClient({ adapter });

// Função DAO para listar todos os contatos
const selectAllContatos = async function () {
  try {
    const rsContatos = await prisma.tbl_contatos.findMany();
    return rsContatos.length > 0 ? rsContatos : false;
  } catch (error) {
    console.error("Erro no DAO:", error);
    return false;
  }
};

module.exports = { selectAllContatos };
