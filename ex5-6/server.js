var log = require('logger')(module);
var db = require('db');
var User = require('./user');

db.connect();

function run(){
    var vasya = new User("Vasya");
    var petya = new User("Petya");

    vasya.hello(petya);

    log(db.getPhrase("Run successful"));
}

if(module.parent){
    exports.run = run;
} else {
    run();
}