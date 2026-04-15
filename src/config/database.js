module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'dev-burguer-api',
  username: 'admin',
  password: '415263',
  define: {
    timestamps: true, //criar as colunas created_at e updated_at
    underscored: true, //usar o padrão de nomenclatura com underline, ex: created_at
    underscoredAll: true, //usar o padrão de nomenclatura com underline para todas as tabelas e colunas
  },
};
