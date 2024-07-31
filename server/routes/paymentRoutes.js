const express = require('express')
const router = express.Router()
const {processPaymaent} = require('../controllers/paymentController')
const {auth} = require('../middleware/auth');

router.post('/process-payment',auth,processPaymaent)

module.exports = router