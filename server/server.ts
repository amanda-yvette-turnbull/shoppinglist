import express from 'express'
import path from 'path'

import ingredients from './routes/ingredients'
import recipes from './routes/recipes'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/recipes', recipes)
server.use('/api/v1/ingredients', ingredients)
//TODO server.use('/api/v1/shoppinglist', shoppinglist)

export default server
