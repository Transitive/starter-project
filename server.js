var Transitive = new (require("transitive"))();

var options = {};

//boot transitive, compiling everything and creating server 
(function(){
  Transitive.boot(this, options);
})();

console.log("Server started. listening on port " + Transitive.server.address().port);

//Controllers.
//TODO: make this automated =)
Transitive.registerController(require('./controllers/home.js'));
