
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

//function run(){
    console.log("PENE");
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    var router = express.Router();

    router.get('/hola', function(req, res) {
       res.send("Hola WANCHING!");
    });

    app.use(router);

    app.listen(8080, function() {
      console.log("Node server running on http://localhost:3000");
    });
//}
