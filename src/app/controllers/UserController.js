/*
store - cria dados
index - lista os dados
show - mostra um dado específico
update - atualiza um dado específico
delete - deleta um dado específico
*/
import User from '../models/User.js';
import { v4 } from 'uuid';
import * as Yup from 'yup';

class UserController {
  async store(request, response) {
    //valida os dados enviados no corpo da requisição usando o Yup, garantindo que eles estejam no formato correto e atendam aos requisitos definidos no schema
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password_hash: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    });
    try {
      schema.validateSync(request.body, { abortEarly: false, strict: true }); //valida os dados enviados no corpo da requisição usando o Yup, garantindo que eles estejam no formato correto e atendam aos requisitos definidos no schema
    } catch (err) {
      return response.status(400).json({ error: err.errors }); //se a validação falhar, retorna um erro com status 400 (Bad Request) e os erros de validação no corpo da resposta
    }

    const { name, email, password_hash, admin } = request.body; //pega os dados enviados no corpo da requisição

    const existingUser = await User.findOne({ where: { email } }); //verifica se já existe um usuário com o mesmo email

    if (existingUser) {
      return response.status(400).json({ error: 'Email already taken!' }); //se existir, retorna um erro com status 400 (Bad Request)
    }

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
