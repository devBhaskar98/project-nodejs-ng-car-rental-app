import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.get('/:id', userController.getUser);

router.get('/image/:id', userController.getUserProfileImage)

router.get('', userController.getAllUser);

router.post('/create', userController.createUser);

router.delete('/remove/:id',  userController.deleteUser);

// router.post('', userController.postUser);

export default router;