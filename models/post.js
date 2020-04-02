const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  topic: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now }
});

const newPost = mongoose.model("Post", postSchema);

module.exports = newPost;