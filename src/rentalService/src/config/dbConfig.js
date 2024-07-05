// Get the client
import mysql from 'mysql2/promise';

let db = {
    name: 'mySql'
}

//TODO: use .env 
// Create the connection to database
db.connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin@123',
  database: 'cr_rental_db',
});

export default db;