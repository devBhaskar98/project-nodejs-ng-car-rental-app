// A simple SELECT query
import db from "../config/dbConfig.js";

let vehicleDao = {};

const dbConnection = db.connection;


vehicleDao.getVehicle = async (vehicle_id) => {

  try {
      const [queryResults, fields] = await dbConnection.query(
        'SELECT * FROM vehicle where vehicle_id = ?', vehicle_id
      );

      return queryResults
    } catch (err) {
      console.log(err);
    }
}

vehicleDao.getVehicleImage = async (vehicle_id) => {

  try {
      const [queryResults, fields] = await dbConnection.query(
        'SELECT vehicle_id, img_path FROM vehicle where vehicle_id = ?', vehicle_id
      );

      return queryResults
    } catch (err) {
      console.log(err);
    }
}

vehicleDao.getAllVehicles = async () => {
    try {
        const [queryResults, fields] = await dbConnection.query(
          'SELECT * FROM vehicle'
        );

        return queryResults
      } catch (err) {
        console.log(err);
      }
}

vehicleDao.createVehicle = async (data) => {
    try {
        const {  name, mileage, weight_load, color, engine_cc, location, rent_price_per_day, rent_price_per_month, img_path, is_rented, is_inspected, created_date, created_by_id} = data;
        const query = 'INSERT INTO vehicle ( name, mileage, weight_load, color, engine_cc, location, rent_price_per_day, rent_price_per_month, img_path, is_rented, is_inspected, created_date, created_by_id ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        await dbConnection.query(query, [  name, mileage, weight_load, color, engine_cc, location, rent_price_per_day, rent_price_per_month, img_path, is_rented, is_inspected, created_date, created_by_id ], (err, output) => {
            if (err) {
                console.error('Error saving vehicle:', err.stack);
                // callback(err, null);
                return;
            }

            console.log(output)
            return output;
        }
          
        );
      } catch (err) {
        console.log(err);
      }
}

vehicleDao.deleteVehicle = async (data) => {
    try {
        const vehicle_id  = data;

        console.log('delete processing for vehicle id ', vehicle_id);
        const query = 'DELETE FROM vehicle WHERE vehicle_id IN (?)';

        await dbConnection.query(query, [ vehicle_id], (err, output) => {
            if (err) {
                console.error('Error Deleting vehicle:', err.stack);
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

export default vehicleDao;



  