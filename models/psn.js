var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var psnSchema = new Schema({
  nombre:    { type: String },
  usd_valor:     { type: Number },
  fecha_comprado:  { type: Date },
  fecha_vendido:  { type: Date },
  usd_comprado:   { type: Number },
  usd_vendido:  { type: Number },
  tel_comprador:  { type: Number },
  lugar_comprado:  { type: String },
  lugar_vendido:  { type: String },
  region:  { type: String },
  codigo:  { type: String },
  ganancia:  { type: Number },
  vendido:   { type: Boolean },
  comprador:    { type: String}
});

module.exports = mongoose.model('psn', psnSchema);