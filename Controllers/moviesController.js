import { db } from "../db/cn.js"

export const getMovie = async (req, res) => {

    const sql = 'select * from movies'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postMovie = async (req, res) => {

    if (!tmp.movie_id) {
        res.status(300).json({ message: "Field movie_id is empty" })
        return
    }

    if (!tmp.title) {
        res.status(300).json({ message: "Field title is empty" })
        return
    }

    if (!tmp.release_year) {
        res.status(300).json({ message: "Field release_year is empty" })
        return
    }

    if (!tmp.genre) {
        res.status(300).json({ message: "Field genre is empty" })
        return
    }

    if (!tmp.duration) {
        res.status(300).json({ message: "Field duration is empty" })
        return
    }

    try {
        const str = 'insert into movies (movie_id, title, release_year, genre, duration) values ($1, $2, $3, $4, $5)'
        const arr = [tmp.movie_id, tmp.title, tmp.release_year, tmp.genre, tmp.duration]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Movie Created" })
        return
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }

}

export const putMovie = async (req, res) => {

    if (!tmp.title) {
        res.status(300).json({ message: "Field title is empty" })
        return
    }

    if (!tmp.release_year) {
        res.status(300).json({ message: "Field release_year is empty" })
        return
    }

    if (!tmp.genre) {
        res.status(300).json({ message: "Field genre is empty" })
        return
    }

    if (!tmp.duration) {
        res.status(300).json({ message: "Field duration is empty" })
        return
    }

    if (!movie_id) {
        res.status(300).json({ message: "Field movie_id is empty" })
    }

    try {
        const str = 'update into movies (movie_id, title, release_year, genre, duration) values ($1, $2, $3, $4, $5)'
        const arr = [tmp.title, tmp.release_year, tmp.genre, tmp.duration, movie_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Movie Updated" })
        return
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }
}

export const deleteMovie = async (req, res) => {

    if (!movie_id){
        res.status(300).json({message: "Field movie_id is empty"})
        return
    }

    try{
        const str = 'delete from movies (movie_id) values ($1)'
        const arr = [movie_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Movie Deleted" })
        return
    } catch(err){
        res.status(500).json({message:err})
        return
    }

}