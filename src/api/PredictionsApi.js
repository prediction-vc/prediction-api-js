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
    define(['ApiClient', 'model/Predictions', 'model/PredictionsAccuracy', 'model/PredictionsTokens'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Predictions'), require('../model/PredictionsAccuracy'), require('../model/PredictionsTokens'));
  } else {
    // Browser globals (root is window)
    if (!root.PredictionEnterpriseApi) {
      root.PredictionEnterpriseApi = {};
    }
    root.PredictionEnterpriseApi.PredictionsApi = factory(root.PredictionEnterpriseApi.ApiClient, root.PredictionEnterpriseApi.Predictions, root.PredictionEnterpriseApi.PredictionsAccuracy, root.PredictionEnterpriseApi.PredictionsTokens);
  }
}(this, function(ApiClient, Predictions, PredictionsAccuracy, PredictionsTokens) {
  'use strict';

  /**
   * Predictions service.
   * @module api/PredictionsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new PredictionsApi. 
   * @alias module:api/PredictionsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Accuracy
     * Returns a list of accuracies of our predictions, calculated daily.  We measure prediction accuracy by analyzing whether or not our prediction target has been reached once within the time frame we assign; this simulates a limit order getting filled at our predicted price. 
     * @param {String} from predictions accuracy data from, e.g 2018-09-01.
     * @param {Object} opts Optional parameters
     * @param {String} opts.limit results limit, default 100
     * @param {String} opts.sort sort by timestamp, e.g. &#x60;sort&#x3D;timestamp:ASC&#x60;, default sort DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PredictionsAccuracy} and HTTP response
     */
    this.predictionsAccuracyGetWithHttpInfo = function(from, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling predictionsAccuracyGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': from,
        'limit': opts['limit'],
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
      var returnType = PredictionsAccuracy;

      return this.apiClient.callApi(
        '/predictions/accuracy', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Accuracy
     * Returns a list of accuracies of our predictions, calculated daily.  We measure prediction accuracy by analyzing whether or not our prediction target has been reached once within the time frame we assign; this simulates a limit order getting filled at our predicted price. 
     * @param {String} from predictions accuracy data from, e.g 2018-09-01.
     * @param {Object} opts Optional parameters
     * @param {String} opts.limit results limit, default 100
     * @param {String} opts.sort sort by timestamp, e.g. &#x60;sort&#x3D;timestamp:ASC&#x60;, default sort DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PredictionsAccuracy}
     */
    this.predictionsAccuracyGet = function(from, opts) {
      return this.predictionsAccuracyGetWithHttpInfo(from, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Predictions
     * Returns a list of token price predictions for the given symbol and given date. 
     * @param {String} symbol token symbol, e.g. &#x60;ETH&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts._date date of prediction, e.g &#x60;2018-09-01&#x60;. If not specified, predictions for today are returned.
     * @param {Boolean} opts.latest Retrieve only the latest prediction for the given date, default false
     * @param {String} opts.limit results limit, default 100
     * @param {String} opts.sort sort by timestamp, e.g. &#x60;sort&#x3D;timestamp:ASC&#x60;, default sort DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Predictions} and HTTP response
     */
    this.predictionsGetWithHttpInfo = function(symbol, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'symbol' is set
      if (symbol === undefined || symbol === null) {
        throw new Error("Missing the required parameter 'symbol' when calling predictionsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'symbol': symbol,
        'date': opts['_date'],
        'latest': opts['latest'],
        'limit': opts['limit'],
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
      var returnType = Predictions;

      return this.apiClient.callApi(
        '/predictions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Predictions
     * Returns a list of token price predictions for the given symbol and given date. 
     * @param {String} symbol token symbol, e.g. &#x60;ETH&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts._date date of prediction, e.g &#x60;2018-09-01&#x60;. If not specified, predictions for today are returned.
     * @param {Boolean} opts.latest Retrieve only the latest prediction for the given date, default false
     * @param {String} opts.limit results limit, default 100
     * @param {String} opts.sort sort by timestamp, e.g. &#x60;sort&#x3D;timestamp:ASC&#x60;, default sort DESC
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Predictions}
     */
    this.predictionsGet = function(symbol, opts) {
      return this.predictionsGetWithHttpInfo(symbol, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Tokens
     * Returns an array of token symbols we are currently issuing predictions for.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PredictionsTokens} and HTTP response
     */
    this.predictionsTokensGetWithHttpInfo = function() {
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
      var returnType = PredictionsTokens;

      return this.apiClient.callApi(
        '/predictions/tokens', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Tokens
     * Returns an array of token symbols we are currently issuing predictions for.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PredictionsTokens}
     */
    this.predictionsTokensGet = function() {
      return this.predictionsTokensGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
