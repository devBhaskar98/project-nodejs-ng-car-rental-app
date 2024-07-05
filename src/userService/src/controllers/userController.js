import userDao from "../dao/userDao.js";

let userController = {};

userController.getUser = async (req, res) => {
    const output = await userDao.getUser(req.params.id);
    res.send(output);
}


userController.getAllUser = async (req, res) => {
    const output = await userDao.getAllUsers();
    res.status(200).send(output);
};

userController.createUser = async (req, res) => {
    // TODO: Upload Image
    const userDetails = await userDao.createUser(req.body);

    res.status(200).json(userDetails[0]);
};

userController.deleteUser = async (req, res) => {
    const output = await userDao.deleteUser(req.params.id);
    res.status(200).json({ message: `User with ID "${userId}" deleted successfully.` });
};


userController.getUserProfileImage = async (req, res) => {
    const output = await userDao.getUserProfileImage(req.params.id);
    res.send(output);
}




export default userController;