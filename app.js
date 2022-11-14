const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Jeevan'))
app.listen(80)