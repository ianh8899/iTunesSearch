const request = require('supertest');
const app = require('./server');

// Create a separate server instance for testing
const testServer = app.listen(8081, () => {
    console.log('Test server running on port 8081');
});

describe('GET /favourites', () => {
    it('should return an array of favourites', async () => {
        const res = await request(testServer).get('/favourites');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});

// Close the test server after all tests have finished
afterAll(() => {
    testServer.close();
});
