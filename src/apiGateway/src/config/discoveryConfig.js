import httpClient from "../../httpClient.js";
import appConstant from "../constant/appConstant.js";

const discovery_endpoint = `${process.env.DISCOVERY_ENDPOINT}`;

let discoveryConfig =  {

}

discoveryConfig.getEndpoint = async (serviceName) => {
    try{
        let response = await httpClient.fetchData(discovery_endpoint + '/discovery/' + serviceName)
        response = JSON.parse(response);
        return response.data.value;
    } catch (error) {
        console.log(error);
    }
}

export default discoveryConfig;