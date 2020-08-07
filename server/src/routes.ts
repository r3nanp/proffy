import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

//Cria uma aula
routes.post('/classes', classesController.create);
//Lista as aulas
routes.get('/classes', classesController.index);

//Cria uma conexão 
routes.post('/connections', connectionsController.create);
//Lista uma conexão
routes.get('/connections', connectionsController.index);

export default routes;