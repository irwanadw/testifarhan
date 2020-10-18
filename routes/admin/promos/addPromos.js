const express = require('express')
const db = require('../../../controller/dbController')
const app = express.Router()

app.post('/admin/promos', (req, res) => {
    id = Number(req.query.id);

    if (!isNaN(id)) {
        isIdAvailable = db.get('promos', id);
        if (isIdAvailable) {
            res.status(409).send("You cannot adding something on the same ID!");
        } else {
            db.add('promos', body);
            res.send(body);
        }
    } else {
        res.status(400).send("You must enter an ID which is a number!");
    }
})

module.exports = app