import vehicleDao from "../dao/vehicleDao.js";
import fileUploadController from "./fileUploadController.js";

let vehicleController = {};

vehicleController.getVehicle = async (req, res) => {
    const vehicleId = req.params.id;
    const output = await vehicleDao.getVehicle(vehicleId);
    res.send(output);
}

vehicleController.getAllVehicles = async (req, res) => {
    const page = {
        number: parseInt(req.query.page_number, 10) || 1,
        size: parseInt(req.query.page_size, 10) || 5
    }

    const output = await vehicleDao.getAllVehicles(page);
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


vehicleController.getVehicleImage = async (req, res) => {
    const vehicleId = req.params.id;
    const output = await vehicleDao.getVehicleImage(vehicleId);
    res.send(output);
}

export default vehicleController;