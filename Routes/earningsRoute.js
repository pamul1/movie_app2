import express from 'express'
export const earnings = express()
earnings.use(express.json())
import { deleteEarning, getEarning, postEarning, putEarning } from '../Controllers/earningsController.js'

earnings.get('/earnings', getEarning)
earnings.post('/earnings', postEarning)
earnings.put('/earnings/:id', putEarning)
earnings.delete('/earnings/:id', deleteEarning)