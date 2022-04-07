const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/cities', controllers.getAllCities)

router.get('/attractions', controllers.getAllAttractions)

router.get('/getAllPosts', controllers.getAllPost)

router.post('/createPost', controllers.createPost)

router.post('/addComment', controllers.createComment)


module.exports = router;