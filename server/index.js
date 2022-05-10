const express = require("express");
const  app = express()
const cors = require('cors')


const PORT = 5000;

app.use(cors())

app.use(express.json())

app.use('/records', require('./routes/records'))


async function start () {
    try{
        app.listen(PORT, ()=> console.log(`server is starter in ....${PORT}`))
    }catch(e){
        console.log('server has error', e)
    }
}

start()

