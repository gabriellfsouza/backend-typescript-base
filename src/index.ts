import express from 'express';
import { logger } from './app/utils/winston-utils';

const app = express();

app.get('/', (req, res) => {
  res.send('test');
});

app.listen(3000, () => {
  logger.debug('info');
});

export default app;
