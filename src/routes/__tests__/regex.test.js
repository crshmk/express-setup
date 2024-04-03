import request from 'supertest'
import app from 'app'

describe('hits a route', () => {
  test('pings /api/v1/regex', done => {
    request(app)
      .get('/api/v1/regex')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toMatchObject({ regex: true })
        done()
      })
  })
})
