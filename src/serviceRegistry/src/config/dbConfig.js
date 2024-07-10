// Get the client
import Redis from 'redis'

const redisClient = Redis.createClient();



let db = {
    name: 'redis'
}

//TODO: use .env 
// Create the connection to database
db.client = redisClient;

export default db;