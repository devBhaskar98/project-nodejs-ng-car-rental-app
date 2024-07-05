import express from 'express';
import http from 'http';
import logger from './src/logger/index.js';
import utils from './utils.js';
import httpClient from './httpClient.js';

const app = express();
const PORT = 3000;

const USER_SERVICE_ENDPOINT = utils.getUserServiceEndpoint();
const RENTAL_SERVICE_ENDPOINT = utils.getRentalServiceEndpoint();

app.use(express.json());

/*###########################################
MIDDLEWARE
###########################################*/

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/health-check', (req, res) => {
    logger.info("health check ok");
    res.status(200).send({status: "API Gateway service NodeJs is running fine"})
})

app.get('/service-check', async (req, res) => {
    const serviceEndpointStatus = await httpClient.fetchData(null, USER_SERVICE_ENDPOINT + '/health-check', null);
    const rentalEndpointStatus = await httpClient.fetchData(null, RENTAL_SERVICE_ENDPOINT + '/health-check', null);
    const status = {
        "userServiceEndpoint": JSON.parse(serviceEndpointStatus).status,
        "rentalServiceEndpoint": JSON.parse(rentalEndpointStatus).status
    }
    console.log( JSON.parse(serviceEndpointStatus))

    await res.send(status)

})

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

/*###########################################
APP START
###########################################*/
const port = process.env.SERVER_PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
console.log(`Server listening on ${port}`);
server.listen(port);
