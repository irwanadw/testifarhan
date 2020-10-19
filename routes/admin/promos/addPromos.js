const express = require('express')
const db = require('../../../controller/dbController')
const app = express.Router()


app.post('/admin/promos', (req, res) => {
    const body = req.body
    const { id, promoName, promoStartDate, endStartDate } = body
    const promos = db.get('promos')

    const data = ['id', 'promoName', 'promoStartDate', 'endStartDate']
    const i = []
    for (const keys in body) {
        if ((data.includes(keys)) && !(i.includes(keys))) {
            i.push(keys)
        }

        const isIdNan = isNaN(id)
        if (isIdNan) {
            res.status(409).send('You insert a wrong format id')
            return
        }

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

        const isIdAvailable = db.get('promos', id)
        if (isIdAvailable) {
            res.status(409).send('You insert an existed Id')
        } else {
            const input = {
                'id': id,
                'promoName': promoName,
                'promoStartDate': promoStartDate,
                'endStartDate': endStartDate
            }
            db.add('promos', input)
            res.send(body)
        }

    }
})

module.exports = app
