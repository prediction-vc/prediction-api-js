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
    root.PredictionEnterpriseApi.Datum = factory(root.PredictionEnterpriseApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Datum model module.
   * @module model/Datum
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Datum</code>.
   * @alias module:model/Datum
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Datum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Datum} obj Optional instance to populate.
   * @return {module:model/Datum} The populated <code>Datum</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('entry_date')) {
        obj['entry_date'] = ApiClient.convertToType(data['entry_date'], Object);
      }
      if (data.hasOwnProperty('exit_date')) {
        obj['exit_date'] = ApiClient.convertToType(data['exit_date'], Object);
      }
      if (data.hasOwnProperty('gain')) {
        obj['gain'] = ApiClient.convertToType(data['gain'], Object);
      }
      if (data.hasOwnProperty('notional_traded')) {
        obj['notional_traded'] = ApiClient.convertToType(data['notional_traded'], Object);
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('entry_value')) {
        obj['entry_value'] = ApiClient.convertToType(data['entry_value'], Object);
      }
      if (data.hasOwnProperty('exit_value')) {
        obj['exit_value'] = ApiClient.convertToType(data['exit_value'], Object);
      }
    }
    return obj;
  }

  /**
   * base and quote currencies traded with, default quote currency is USD, if no quote currency specified assume USD
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * datetime
   * @member {Object} entry_date
   */
  exports.prototype['entry_date'] = undefined;
  /**
   * datetime
   * @member {Object} exit_date
   */
  exports.prototype['exit_date'] = undefined;
  /**
   * trade gain percentage
   * @member {Object} gain
   */
  exports.prototype['gain'] = undefined;
  /**
   * notional amount traded with
   * @member {Object} notional_traded
   */
  exports.prototype['notional_traded'] = undefined;
  /**
   * short/long
   * @member {String} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * value of the token when it entered the portfolio
   * @member {Object} entry_value
   */
  exports.prototype['entry_value'] = undefined;
  /**
   * value of the token when it left the portfolio
   * @member {Object} exit_value
   */
  exports.prototype['exit_value'] = undefined;



  return exports;
}));


