// Importing Mongoose and bcrypt for password hashing
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Defining the user schema
const userSchema = mongoose.Schema(
    {
        firstName: { type: String }, // User's first name
        lastName: { type: String }, // User's last name
        email: { type: String }, // User's email address
        password: { type: String }, // User's password
    },
    { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Middleware to hash the password before saving the user to the database
userSchema.pre('save', function (next) {
    let user = this;

    // Check if the password is modified before hashing
    if (user.isModified('password')) {
        return bcrypt.hash(user.password, 12, function (err, hash) {
            if (err) {
                return next(err);
            }
            // Set the user's password to the hashed value
            user.password = hash;
            return next();
        });
    } else {
        return next();
    }
});

// Method to compare entered password with the hashed password in the database
userSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, function (err, match) {
        if (err) {
            return next(err, false);
        }
        // Return the result of the password comparison
        return next(null, match);
    });
};

// Creating the 'User' model using the defined schema
const User = mongoose.model('User', userSchema);

module.exports = User;
