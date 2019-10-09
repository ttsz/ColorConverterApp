var chai  = require("chai");
const chaiHttp = require('chai-http');
var request = require("request");
var app = require("../../app/server");
chai.use(chaiHttp);

const chaiRequest = chai.request(app);

describe("Color Code Converter API", function() {

    describe("RGB to Hex conversion", function() {
  
      var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
  
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
      });
  
      it("returns the color in hex", function(done) {
        request(url, function(error, response, body) {
          chai.expect(body).to.equal("ffffff");
          done();
        });
      });
 
    });
  
    describe("Hex to RGB conversion", function() {
      var url = "http://localhost:3000/hexToRgb?hex=00ff00";
  
      it("returns status 200", function(done) {
        request(url, function(error, response, body) {
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
      });
  
      it("returns the color in RGB", function(done) {
        request(url, function(error, response, body) {
          chai.expect(body).to.equal("[0,255,0]");
          done();
        });
      });
    });

  });
