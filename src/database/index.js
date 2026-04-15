import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database.cjs';
import User from '../app/models/User.js';

const models = [User]; //array com os modelos

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig); //cria a conexão com o banco de dados usando as configurações definidas em databaseConfig
    models.map((model) => model.init(this.connection)); //inicializa os modelos
  }
}

export default new Database();