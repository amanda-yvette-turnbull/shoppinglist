import express from 'express'
import path from 'path'

import routes from './routes/routes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/recipies', routes)

export default server
