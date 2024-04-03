import request from 'supertest'
import app from '@app'

describe('hits a route', () => {
  test('pings /api/v1/users/:userId', done => {
    request(app)
      .get('/api/v1/users/42')
      .then(response => {
        expect(response.statusCode).toBe(200)
        const expected = { user: { name: 'jo'} }
        expect(response.body).toMatchObject(expected)
        done()
      })
  })
})
