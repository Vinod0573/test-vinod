const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Saarthi.ai'))
app.listen(80)