import express from 'express'

import userRoutes from '@routes/userRoutes'

const router = express.Router()

router.use('/users', userRoutes)
// router.use('/products', productRoutes)

export default router
