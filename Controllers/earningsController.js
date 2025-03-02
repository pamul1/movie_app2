import { db } from "../cn.js"

export const getEarning = async (req, res) => {

    const sql = `select a.earning_id, 
                        a.movie_id, 
                        a.country, 
                        '$'||trim(to_char(a.revenue, '999,999,999')) revenue, 
                        b.title as movie_name
                        from earnings a
                        inner join movies b 
                        on a.movie_id = b.movie_id`;
    try {
    const result = await db.query(sql)
    res.status(200).json(result)
    }catch(err){
        res.status(200).json(err.message)
    }

}

export const postEarning = async (req, res) => {

    const tmp = req.body

    if (!tmp.movie_id) {
        res.status(300).json({ message: "Field movie_id is empty" })
        return
    }

    if (!tmp.country) {
        res.status(300).json({ message: "Field country is empty" })
        return
    }

    if (!tmp.revenue) {
        res.status(300).json({ message: "Field revenue is empty" })
        return
    }

    try {
        const str = 'insert into earnings ( movie_id, country, revenue) values ($1, $2, $3)'
        const arr = [tmp.movie_id, tmp.country, tmp.revenue]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Earning Added" })
        return
    } catch (err) {
        res.status(500).json({ message: err.message })
        return
    }

}

export const putEarning = async (req, res) => {

    const tmp = req.body
    const earning_id = req.params.id

    if (!tmp.movie_id) {
        res.status(300).json({ message: "Field movie_id is empty" })
        return
    }

    if (!tmp.country) {
        res.status(300).json({ message: "Field country is empty" })
        return
    }

    if (!tmp.revenue) {
        res.status(300).json({ message: "Field revenue is empty" })
        return
    }

    if (!earning_id) {
        res.status(300).json({ message: "Field earning_id is empty" })
    }

    try {
        const str = 'update from earnings set movie_id = $1, country = $2, revenue = $3 where earning_id = $4'
        const arr = [tmp.movie_id, tmp.country, tmp.revenue, earning_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Earning Updated" })
        return
    } catch (err) {
        res.status(500).json({ message: err })
        return
    }
}

export const deleteEarning = async (req, res) => {

    const earning_id = req.params.id

    if (!earning_id) {
        res.status(300).json({ message: "Field earning_id is empty" })
        return
    }

    try {
        const str = 'delete from earnings where earning_id = $1'
        const arr = [earning_id]
        const result = await db.query(str, arr)
        res.status(200).json({ message: "Earning Deleted" })
        return
    } catch (err) {
        res.status(500).json({ message: err.message })
        return
    }

}