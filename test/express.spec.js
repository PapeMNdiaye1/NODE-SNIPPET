require('dotenv').config()
const request = require('supertest');
import server from '../src/Express'
const { TOKEN } = process.env




describe('GET /api', () => {
    // #################################################
    test('Testing for True Token', async () => {
        const { statusCode, text } = await request.agent(server).get('/api')
        // console.log(statusCode, text);
        expect(statusCode).toBe(401)
        expect(text).toBe("unauthorized")
    })
    // #################################################
    test('Testing for True Token', async () => {
        const { text } = await request.agent(server).get(`/api?TOKEN=${TOKEN}`)
        // console.log(text);
        expect(text).toBe("R1 work")
    })
})