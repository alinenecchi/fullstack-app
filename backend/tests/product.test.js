const request = require('supertest');
const app = require('../src/index');

describe('Product Routes', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  describe('GET /api/products/all', () => {
    it('should retrieve all products', async () => {
      const response = await request(app).get('/api/products/all');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual([{ id: 1, name: 'Test Product' }]);
    });
  });
});

