import express from 'express'
const app = express()
app.use(express.json())
import { movies } from './Routes/moviesRoute.js'
import { actors } from './Routes/actorsRoute.js'
import { earnings } from './Routes/earningsRoute.js'
import cors from 'cors'

app.use(cors())
app.use(movies)
app.use(actors)
app.use(earnings)

app.listen(3000)