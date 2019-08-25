const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const keys = require("./../config/keys");

const register = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // If a user with email does exist, return error
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(422).send({ message: "Email is in use" });
        }

        // If the user with email does NOT exist, create and save user record
        const user = await new User({ email, password });
        user.save();

        const token = jwt.sign(
            {
                userID: user._id
            },
            keys.JWT_SECRET
        );

        res.status(200).send({
            message: "User successful saved",
            token
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};

module.exports = register;
