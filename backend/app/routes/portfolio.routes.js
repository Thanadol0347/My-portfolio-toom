module.exports = (app) => {
    const portfolio = require('../controllers/portfolio.controllers')

    var router = require('express').Router()

    router.get('/', portfolio.findAll)

    router.get('/edit-student/:id', portfolio.findOne)

    router.post('/create-student', portfolio.create)

    router.put('/update-student/:id', portfolio.update)

    router.delete('/delete-student/:id', portfolio.delete)

    app.use('/students', router)
}