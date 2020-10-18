const express = require('express')
const app = express.Router()
const db = require('../../../controller/dbController')

app.get('/admin/promos', (req, res) => {
    let id = Number(req.query.id);
    if (!isNaN(id)) {
        const getbyId = db.get('promos', id);
        if (getbyId) {
            res.send(getbyId);
        } else {
            res.status(404).send("Data tidak ditemukan ");
        }
    } else {
        res.status(404).send("Data tidak ditemukan ");
    }
})

module.exports = app