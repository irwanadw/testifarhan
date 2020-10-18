const express = require('express')
const db = require('../../../controller/dbController')
const app = express.Router()

app.delete('/admin/promos', (req, res) => {
    id = Number(req.query.id);

    if (!isNaN(id)) {
        isIdAvailable = db.get('promos', id)

        if (isIdAvailable) {
            db.remove('promos', id)
            res.send('ID has been deleted')
        } else {
            res.status(404).send("ID not found. Please, enter a valid ID!")
        }
    } else {
        res.status(404).send("You must enter an ID which is a number!");
    }
})

module.exports = app