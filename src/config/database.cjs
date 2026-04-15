//configurações do banco de dados
module.exports = {
  dialect: 'postgres', //definir o dialecto como postgres
  host: 'localhost', //definir o host como localhost
  port: 5432, //definir a porta padrão como 5432
  database: 'dev-burguer-db', //definir o nome do banco de dados
  username: 'admin', //definir o nome de usuário do banco de dados
  password: '415263', //definir a senha do banco de dados

  //definir as opções de definição do modelo
  define: {
    timestamps: true, //criar as colunas created_at e updated_at
    underscored: true, //usar o padrão de nomenclatura com underline, ex: created_at
    underscoredAll: true, //usar o padrão de nomenclatura com underline para todas as tabelas e colunas
  },
};
