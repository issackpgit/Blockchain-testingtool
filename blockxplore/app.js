
/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + "/public/src"));
app.set("views", __dirname + "/views");
///app.set("view engine", "html"); 



/*app.get('/', routes.index);
app.get('/users', user.list);*/

app.get("/",function(req,res){  
    res.redirect("/index.html");  
});

app.get("/index",function(req,res){  
            res.redirect('/index.html');      
   });
   
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
