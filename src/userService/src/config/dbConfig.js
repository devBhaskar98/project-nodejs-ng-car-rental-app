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
  database: 'cr_user_db',
}, (err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.stack);
    return;
  }
  console.log('Connected to MySQL database successfully.');
});

export default db;