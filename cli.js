var TV = require("./tv");
nodeArgs = process.argv.slice(3).join("+");
term = process.argv[2];
if(!term) {
    term = "actor";
};
if(!nodeArgs) {
    nodeArgs = "Al+Pacino";
};
switch(term) {
    case "actor": 
    var actorSearch = new TV(nodeArgs);
    actorSearch.findActor(nodeArgs);
    break;
    case "show":
        var showSearch = new TV(nodeArgs);
        showSearch.findShow(nodeArgs);
    break;
};