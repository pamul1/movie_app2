import express from 'express'
import { movies } from './Routes/moviesRoute.js';
import { actors } from './Routes/actorsRoute.js';
import { earnings } from './Routes/earningsRoute.js';
import { authUser } from './Routes/authRoute.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

const tokenValidation =(req, res, next)=>{

    const authorization = req.headers['authorization']
    if (!authorization){
        return res.status(400).json({message : "You need to pass a Token"})
    }

    const token = authorization.replace('Bearer ', '')

    try {
        const secret = process.env.KEY_SECRET
        const decodeToken = jwt.verify(token, secret)
        next()
    }catch(err){
        return res.status(400).json({message : "Invalid Token"})
    }
       
}
// http://localhost/auth/register
app.use('/movies', tokenValidation , movies)
app.use('/actors', tokenValidation, actors)
app.use('/earnings', tokenValidation, earnings)
app.use('/auth', authUser);

const port = process.env.PORT || 8080

app.listen(port);