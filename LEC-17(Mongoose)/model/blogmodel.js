const { default: mongoose } = require("mongoose");
const require = require("mongoose");
const { Schema } = "mongoose";

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  date: {
    type: Date,
    default: Date.now,
  },
  //mapping
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const blogModel = mongoose.model("blog", blogSchema);
module.exports = blogModel;
