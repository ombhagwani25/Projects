const userModel = require("../Models/userModel");

const registerUser = async (req, res) => {
    const {name , email, password } = req.body;

    let  user = await userModel.findOne({email});

    if(user) return res.status(400).json("User already exists");

    if(!name || !email || !password) return res.status(400).json("Please enter all fields");

    if(validator.isEmail(email)) return res.status(400).json("Please enter a valid email");

    if(validator.isStrongPassword(password)) return res.status(400).json("Please enter a strong password");

    user = new userModel({name , email, password});
    
}

module.exports = {registerUser};
