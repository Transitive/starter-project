var Transitive = new (require("transitive"))();

var options = {};

if("port" in process.env){
  options.port = process.env.port;
}

//boot transitive, compiling everything and creating server 
(function(){
  Transitive.boot(this, options);
})();

console.log("Server started. listening on port " + Transitive.server.address().port);

//let's add  a home page route to the app.
Transitive.server.use(connect.router(function(app){
  app.get("/", function(req, res){
    res.writeHead(200, { 
      'Content-Type': 'text/html', 
      'Cache-Control': 'no-cache, no-store'
    });
    
    res.end(Transitive.Views.renderPage("home", {}));
  });
}));

