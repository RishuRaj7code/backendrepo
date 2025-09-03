

require('dotenv').config();

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/hello', (req, res) => {
  res.send('hello rishu raj')
})
 app.get('/n', (req, res) => {
  res.send('<h1>The country is mine</h1>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})

