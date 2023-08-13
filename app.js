const express = require('express')
const app = express()

app.get('/hi', (req, res) => {
  res.send('Hello World!')
})

app.listen(9090, () => {
  console.log(`Example app listening on port 9090`)
})