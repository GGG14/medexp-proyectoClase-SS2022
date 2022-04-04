const app = require('../../app');
const supertest = require("supertest");
describe('Test suite de api v1 pacientes endpoint', () => {
    it("GET /api/v1/pacientes/", async() => {
        await supertest(app).get('/api/v1/pacientes')
            .set({ apitoken: 'bf9f1cb7-b9cb-4f2a-8f32-630a6436dace' })
            .expect(200);
    });
});