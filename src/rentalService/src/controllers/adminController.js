// ES6 module syntax
const getVehicle = (req, res) => {
    res.send("get vehicle");
};


const postVehicle = (req, res) => {
    res.send("post vehicle");
};


const adminController = {
    getVehicle,
    postVehicle
}

export default adminController;