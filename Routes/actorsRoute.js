import express from 'express'
export const actors = express()
actors.use(express.json())
import { getActor, postActor, putActor, deleteActor } from '../Controllers/actorsController.js'

actors.get('/actors', getActor)
actors.post('/actors', postActor)
actors.put('/actors/:id', putActor)
actors.delete('/actors/:id', deleteActor)