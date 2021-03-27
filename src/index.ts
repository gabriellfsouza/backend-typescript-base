import 'dotenv-flow/config';
import app from './app';
import { logger } from './app/utils/winston-util';

const port = process.env.PORT || '3000';

app.listen(port, (err?:Error) => {
  if (err) throw err;
  logger.debug(JSON.stringify({ port }));
});

export default app;
