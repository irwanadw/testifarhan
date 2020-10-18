const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const getPromos = require('./routes/admin/promos/getPromo')
const deletePromos = require('./routes/admin/promos/deletePromos')
const addPromos = require('./routes/admin/promos/addPromos')
const editPromos = require('./routes/admin/promos/editPromos')

const app = express()
app.use(rootRoute)
app.use(getPromos)
app.use(deletePromos)
app.use(addPromos)
app.use(editPromos)

app.use(bodyParser.json())


const port = 3333
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
