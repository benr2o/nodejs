const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: String,
    lastName: String
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);

// userSchema.method.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };