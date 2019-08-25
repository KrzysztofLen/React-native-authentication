const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    email: {
        require: true,
        unique: true,
        type: String
    },
    password: {
        require: true,
        type: String
    }
});

userSchema.pre("save", function(next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function(passwordSendByUser) {
    const user = this;

    return new Promise((resolve, reject) => {
        bcrypt.compare(passwordSendByUser, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }

            if (!isMatch) {
                return reject(false);
            }

            resolve(true);
        });
    });
};

mongoose.model("User", userSchema);
