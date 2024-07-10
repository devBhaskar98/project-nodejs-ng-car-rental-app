import registryDao from "../dao/registryDao.js";

let registryController = {};

registryController.registerService = async (req, res) => {
    const output = await registryDao.register(req.body);
    res.send(output);
}

registryController.getEndpoint = async (req, res) => {
    const output = await registryDao.getEndpoint(req.params.serviceName);
    res.send(output);
}

export default registryController;