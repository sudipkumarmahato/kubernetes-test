const express = require('express')
const dotenv = require('dotenv')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT || 8000
const host = process.env.HOST

app.listen(port, 'host', () => {
  console.log('Example app listening on port 3000!')
})
