import express from 'express'
export const movies = express()
movies.use(express.json())
import { getMovie, postMovie, putMovie, deleteMovie } from '../Controllers/moviesController.js'

movies.get('/', getMovie)
movies.post('/', postMovie)
movies.put('/:id', putMovie)
movies.delete('/:id', deleteMovie)