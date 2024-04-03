import getUser from '@mw/users/getUser'
import sendPublicUser from '@mw/users/sendPublicUser'

const getUserRoute = [
  getUser,
  sendPublicUser
]

export default getUserRoute