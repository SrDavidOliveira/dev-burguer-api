import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';

const routes = new Router();

routes.post('/users', UserController.store); //rota para criar um novo user
routes.post('/session', SessionController.store); //rota para login do user


export default routes;