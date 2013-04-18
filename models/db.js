var mongoose = require('mongoose');

var postsSchema = new mongoose.Schema({
  name: String,
  content: String
});

mongoose.model('Posts', articlesSchema);

mongoose.connect('mongodb://localhost/nodeapp');