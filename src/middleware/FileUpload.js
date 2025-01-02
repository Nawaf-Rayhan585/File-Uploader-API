const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, 'api-img__' + Date.now() + '__' + file.originalname);
  }
});

let upload = multer({ storage: fileStorageEngine });

module.exports = upload