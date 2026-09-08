const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
    },
  ],
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
