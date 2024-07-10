// A simple SELECT query

import db from "../config/dbConfig.js";
import logger from '../logger/index.js';


let registryDao = {};

const redisClient = db.client;

// Make sure the client connects successfully
redisClient.connect().then(() => {
  console.log('Connected to Redis');
}).catch((err) => {
  console.error('Failed to connect to Redis', err);
});

registryDao.register = async (registerRequest) => {
  try {
    redisClient.set(registerRequest.name, registerRequest.endpoint);
  } catch (err) {
    console.log(err);
  }
}

registryDao.getEndpoint = async (serviceName) => {
  try {
    const value = await redisClient.get(serviceName);
    return {
            name: serviceName,
            value
          };
    
  } catch (err) {
    console.log(err);
  }
}

export default registryDao;



