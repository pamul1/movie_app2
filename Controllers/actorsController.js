import { db } from "../cn.js"

export const getActor = async (req, res) => {

    const sql = "select name, to_char(date_of_birth,'yyyy-mm-dd') date_of_birth , nationality,actor_id  from actors"
    const result = await db.query(sql)
    res.status(200).json(result)

}

export const postActor = async (req, res) => {

    const tmp = req.body

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
        const str = 'insert into actors (name, date_of_birth, nationality) values ($1, $2, $3)'
        const arr = [tmp.name, tmp.date_of_birth, tmp.nationality]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Actor Added" })
        return
    } catch (err) {
        res.status(500).json({ message: err.message})
        return
    }

}

export const putActor = async (req, res) => {

    
    const tmp = req.body
    const actor_id = req.params.id

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
        const str = 'update from actors set name = $1, date_of_birth = $2, nationality = $3 where actor_id = $4'
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

    const actor_id = req.params.id

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
        res.status(500).json({message: err.message})
        return
    }

}