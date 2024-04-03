import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import router from './router'

const app = express()

const getRequestBody = bodyParser.json({ limit: '50mb'} )
const handleCors = cors({ credentials: true, origin: true })

app.use(getRequestBody)
app.use(cookieParser())
app.use(helmet())
app.use(handleCors)
app.use('/api/v1', router)

const port = 1111 // process.env.PORT

app.listen(port, () => {
  console.log('service at', port)
})

export default app