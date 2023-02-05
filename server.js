const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('index.html',{root: path.join(__dirname)})
})

app.get('/api', async(req, res) => {
  console.log(req._parsedUrl.query)
  let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query
  let r = await axios(url)
  let a = r.data 
  res.json(a)
})

app.use(express.static(path.join(__dirname, "js")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})