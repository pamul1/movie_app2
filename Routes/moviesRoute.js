import express from 'express'
export const movies = express()
movies.use(express.json())
import { getMovie, postMovie, putMovie, deleteMovie } from '../Controllers/moviesController.js'

movies.get('/movies', getMovie)
movies.post('/movies', postMovie)
movies.put('/movies/:id', putMovie)
movies.delete('/movies/:id', deleteMovie)