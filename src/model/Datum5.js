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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PredictionEnterpriseApi) {
      root.PredictionEnterpriseApi = {};
    }
    root.PredictionEnterpriseApi.Datum5 = factory(root.PredictionEnterpriseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Datum5 model module.
   * @module model/Datum5
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Datum5</code>.
   * @alias module:model/Datum5
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Datum5</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Datum5} obj Optional instance to populate.
   * @return {module:model/Datum5} The populated <code>Datum5</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], Object);
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], Object);
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], Object);
      }
      if (data.hasOwnProperty('close')) {
        obj['close'] = ApiClient.convertToType(data['close'], Object);
      }
      if (data.hasOwnProperty('volume')) {
        obj['volume'] = ApiClient.convertToType(data['volume'], Object);
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], Object);
      }
    }
    return obj;
  }

  /**
   * open price in USD
   * @member {Object} open
   */
  exports.prototype['open'] = undefined;
  /**
   * high price in USD
   * @member {Object} high
   */
  exports.prototype['high'] = undefined;
  /**
   * low price in USD
   * @member {Object} low
   */
  exports.prototype['low'] = undefined;
  /**
   * close price in USD
   * @member {Object} close
   */
  exports.prototype['close'] = undefined;
  /**
   * token volume for the past minute
   * @member {Object} volume
   */
  exports.prototype['volume'] = undefined;
  /**
   * datetime
   * @member {Object} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));


