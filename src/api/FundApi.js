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
    define(['ApiClient', 'model/FundTrades', 'model/FundTradesTokens'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FundTrades'), require('../model/FundTradesTokens'));
  } else {
    // Browser globals (root is window)
    if (!root.PredictionEnterpriseApi) {
      root.PredictionEnterpriseApi = {};
    }
    root.PredictionEnterpriseApi.FundApi = factory(root.PredictionEnterpriseApi.ApiClient, root.PredictionEnterpriseApi.FundTrades, root.PredictionEnterpriseApi.FundTradesTokens);
  }
}(this, function(ApiClient, FundTrades, FundTradesTokens) {
  'use strict';

  /**
   * Fund service.
   * @module api/FundApi
   * @version 1.0.0
   */

  /**
   * Constructs a new FundApi. 
   * @alias module:api/FundApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Traded token pairs
     *  base/quote currencies traded with  default quote currency is USD, if no quote currency specified assume USD 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundTradesTokens} and HTTP response
     */
    this.fundsSimfundPairsGetWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FundTradesTokens;

      return this.apiClient.callApi(
        '/funds/simfund/pairs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Traded token pairs
     *  base/quote currencies traded with  default quote currency is USD, if no quote currency specified assume USD 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundTradesTokens}
     */
    this.fundsSimfundPairsGet = function() {
      return this.fundsSimfundPairsGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Prediction Fund trade data
     * Prediction Fund trade data
     * @param {Object} opts Optional parameters
     * @param {String} opts.entry entry date for trades, e.g 2018-09-01.
     * @param {String} opts.exit exit date for trades, e.g 2018-09-01.
     * @param {String} opts.direction short/long
     * @param {String} opts.sort sort by entry or exit, e.g. &#x60;sort&#x3D;entry:ASC&#x60;, default sort DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FundTrades} and HTTP response
     */
    this.fundsSimfundTradesGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'entry': opts['entry'],
        'exit': opts['exit'],
        'direction': opts['direction'],
        'sort': opts['sort'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Authorization'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FundTrades;

      return this.apiClient.callApi(
        '/funds/simfund/trades', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Prediction Fund trade data
     * Prediction Fund trade data
     * @param {Object} opts Optional parameters
     * @param {String} opts.entry entry date for trades, e.g 2018-09-01.
     * @param {String} opts.exit exit date for trades, e.g 2018-09-01.
     * @param {String} opts.direction short/long
     * @param {String} opts.sort sort by entry or exit, e.g. &#x60;sort&#x3D;entry:ASC&#x60;, default sort DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FundTrades}
     */
    this.fundsSimfundTradesGet = function(opts) {
      return this.fundsSimfundTradesGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
