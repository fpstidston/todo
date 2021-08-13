const express = require('express')
const app = express()
const port = 3002

app.use(express.json())

var Items = require('./routes/Items')

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/items', Items)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})