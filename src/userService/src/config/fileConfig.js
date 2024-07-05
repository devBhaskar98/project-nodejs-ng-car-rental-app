import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
         cb(null, './src/assets/user image')
   },
  filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now())
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop());
  }
});

const upload = multer({ storage: storage })

export default upload;