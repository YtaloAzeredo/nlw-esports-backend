import 'express-async-errors'
import express from 'express'
import { routes } from './routes'

const app = express()
const port = 3000

app.use(express.json())
routes.map(route => app.use(route))

app.listen(port, () => {
  console.log(`Server Running on port:${port}`)
})
