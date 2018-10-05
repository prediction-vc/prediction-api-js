/**
 * Prediction Enterprise API
 * We are proud to introduce our 1.0.0 version of Prediction Enterprise API.  It is our first step to sharing our data with the world and being more transparent about our predictions, their accuracy and our fund trades and performance.  In the case you are missing some data please drop us a line at enterprise@prediction.vc. We will be happy to answer your questions and implement new features for you.  [Platform FAQ](https://predictionvc.freshdesk.com/support/solutions/) 
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PredictionEnterpriseApi);
  }
}(this, function(expect, PredictionEnterpriseApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PredictionEnterpriseApi.Datum();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Datum', function() {
    it('should create an instance of Datum', function() {
      // uncomment below and update the code to test Datum
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be.a(PredictionEnterpriseApi.Datum);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

    it('should have the property entryDate (base name: "entry_date")', function() {
      // uncomment below and update the code to test the property entryDate
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

    it('should have the property exitDate (base name: "exit_date")', function() {
      // uncomment below and update the code to test the property exitDate
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

    it('should have the property gain (base name: "gain")', function() {
      // uncomment below and update the code to test the property gain
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

    it('should have the property notionalTraded (base name: "notional_traded")', function() {
      // uncomment below and update the code to test the property notionalTraded
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

    it('should have the property entryValue (base name: "entry_value")', function() {
      // uncomment below and update the code to test the property entryValue
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

    it('should have the property exitValue (base name: "exit_value")', function() {
      // uncomment below and update the code to test the property exitValue
      //var instane = new PredictionEnterpriseApi.Datum();
      //expect(instance).to.be();
    });

  });

}));
