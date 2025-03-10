const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
    },
  email: {
    type: String,
    required: true,
    unique: true,
    },
  password: {
    type: String,
    required: true,
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
        },

},
{
    timestamps: true,
}
);

module.exports = mongoose.model("user", userSchema);
