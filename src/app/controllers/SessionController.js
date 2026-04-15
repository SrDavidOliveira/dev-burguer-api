import * as Yup from 'yup';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import e from 'express';

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    //valida os dados enviados no corpo da requisição usando o Yup, garantindo que eles estejam no formato correto e atendam aos requisitos definidos no schema
    const isValid = await schema.isValid(request.body, {
      abortEarly: false,
      strict: true,
    });

    const emailOrPasswordIncorrect = () => {
      return response
        .status(400)
        .json({ error: 'Email or password not incorrect' });
    };

    if (!isValid) {
      emailOrPasswordIncorrect();
    }
    //pega os dados enviados no corpo da requisição
    const { email, password } = request.body;

    //verifica se já existe um usuário com o mesmo email
    const existingUser = await User.findOne({ where: { email } });

    if (!existingUser) {
      //verifica se já existe um usuário com o mesmo email

      emailOrPasswordIncorrect();
    }

    //compara a senha enviada no corpo da requisição com a senha armazenada no banco de dados usando bcrypt para garantir a segurança dos dados do usuário
    const IsPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password_hash,
    );

    if (!IsPasswordCorrect) {
      emailOrPasswordIncorrect();
    }

    //se a senha estiver correta, retorna uma resposta de sucesso com status 200 (OK) e uma mensagem indicando que o login foi realizado com sucesso
    return response
      .status(200)
      .json({ 
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        admin: existingUser.admin,
        mensagem: 'Login realizado com sucesso',
      });
  }
}

export default new SessionController();
