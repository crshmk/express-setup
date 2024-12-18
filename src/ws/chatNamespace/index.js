import { io } from '../wsServer'

import db from './db'
import logConnection from './logConnection'

const chatNamespace = io.of('chat')

chatNamespace.on('connection', async (socket) => {
  logConnection(socket)
  const userId = socket.handshake.query.id
  
  chatNamespace.emit('member-connected', { userId, numClients: io.engine.clientsCount })
  chatNamespace.emit('update-messages', { messages: db.getRecentMessages() })

  socket.on('disconnect', () => {
    const payload = {
      userId,
      numClients: io.of('/chat').sockets.size 
    }
    chatNamespace.emit('member-connected', payload)
  })

  socket.on('chat-message', ({ message }) => {
    db.addMessage(userId, message)
    const payload = {
      messages: db.getRecentMessages()
    }
    chatNamespace.emit('update-messages', payload)
  })
})


