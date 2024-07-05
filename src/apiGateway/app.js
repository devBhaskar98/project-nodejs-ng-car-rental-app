import express from 'express';
import http from 'http';
import logger from './src/logger/index.js';
import utils from './utils.js';
import httpClient from './httpClient.js';
import authRoute from './src/routes/authRoute.js';
import postRoute from './src/routes/postRoute.js';
import {auth} from './src/middleware/auth.js';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local'; 
import User from './src/models/user.js';
import bodyParser from 'body-parser';
import session from 'express-session';
import dbConfig from './src/config/dbConfig.js';

const app = express();
const PORT = 3000;

const USER_SERVICE_ENDPOINT = utils.getUserServiceEndpoint();
const RENTAL_SERVICE_ENDPOINT = utils.getRentalServiceEndpoint();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.json());

/*###########################################
MIDDLEWARE
###########################################*/

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Set up session middleware
app.use(session({
  secret: 'nodejspass', // Replace with your own secret key
  resave: false, // Forces the session to be saved back to the session store
  saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store
  cookie: { secure: false } // Set to true if using https
}));

app.get('/health-check', (req, res) => {
    logger.info("health check ok");
    res.status(200).send({status: "API Gateway service NodeJs is running fine"})
})

app.get('/service-check', async (req, res) => {
    const serviceEndpointStatus = await httpClient.fetchData(USER_SERVICE_ENDPOINT + '/health-check');
    const rentalEndpointStatus = await httpClient.fetchData(RENTAL_SERVICE_ENDPOINT + '/health-check');
    const status = {
        "userServiceEndpoint": JSON.parse(serviceEndpointStatus).status,
        "rentalServiceEndpoint": JSON.parse(rentalEndpointStatus).status
    }
    console.log( JSON.parse(serviceEndpointStatus))

    await res.send(status)

})

app.use(auth.initialize());
app.use(passport.initialize());
app.use(passport.session());

// Passport Config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(authRoute);
app.use(postRoute);

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
