import express from 'express'; //após instalar, deve importa-la
import routes from './routes.js'; //importa as rotas do arquivo routes.js

const app = express(); //variavel que tem toda a ferramenta express

app.use(express.json()); //permite que o express entenda requisições com corpo em formato JSON
app.use(express.urlencoded({ extended: true })); //permite que o express entenda requisições com corpo em formato URL-encoded, ou seja, dados enviados através de formulários HTML
app.use(routes); //usa as rotas definidas no arquivo routes.js

export default app; //Possibilita usarmos o express
