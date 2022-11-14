const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Pravid.io'))
app.listen(80)