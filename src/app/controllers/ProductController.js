import * as Yup from 'yup';
import Product from './../models/Products.js';

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

    const { name, price, category } = request.body; //pega os dados enviados no corpo da requisição
    const { filename } = request.file; //pega o arquivo enviado na requisição

   const newProduct =  await Product.create({
        name,
        price,
        category,
        path: filename
   })

    return response.status(201).json(newProduct);
  }

  async index(_request, response) {
    const products = await Product.findAll();
    return response.status(200).json(products);
  }
}

export default new ProductController();
