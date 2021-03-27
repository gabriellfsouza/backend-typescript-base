import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import AppError from './errors/app-error';
import routes from './routes';

const app = express();

app.use(cors());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});

export default app;
