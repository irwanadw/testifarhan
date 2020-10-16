const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const getPromos = require('./routes/admin/promos/getPromo')

const app = express()
app.use(rootRoute)
app.use(getPromos)

app.use(bodyParser.json())


const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
