const psn = require("./models/psn");
var server = require('http').createServer();
var port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('Listening on ' + port);
});

var psn_instance = new psn(
{
nombre:    'Psn 20',
  usd_valor:   '20',
//  fecha_comprado:  { type: Date },
//  fecha_vendido:  { type: Date },
//  usd_comprado:   { type: Number },
//  usd_vendido:  { type: Number },
//  tel_comprador:  { type: Number },
  lugar_comprado:  'G2A',
  lugar_vendido:  'WhatApp' ,
  region:  'USA',
  codigo:  '8098fd908ds09f',
  ganancia:  2 ,
  vendido:   true,
  comprador:    'Pepito'
});
// Save the new model instance, passing a callback
//psn_instance.save(function (err) {
//  if (err){
//    console.log("ERORORORORORO")
//   return handleError(err);
//  // saved!
//  }
//});

var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());



    var psnsCtrl = require('./controladores/psnsCtrl');

    // API routes
    var psns = express.Router();

    psns.get('/', function(req, res) {
           res.send("Hola WACHING!");
        });

    psns.route('/psns')
      .get(psnsCtrl.findAllpsns);
//      .post(psnsCtrl.addpsns);

    psns.route('/psns/:id')
      .get(psnsCtrl.findById);
//      .put(psnsCtrl.updatepsns)
//      .delete(psnsCtrl.deletepsns);

    app.use('/api', psns);
//    var mongoDB = 'mongodb://localhost/psn';
    var mongoDB = 'mongodb://ernesdary:teamos2!@ds041178.mlab.com:41178/ernesdary';
    mongoose.connect(mongoDB, function(err, res) {
      if(err) {
          console.log('ERROR: connecting to Database. ' + err);
        }else {
        console.log('Connected to Database. ');
        }
        app.listen(3000, function() {
          console.log("Node server running on http://localhost:3000");
        });
      });