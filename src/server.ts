import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import { errorHandler } from './middleware/errorHandler'
import { linkRouter } from './routers/linkRouter'
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.get('/', () => console.log('Encurtador de links flash, envie um link longo, receba um link curto!'))
app.use('/api', linkRouter)
app.use(errorHandler)

app.listen(PORT, ()=> console.log(`Server running in port: ${PORT}`))