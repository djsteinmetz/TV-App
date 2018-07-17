var request = require("request");
var fs = require("fs");
var TV = require("./tv");
nodeArgs = process.argv
nodeArgs = nodeArgs.slice(3);
nodeArgs = nodeArgs.join("+");
term = process.argv[2];
if(!term) {
    term = "actor";
};
if(!nodeArgs) {
    nodeArgs = "Al+Pacino";
};
// console.log(nodeArgs);
// not convinced the switch parameter is correct
switch(term) {
    case "actor": 
        // some action
    break;

    case "show":
        var showSearch = new TV(nodeArgs);
        showSearch.findShow(nodeArgs);
       
    break;
};