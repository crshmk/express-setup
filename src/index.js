import app from './app'
import './db'
import './ws'

const port = process.env.API_PORT || 8001

app.listen(port, () => {
  console.log('api at', port)
})

export default app