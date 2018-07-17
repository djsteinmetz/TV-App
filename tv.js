var request = require("request");
var fs = require("fs");
var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    request(URL, function(error, response, body) {
      if (!error && response.statusCode === 200) {
          
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        var mov = JSON.parse(body);
        // console.log(mov);
        let logs = "Name: " + mov.name + "\nGenre(s): " + mov.genres + "\nRating: " + mov.rating.average + "\nNetwork: " + mov.network.name + "\nSummary: " + mov.summary + "\n"
        fs.appendFile("log.txt", logs, function(err) {
          if (err) throw err;
        });
        console.log(logs)
      };
    });
  };
};

module.exports = TV;
