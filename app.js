const express = require('express')
const app = express()
app.get('/',(req,res)=>res.send('Hello Saarthi good evening'))
app.listen(80)