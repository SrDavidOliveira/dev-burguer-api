import { Router } from 'express';
import UserController from './app/controllers/UserController.js';

const routes = new Router();

routes.post('/users', UserController.store); //rota para criar um novo user


export default routes;