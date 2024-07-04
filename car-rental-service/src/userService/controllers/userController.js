// ES6 module syntax
const getUser = (req, res) => {
    res.send("get user");
};


const postUser = (req, res) => {
    res.send("post user");
};


const userController = {
    getUser,
    postUser
}

export default userController;