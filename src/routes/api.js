const express = require('express');
const router = express.Router();
const upload = require('../middleware/FileUpload.js');
const FileUploadController = require('../controller/FileUploadController.js');

// File Upload Route

router.post('/file-upload',
  upload.array('file', 20),
  FileUploadController.fileUpload
);

module.exports = router;