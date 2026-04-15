import express from 'express'; //após instalar, deve importa-la
import routes from './routes.js'; //importa as rotas do arquivo routes.js

const app = express(); //variavel que tem toda a ferramenta express
app.use(routes); //usa as rotas definidas no arquivo routes.js
app.use(express.json()); //permite que o express entenda requisições com corpo em formato JSON

export default app; //Possibilita usarmos o express
