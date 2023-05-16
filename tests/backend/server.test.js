const request = require('supertest');
const app = require('../../server');

describe('GET /favourites', () => {
    it('should return an array of favourites', async () => {
        const res = await request(app).get('/favourites');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});
