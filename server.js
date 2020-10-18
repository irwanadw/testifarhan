const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const getPromos = require('./routes/admin/promos/getPromo')
const deletePromos = require('./routes/admin/promos/deletePromos')
const addPromos = require('./routes/admin/promos/addPromos')
const updatePromos = require('./routes/admin/promos/updatePromos')

const app = express()
app.use(rootRoute)
app.use(getPromos)
app.use(deletePromos)
app.use(addPromos)
app.use(updatePromos)

app.use(bodyParser.json())


const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
