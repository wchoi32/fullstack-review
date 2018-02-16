const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userName: String, 
  repoName: String,
  description: String, 
  htmlUrl: String,
  updatedAt: Date
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  
}

module.exports.save = save;

// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }