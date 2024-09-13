const express = require('express')
const router = express.Router()
const indexRouter = require('./routes/indes')
router.get('/', indexRouter)

module.exports = router;