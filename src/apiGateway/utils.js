import appConstant from "./src/constant/appConstant.js";
import { URL } from 'url';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const utils = {};

utils.setupEnv = async () => {
    return new Promise((resolve, reject) => {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = dirname(__filename);
  
        if(process.env.NODE_ENV === 'production') {
          console.log('Node app running in production')
          dotenv.config({ path: new URL('prod.env', import.meta.url) });
        } else {
          console.log('Node app running in development mode')
          dotenv.config({ path: new URL('dev.env', import.meta.url) });
        }
  
        
  
        // Resolve the promise after a short delay to ensure dotenv.config completes
        resolve(true);
    });
};

  
utils.getUserServiceEndpoint = () => {
    return appConstant.user_service_endpoint;
}

utils.getRentalServiceEndpoint = () => {
    return appConstant.rental_service_endpoint;
}

utils.setupEnv();

export default utils;