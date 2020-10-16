const express = require('express')
const app = express.Router()
const db = require('../../../controller/dbController')

app.get('/admin/promos', (req, res) => {
    id = req.query.id
    res.send(db.get('promos', (id)))
})

module.exports = app