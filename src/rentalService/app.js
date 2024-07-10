import express from 'express';
import http from 'http';
import adminRoutes from './src/routes/admin.js';
import fileUploadRoutes from './src/routes/fileUpload.js'
import vehicleRoutes from './src/routes/vehicle.js';
import swaggerUI from 'swagger-ui-express';
import {swaggerSpec} from './swagger.js';
import logger from './src/logger/index.js';
import utils from './utils.js'
import path from 'path';
import { fileURLToPath } from 'url';
import i18n from './src/config/i18n.js'; // Adjust the path as necessary
import i18nextMiddleware from 'i18next-http-middleware';


const app = new express();

// For getting the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*###########################################
MIDDLEWARE
###########################################*/

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// // For serving files from the public directory
// app.use(express.static('public'));

// For serving images from the src/war/images directory
const imagesPath = path.join(__dirname, 'src', 'war', 'images');
app.use('/images', express.static(imagesPath));

// Use i18next middleware
app.use(i18nextMiddleware.handle(i18n));

app.get('/', (req, res) => {
    console.log('Detected language:', req.language);
    console.log('Configured languages:', req.i18n.languages);
    res.send(req.t('welcome'));
});

// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/health-check', (req, res) => {
    console.log('Detected language:', req.language);
    console.log('Configured languages:', req.i18n.languages);
    logger.info("health check ok");
    res.status(200).send(req.t(`welcome`))
})

app.use('', adminRoutes);
app.use('/file', fileUploadRoutes)
app.use('/vehicle', vehicleRoutes)

/*###########################################
GLOBAL HANDLERS
###########################################*/

// Catch-all middleware for unknown routes
app.use((req, res) => {
    res.status(404).send({
        msg: 'route undefined'
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Global error handler:', err.message);
    logger.info(err)
    res.status(500).send('500 - Internal Server Error');
});
  
// Example route that throws an error


/*###########################################
APP START
###########################################*/
const port = process.env.SERVER_PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
console.log(`Server listening on ${port}`);
server.listen(port);
