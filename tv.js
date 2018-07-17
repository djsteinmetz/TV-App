var request = require("request"), fs = require("fs");
var TV = function() {
  this.findShow = show => {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var mov = JSON.parse(body);
        let logs = "Name: " + mov.name + "\nGenre(s): " + mov.genres + "\nRating: " + mov.rating.average + "\nNetwork: " + mov.network.name + "\nSummary: " + mov.summary + "\n\n"
        fs.appendFile("log.txt", logs, function(err) {
          if (err) throw err;
        });
        console.log(logs)
      };
    });
  };
  this.findActor = function(actor) {
    //test
    //this.searchFunction("search", "people", actor, act[0].person.name , "\nBirthday: ", act[0].person.birthday , "\nGender: " , act[0].person.gender , "\nCountry of Birth: ", act[0].person.country.name , "\nURL: ", act[0].person.url)
    
    var URL = "http://api.tvmaze.com/search/people?q=" + actor
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var act = JSON.parse(body);
        let logs = "Name: " + act[0].person.name + "\nBirthday: " + act[0].person.birthday + "\nGender: " + act[0].person.gender + "\nCountry of Birth: " + act[0].person.country.name + "\nURL: " + act[0].person.url + "\n\n"
        fs.appendFile("log.txt", logs, function(err) {
          if (err) throw err;
        });
        console.log(logs)
      };
    });
  };
  this.searchFunction = function(search, queryType, query, log1Val, log2, log2Val, log3, log3Val, log4, log4Val, log5, log5Val) {
    var URL = "http://api.tvmaze.com/" + search + "/" + queryType + "?q=" + query;
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var movAct = JSON.parse(body);
        let logs = "Name: " + log1Val + log2 + log2Val + log3 + log3Val + log4 + log4Val + log5 + log5Val + "\n\n"
        fs.appendFile("log.txt", logs, function(err) {
          if (err) throw err;
        });
        console.log(logs)
      };
    });
  }
};
module.exports = TV;