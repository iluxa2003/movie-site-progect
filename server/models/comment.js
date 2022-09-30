const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  movie_id: String,
  userName: String,
  rating: String,
  comment: String,
});

module.exports = mongoose.model("comment", commentSchema);
