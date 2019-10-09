require('dotenv').config()
var log4js = require('log4js');
log4js.configure('app/config/log4js.json');
var express = require("express");
var app = express();

var express = require("express");
var app = express();
var converter = require("./converter");
var log = log4js.getLogger("app");

let port = process.env.PORT;

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));

app.get("/rgbToHex", function(req, res) {
  let red   = parseInt(req.query.red, 10);
  let green = parseInt(req.query.green, 10);
  let blue  = parseInt(req.query.blue, 10);
  log.debug(`Requested parameters : ${red}, ${green}, ${blue}`);
  let hex = converter.rgbToHex(red, green, blue);
  log.debug(`response : ${hex}`);
  res.send(hex);
});
  
app.get("/hexToRgb", function(req, res) {
  let hex = req.query.hex;
  log.debug(`Requested parameter : ${hex}`);
  let rgb = converter.hexToRgb(hex);
  log.debug(`response : ${JSON.stringify(rgb)}`);
  res.send(JSON.stringify(rgb));
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html')
})

app.listen(port);
log.info(`Express server listening on port ${port}`);