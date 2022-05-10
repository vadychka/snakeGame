const pool = require('../modelsdb/db')

module.exports.getRecords = async (req,res) => {
    try{
        const getRecordsArr = await pool.query(`SELECT * FROM players`)
        if(getRecordsArr){
            res.status(200).json(getRecordsArr.rows)
        } else {
            res.status(400).json('invalid input')
         }
    }catch(e){
        res.status(500).json({error:'Internal get server error'})
    }
}


module.exports.postRecord = async (req,res) => {
    try{
        const UNIQID = Date.now()

        const {score, register} = req.body
        const newRecord = await pool.query(`INSERT INTO players (record_points, record_id, nick_name) VALUES ($1, $2, $3) RETURNING *`,
         [score, UNIQID, register])
         if(newRecord){
            res.status(200).json(newRecord.rows)
         } else {
            res.status(400).json('invalid input')
         }
    }catch(e){
        res.status(500).json({error:'Internal get server error'})
    }
}


