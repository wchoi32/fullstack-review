import { callbackify } from 'util';

const request = require('request');
const config = require('../config.js');

let getReposByUsername = (/* TODO */) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, resp, body) => {
    if(!err && resp.statusCode === 200) {
      var repos = JSON.parse(body);
      console.log("its working ", body);
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;