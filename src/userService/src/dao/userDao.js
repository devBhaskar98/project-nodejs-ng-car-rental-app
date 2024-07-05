// A simple SELECT query

import db from "../config/dbConfig.js";
import logger from '../logger/index.js';

let userDao = {};

const dbConnection = db.connection;

userDao.getUser = async (user_id) => {

  try {
    const [queryResults, fields] = await dbConnection.query(
      'SELECT * FROM user where user_id = ?', user_id
    );

    return queryResults
  } catch (err) {
    console.log(err);
  }
}

userDao.getUserProfileImage = async (user_id) => {

  try {
    const [queryResults, fields] = await dbConnection.query(
      'SELECT user_id, profile_img FROM user where user_id = ?', user_id
    );

    return queryResults
  } catch (err) {
    console.log(err);
  }
}

userDao.getAllUsers = async () => {
  try {
    const [queryResults, fields] = await dbConnection.query(
      'SELECT * FROM user'
    );
    return queryResults
  } catch (err) {
    console.log(err);
  }
}

userDao.createUser = async (data, callback) => {
  logger.info("request to create user with name", data.name);
  const { name, email, address, profile_img, user_type } = data;
  const query = 'INSERT INTO user (name, email, address, profile_img, user_type) VALUES (?, ?, ?, ?, ?)';
  const values = [name, email, address, profile_img, user_type];

  const [queryResults, fields] = await dbConnection.query(
    query, values
  );

  const fetchQuery = 'SELECT * FROM user WHERE user_id = ?';
  const [queryUserResult, userFields] = await dbConnection.query(
    fetchQuery, queryResults.insertId 
  );


  return queryUserResult;
};

userDao.deleteUser = async (user_id) => {
  try {
    console.log('delete processing for user id ', user_id);
    const query = 'DELETE FROM user WHERE user_id IN (?)';

    await dbConnection.query(query, [user_id], (err, output) => {
      if (err) {
        console.error('Error Deleting User:', err.stack);
        // callback(err, null);
        return;
      }
      return output;
    }

    );
  } catch (err) {
    console.log(err);
  }
}

export default userDao;



