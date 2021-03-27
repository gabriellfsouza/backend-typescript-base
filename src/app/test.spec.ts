import supertest from 'supertest';
import app from '.';

describe('app', () => {
  it('should be able to return status 404 for an unexpected route', async () => {
    const result = await supertest(app).get('/unexpected-route').expect(404);
    expect(result.body).toMatchObject({ message: 'Not found' });
  });
});
