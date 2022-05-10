const {Router}=  require('express')
const { getRecords, postRecord } = require('../controllers/records')
const router =Router()


router.get('/', getRecords)

router.post('/', postRecord)


module.exports = router