import * as Yup from 'yup';

class ProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false }); //valida os dados enviados no corpo da requisição usando o Yup, garantindo que eles estejam no formato correto e atendam aos requisitos definidos no schema
    } catch (err) {
      return response.status(400).json({ error: err.errors }); //se a validação falhar, retorna um erro com status 400 (Bad Request) e os erros de validação no corpo da resposta
    }

    return response
      .status(201)
      .json({ message: 'Produto criado com sucesso!' });
  }
}

export default new ProductController();
