import { Router } from 'express';

const routes = Router();

routes.all('/*', (_, response) => {
  response.status(404).json({ message: 'Not found' });
});

export default routes;
