const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const getPromo = require('./routes/admin/promo/getPromo')

const app = express()
app.use(rootRoute)
app.use(getPromo)

app.use(bodyParser.json())


const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
