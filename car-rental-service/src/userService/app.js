import express from 'express';
import http from 'http';
import userRoutes from './src/routes/user.js';
import swaggerUI from 'swagger-ui-express';
import {swaggerSpec} from './swagger.js';
import logger from './src/logger/index.js';
import utils from './utils.js'


const app = new express();
/*###########################################
MIDDLEWARE
###########################################*/

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Serve Swagger documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/health-check', (req, res) => {
    logger.info("health check ok");
    res.status(200).send({status: "User service NodeJs is running fine"})
})
app.use('/user', userRoutes);

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
