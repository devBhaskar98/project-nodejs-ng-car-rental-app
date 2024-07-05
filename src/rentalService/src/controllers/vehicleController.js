import vehicleDao from "../dao/vehicleDao.js";
import fileUploadController from "./fileUploadController.js";

let vehicleController = {};

vehicleController.getAllVehicles = async (req, res) => {
    const output = await vehicleDao.getAllVehicles();
    res.send(output);
}

vehicleController.createVehicle = async (req, res) => {
    // TODO: Upload Image
    const vehicleId = await vehicleDao.createVehicle(req.body);
    res.status(200).json({ message: `Vehicle with name "${req.body.name}" saved successfully.` });
};

vehicleController.deleteVehicle = async (req, res) => {
    const vehicleId = req.params.id;
    const output = await vehicleDao.deleteVehicle(vehicleId);
    res.status(200).json({ message: `Vehicle with ID "${vehicleId}" deleted successfully.` });
};

export default vehicleController;