import { createServer } from 'node:http'
import { Server } from 'socket.io'

import app from '../app'

const wsServer = createServer(app)

const port = process.env.WS_PORT || 8002

wsServer.listen(port)

const config = {
  path: '/',
  cors: {
    origin: 'http://localhost:4201'
  }
}

export const io = new Server(wsServer, config)

console.log('ws at', port)
