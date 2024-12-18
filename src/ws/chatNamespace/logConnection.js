import { io } from '../wsServer'

// demonstrate connections and ids
const logConnection = socket => {
  const userId = socket.handshake.query.id
  // multiple tabs / devices increase count
  const numClients = io.engine.clientsCount  
  console.log(`\nconnection`)
  console.log('ephemeral id is ', socket.id)
  console.log('persistent id is', userId)
  console.log('num clients', numClients)
}

export default logConnection