import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

// Route definition using ES6 module syntax
// router.get('/mypost', auth.authenticate(), userController.getUser());
router.get('', adminController.getVehicle);
router.post('', adminController.postVehicle);

export default router;