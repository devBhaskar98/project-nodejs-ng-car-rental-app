// import gsdDao from "../dao/gsd.js";
import httpClient from "../../httpClient.js";

const SERVICE_REGISTRY_ENDPOINT = "http://localhost:8098/servicereg/";
let discoveryController = {};


discoveryController.getServiceEndpoint = async (req, res) => {
    const serviceName = req.params.serviceName;

    if (serviceName) {
        let response = await httpClient.fetchData(SERVICE_REGISTRY_ENDPOINT + `${serviceName}`);
        response = JSON.parse(response).data;
        res.json(response);
        return;
    }

    res.status(500).json("invalid request")
}

export default discoveryController;