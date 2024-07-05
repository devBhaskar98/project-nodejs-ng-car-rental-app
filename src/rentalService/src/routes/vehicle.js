import express from 'express';
import vehicleController from '../controllers/vehicleController.js';
import upload from '../config/multerConfig.js';

const router = express.Router();


router.post('/upload', vehicleController.createVehicle);

export default router;