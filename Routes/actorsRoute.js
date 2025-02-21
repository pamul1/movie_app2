import express from 'express'
export const actors = express()
actors.use(express.json())
import { getActor, postActor, putActor, deleteActor } from '../Controllers/actorsController.js'

actors.get('/', getActor)
actors.post('/', postActor)
actors.put('/:id', putActor)
actors.delete('/:id', deleteActor)