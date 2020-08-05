import express from 'express';
import ClassesController from '../controllers/ClassesController';
import ConnectionController from '../controllers/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionController();

routes.get('/', (req, res) => {
  return res.redirect('/proffy');
})

routes.get('/proffy/classes', classesControllers.index);
routes.post('/proffy/classes', classesControllers.create);

routes.get('/proffy/connections', connectionsControllers.index);
routes.post('/proffy/connections', connectionsControllers.create);


export default routes;