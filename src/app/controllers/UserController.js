/*
store - cria dados
index - lista os dados
show - mostra um dado específico
update - atualiza um dado específico
delete - deleta um dado específico
*/
import User from '../models/User.js';
import { v4 } from 'uuid';

class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body; //pega os dados enviados no corpo da requisição

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    });

    return response.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
    }); //retorna o usuário criado com status 201 (Created)
  }
}

export default new UserController();
