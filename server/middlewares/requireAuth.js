const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const keys = require("./../config/keys");

module.exports = (req, res, next) => {
    // authorization === Bearer eg. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUoH9TeTBq0sQTQbbIo
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: "You must be login" });
    }

    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, keys.MONGO_URI, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "You must be login" });
        }

        const { userID } = payload;

        const user = await User.findById(userID);
        req.user = user;
        next();
    });
};
