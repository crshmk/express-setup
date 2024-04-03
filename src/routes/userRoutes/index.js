import express from 'express'

import getUserRoute from './getUserRoute'

const userRouter = express.Router()

userRouter.get('/:userId', getUserRoute)
// userRouter.put('/:userId', updateUserRoute)

export default userRouter