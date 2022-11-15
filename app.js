const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Bangalore'))
app.listen(80)