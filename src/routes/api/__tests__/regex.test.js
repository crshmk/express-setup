import request from 'supertest'
import app from 'app'

describe('hits a route', () => {
  test('gets /api/regex', done => {
    request(app)
      .get('/api/regex')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toMatchObject({ regex: true })
        done()
      })
  })
})
