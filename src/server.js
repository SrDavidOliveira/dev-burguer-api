import app from './app.js';
import './database/index.js'; //importa a configuração do banco de dados para que a conexão seja estabelecida quando o servidor for iniciado

app.listen(3001, () => { console.log('Server is running at port 3001'); //inicia o servidor na porta 3001 e exibe uma mensagem no console quando estiver rodando
});
