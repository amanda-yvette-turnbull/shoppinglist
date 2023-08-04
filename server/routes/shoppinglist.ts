import express from 'express'
const router = express.Router()
import * as db from '../db/db'

router.get('/', async (req, res) => {
  const shoppingList = await db.getShoppingList()
  res.json(shoppingList)
})

router.post('/', async (req, res) => {
  const data = req.body
  const shoppingList = await db.addShoppingList(data)
  res.json(shoppingList)
})

router.delete('/', async (req, res) => {
  await db.deleteShoppingList()
  res.sendStatus(200)
})

export default router
