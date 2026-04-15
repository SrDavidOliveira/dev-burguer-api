import { Router } from 'express';
import UserController from './app/controllers/UserController.js';
import SessionController from './app/controllers/SessionController.js';
import ProductController from './app/controllers/ProductController.js';
import multer from 'multer';
import multerConfig from './config/multer.cjs';

const routes = new Router();

const upload = multer(multerConfig); //configura o multer com as opções definidas em multerConfig

routes.post('/users', UserController.store); //rota para criar um novo user
routes.post('/session', SessionController.store); //rota para login do user
routes.post('/products', upload.single('file'), ProductController.store); //rota para criar um novo product
routes.get('/products', ProductController.index); //rota para listar os products

export default routes;
