import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// Route definition using ES6 module syntax
// router.get('/mypost', auth.authenticate(), userController.getUser());
router.get('', userController.getUser);
router.post('', userController.postUser);

export default router;