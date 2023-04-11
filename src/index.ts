import express, { Request, Response } from 'express'
import cors from 'cors'
import { settings } from '../settings'
import { connectDB } from './database/database-config'
import { playersRouter } from './routes/players-router'
import { teamsRouter } from './routes/teams-router'

const app = express()
const port = settings.PORT
const jsonBodyMiddleware = express.json()

app.use(jsonBodyMiddleware)
app.use(cors())

app.use('/teams', teamsRouter)
app.use('/players', playersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

const startServer = async () => {
  await connectDB()
  app.listen(port, () => {
    console.log(`🚀🚀🚀🚀 App listening on ${port}`)
  })
}


startServer().then(r => r)
