const express = require('express')
const uploadImage = require('../controllers/uploadImage');
const upload = require('../middlewares/upload-middleware');
const router = express.Router()

router.post('/uploadImage', upload.single("file"), uploadImage)


module.exports = router;