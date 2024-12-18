const db = (function() {
  let messages = []

  const addMessage = (userId, message) => {
    messages = [...messages, `${userId} says, ${message}`]
  }

  const getRecentMessages = () => 
    messages.reverse().slice(0, 10)

  return {
    addMessage,
    getRecentMessages
  }
})()

export default db