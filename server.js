var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    Router = require('./routes.js'),
    app = express(),
    port = process.env.PORT || 8080;

//Mount Middleware
app.use(express.static(__dirname + '/public'),
       bodyParser.json(),
       bodyParser.urlencoded({extended:true}),
        morgan('dev')
        );
//Routes!
Router(app); 

app.listen(port,()=>{
  console.log("Server Up on port!" + port);
})