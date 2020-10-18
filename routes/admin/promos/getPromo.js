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
            res.status(404).send("ID not found. Please, enter a valid ID! ");
        }
    } else {
        res.status(404).send("You must enter an ID which is a number!");
    }
})

module.exports = app