const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const keys = require("./../config/keys");

const login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res
            .status(422)
            .send({ error: "You must provide email and password" });
    }

    const user = await User.findOne({ email });

    if (user === null) {
        return res.status(422).send({ error: "User does not exist" });
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign(
            {
                userID: user._id
            },
            keys.MONGO_URI
        );

        res.send({ token });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
};

module.exports = login;
