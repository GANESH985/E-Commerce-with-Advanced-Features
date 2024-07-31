const express = require('express')
const router = express.Router()

const {getSessions} = require('../controllers/sessionController')
const {auth} = require('../middleware/auth')

router.get('/',auth,getSessions);

module.exports = router