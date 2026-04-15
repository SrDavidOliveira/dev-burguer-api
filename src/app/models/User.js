import Sequelize, { Model } from 'sequelize'; //importa o Model do sequelize

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING, //definir a coluna name como string
        email: Sequelize.STRING, //definir a coluna email como string
        password_hash: Sequelize.STRING, //definir a coluna password como string
        admin: Sequelize.BOOLEAN, //definir a coluna admin como boolean
      },
      {
        sequelize,
        tableName: 'users',
      },
    );
  }
}

export default User;
