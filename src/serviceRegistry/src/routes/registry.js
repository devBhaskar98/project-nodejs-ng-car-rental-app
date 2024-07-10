import express from 'express';
import registryController from '../controllers/registryController.js';

const router = express.Router();

router.post('/register', registryController.registerService);

router.get('/:serviceName', registryController.getEndpoint);

// router.post('', userController.postUser);

export default router;