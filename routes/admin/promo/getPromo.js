const express = require('express')
const app = express.Router()
const db = require('../../../controller/dbController')

// app.get('/admin/promo', (req, res) => {
//     // const id = req.query.id
//     // res.send(db.get("promos", id))
//     res.send('bisa')
// })

module.exports = app