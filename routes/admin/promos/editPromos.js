const express = require('express')
const db = require('../../../controller/dbController')
const app = express.Router()

app.patch('/admin/promos', (req, res) => {
    body = req.body
    id = Number(body.id)
    parsedId = parseInt(id)
    if (!isNaN(id)) {
        isIdAvailable = db.get('promos', id)

        if (isIdAvailable) {
            db.edit('promos', id, body)
            res.send(body)
        } else {
            res.status(404).send("Data not Found")
        }
    } else {
        res.status(400).send("You must enter an ID which is a number!");
    }
})

module.exports = app