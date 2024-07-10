// A simple SELECT query

import db from "../config/dbConfig.js";
import logger from '../logger/index.js';

let gsdDao = {};

const dbConnection = db.connection;

gsdDao.getUser = async (user_id) => {

  try {
    const [queryResults, fields] = await dbConnection.query(
      'SELECT * FROM GSD where gsd_id = ?', user_id
    );

    return queryResults
  } catch (err) {
    console.log(err);
  }
}

export default gsdDao;



