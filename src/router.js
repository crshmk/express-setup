import express from 'express'

import userRoutes from '@routes/userRoutes'

const router = express.Router()

router.get('/ping', (req, res) => res.send('pong'))

router.use('/users', userRoutes)
// router.use('/products', productRoutes)

export default router
