const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/cities', controllers.getAllCities)

router.get('/attractions', controllers.getAllAttractions)


module.exports = router;