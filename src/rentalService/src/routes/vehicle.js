import express from 'express';
import vehicleController from '../controllers/vehicleController.js';

const router = express.Router();

router.get('/:id', vehicleController.getVehicle);

router.get('/image/:id', vehicleController.getVehicleImage)

router.get('/list', vehicleController.getAllVehicles);

router.post('/create', vehicleController.createVehicle);

router.delete('/remove/:id',  vehicleController.deleteVehicle);

export default router;