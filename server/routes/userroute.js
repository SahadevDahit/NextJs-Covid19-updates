const express = require('express')
const router = express.Router()
const usercurd = require('../controller/usercurd')
router.post('/getuser', usercurd.get)
router.post('/checkuser', usercurd.usercheck)
router.get('/verifyuser', usercurd.verify)
router.post('/signin', usercurd.signin)
router.post('/changepassword', usercurd.changepassword)
router.post('/createuser', usercurd.create)
router.put('/updateuser', usercurd.update)
router.delete('/deleteuser', usercurd.delete)

module.exports = router;