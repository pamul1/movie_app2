import { db } from "../db/cn.js"

export const getActor = async (req, res) => {

    const sql = 'select * from actors'
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postActor = async (req, res) => {

    if (!tmp.actor_id) {
        res.status(300).json({ message: "Field actor_id is empty" })
        return
    }

    if (!tmp.name) {
        res.status(300).json({ message: "Field name is empty" })
        return
    }

    if (!tmp.date_of_birth) {
        res.status(300).json({ message: "Field date_of_birth is empty" })
        return
    }

    if (!tmp.nationality) {
        res.status(300).json({ message: "Field nationality is empty" })
        return
    }

    try {
        const str = 'insert into actors (actor_id, name, date_of_birth, nationality) values ($1, $2, $3, $4)'
        const arr = [tmp.actor_id, tmp.name, tmp.date_of_birth, tmp.nationality]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Actor Added" })
        return
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }

}

export const putActor = async (req, res) => {

    if (!tmp.name) {
        res.status(300).json({ message: "Field name is empty" })
        return
    }

    if (!tmp.date_of_birth) {
        res.status(300).json({ message: "Field date_of_birth is empty" })
        return
    }

    if (!tmp.nationality) {
        res.status(300).json({ message: "Field nationality is empty" })
        return
    }

    if (!actor_id) {
        res.status(300).json({ message: "Field actor_id is empty" })
    }

    try {
        const str = 'update into actors (actor_id, name, date_of_birth, nationality) values ($1, $2, $3, $4)'
        const arr = [tmp.name, tmp.date_of_birth, tmp.nationality, actor_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Actor Updated" })
        return
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }
}

export const deleteActor = async (req, res) => {

    if (!actor_id){
        res.status(300).json({message: "Field actor_id is empty"})
        return
    }

    try{
        const str = 'delete from actors (actor_id) values ($1)'
        const arr = [actor_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Actor Deleted" })
        return
    } catch(err){
        res.status(500).json({message:err})
        return
    }

}