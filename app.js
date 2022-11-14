const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Sreejit sir'))
app.listen(80)