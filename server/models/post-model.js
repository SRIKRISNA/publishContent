const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    posts : String,
    user: String
});

const PostModel = mongoose.model("post", postSchema);
module.exports = PostModel;
