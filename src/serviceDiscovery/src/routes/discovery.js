import express from 'express';
import discoveryController from '../controllers/discoveryController.js';

const router = express.Router();

router.get('/:serviceName', discoveryController.getServiceEndpoint);

// router.post('', userController.postUser);

export default router;