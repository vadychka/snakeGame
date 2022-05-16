const express = require("express");
const  app = express()
const cors = require('cors');
const path = require("path");



const PORT = process.env.PORT || 5000;

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use('/records', require('./routes/records'))


async function start () {
    try{
        app.listen(PORT, ()=> console.log(`server is starter in ....${PORT}`))
    }catch(e){
        console.log('server has error', e)
    }
}

app.use(express.static(path.join(__dirname, "/frontend/build")));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/build', 'index.html'));
});

start()

