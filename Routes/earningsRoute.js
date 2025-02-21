import express from 'express'
export const earnings = express()
earnings.use(express.json())
import { deleteEarning, getEarning, postEarning, putEarning } from '../Controllers/earningsController.js'

earnings.get('/', getEarning)
earnings.post('/', postEarning)
earnings.put('/:id', putEarning)
earnings.delete('/:id', deleteEarning)