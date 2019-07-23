const router = require('koa-router')()
const index = require('../controllers/index_controller')
router.get('/', index.index)
router.get('/about',index.about)
router.get('/world', index.world)
router.post('/postdata', index.postdata)

module.exports = router
