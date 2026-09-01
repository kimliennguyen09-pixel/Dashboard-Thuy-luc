const API={async get(path){const r=await fetch(path);if(!r.ok)throw new Error(`API ${r.status}`);return r.json()},summary(){return this.get('/api/summary')},nodes(params=''){return this.get('/api/nodes'+params)},charts(){return this.get('/api/charts')},node(id){return this.get('/api/nodes/'+encodeURIComponent(id))}};
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})