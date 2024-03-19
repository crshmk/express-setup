import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import api from './routes/api'
import auth from './auth'

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())
app.use(cors({credentials: true, origin: true}))

app.use(auth)
app.use('/api', api)

export default app
