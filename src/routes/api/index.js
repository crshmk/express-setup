import express from 'express'

import regex from './regex'
import route from './route'

const router = express.Router()

router.use(/^\/regex\/?$/i, regex)

router.use('/route', route)

export default router
