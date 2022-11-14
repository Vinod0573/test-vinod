const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Deepak sir'))
app.listen(80)