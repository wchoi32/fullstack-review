const express = require('express');
let github = require('../helpers/github.js');
let index = require('../database/index.js')
let parser = require('body-parser');
let app = express();

app.use(parser.text());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  github.getReposByUsername(req.body, (repos) => {
    repos.forEach((repo) => {
      index.save(repo);
    })
    res.sendStatus(200);
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // for (var i = 0 ; i < 25; i++) {

  // }
  index.retrieve();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});