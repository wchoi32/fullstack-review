const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  userName: String, 
  repoName: String,
  description: String, 
  htmlUrl: String,
  updatedAt: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  var newRepo = new Repo ({
    userName: repo.owner.login, 
    repoName: repo.name,
    description: repo.description, 
    htmlUrl: repo["html_url"],
    updatedAt: repo["updated_at"],
  });

  newRepo.save((err, newRepo) => {
    if (err) return err;
  });
  // repo.find({}, function(err, collection) {
  //   console.log(collection);
  // });
}

let retrieve = () => {
  Repo.find({}, (err, collection) => {
    console.log(collection)
  });
}
module.exports.retrieve = retrieve;
module.exports.save = save;

// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }