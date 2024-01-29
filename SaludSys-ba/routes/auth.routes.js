import express from "express";
import authentication from '../controllers/auth';
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});

const router = express.Router();

router.post('/signup/paciente', authentication.signUpPa);
router.post('/signup/personal', upload.single('image'), authentication.singUpMe);
router.post('/signin', authentication.signIn);

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
      console.error('Error de Multer:', err);
      res.status(400).json({ error: 'Error en la carga de archivos' });
    } else {
      next(err);
    }
  });

module.exports=router;