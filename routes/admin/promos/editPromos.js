const express = require('express')
const db = require('../../../controller/dbController')
const app = express.Router()

app.patch('/admin/promos', (req, res) => {
    const body = req.body
    const { id, promoStartDate, endStartDate } = body

    const isBodyObject = isObject(body)
    if (!body && !isBodyObject) {
        res.status(400).send('Wrong payload')
        return
    }

    // cek body valid
    const isBodyValid = checkObject(body, data)
    if (!isBodyValid) {
        res.status(400).send('Data structure not valid')
        return
    }

    // cek date valid
    const isStartDateValid = dayjs(promoStartDate).format('YYYY-MM-DD') != promoStartDate
    if (isStartDateValid) {
        res.status(409).send('Date Start is not Valid')
        return
    }

    const isEndDateValid = dayjs(endStartDate).format('YYYY-MM-DD') != endStartDate
    if (isEndDateValid) {
        res.status(409).send('Date End is not Valid')
        return
    }

    // cek id available
    const isIdAvailable = db.get('promos', id)
    if (!isIdAvailable) {
        res.status(404).send('Id not exists')
        return
    }

    db.edit('promos', id, body)
    body.id = id
    res.send(body)
    return
})


module.exports = app