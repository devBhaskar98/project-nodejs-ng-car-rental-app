import express from 'express';
import fileUploadController from '../controllers/fileUploadController.js';
import upload from '../config/fileConfig.js';

const router = express.Router();


router.post('/upload', upload.single('file'), fileUploadController.singleFileUpload);

export default router;