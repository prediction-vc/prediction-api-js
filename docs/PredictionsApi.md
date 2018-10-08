# PredictionEnterpriseApi.PredictionsApi

All URIs are relative to *https://enterprise.prediction.vc/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**predictionsAccuracyGet**](PredictionsApi.md#predictionsAccuracyGet) | **GET** /predictions/accuracy | Accuracy
[**predictionsGet**](PredictionsApi.md#predictionsGet) | **GET** /predictions | Predictions
[**predictionsTokensGet**](PredictionsApi.md#predictionsTokensGet) | **GET** /predictions/tokens | Tokens


<a name="predictionsAccuracyGet"></a>
# **predictionsAccuracyGet**
> PredictionsAccuracy predictionsAccuracyGet(symbol, from, to, opts)

Accuracy

Returns a list of accuracies of our predictions, calculated daily.  We measure prediction accuracy by analyzing whether or not our prediction target has been reached once within the time frame we assign; this simulates a limit order getting filled at our predicted price. 

### Example
```javascript
var PredictionEnterpriseApi = require('prediction_enterprise_api');
var defaultClient = PredictionEnterpriseApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionEnterpriseApi.PredictionsApi();

var symbol = "symbol_example"; // String | token symbol, e.g. ETH

var from = "from_example"; // String | predictions accuracty data from, e.g 2018-09-01.

var to = "to_example"; // String | predictions accuracy data to, e.g 2018-09-05.

var opts = { 
  'limit': "limit_example" // String | results limit, default 10
};
apiInstance.predictionsAccuracyGet(symbol, from, to, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol, e.g. ETH | 
 **from** | **String**| predictions accuracty data from, e.g 2018-09-01. | 
 **to** | **String**| predictions accuracy data to, e.g 2018-09-05. | 
 **limit** | **String**| results limit, default 10 | [optional] 

### Return type

[**PredictionsAccuracy**](PredictionsAccuracy.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predictionsGet"></a>
# **predictionsGet**
> Predictions predictionsGet(symbol, opts)

Predictions

Returns a list of predictions for the given symbol and given date. 

### Example
```javascript
var PredictionEnterpriseApi = require('prediction_enterprise_api');
var defaultClient = PredictionEnterpriseApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionEnterpriseApi.PredictionsApi();

var symbol = "symbol_example"; // String | token symbol, e.g. `ETH`

var opts = { 
  '_date': "_date_example", // String | date of prediction, e.g `2018-09-01`. If not specified, predictions for today are returned.
  'latest': true, // Boolean | Retrieve only the latest prediction for the given date, default false
  'limit': "limit_example" // String | results limit, default 10
};
apiInstance.predictionsGet(symbol, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol, e.g. &#x60;ETH&#x60; | 
 **_date** | **String**| date of prediction, e.g &#x60;2018-09-01&#x60;. If not specified, predictions for today are returned. | [optional] 
 **latest** | **Boolean**| Retrieve only the latest prediction for the given date, default false | [optional] 
 **limit** | **String**| results limit, default 10 | [optional] 

### Return type

[**Predictions**](Predictions.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predictionsTokensGet"></a>
# **predictionsTokensGet**
> [&#39;String&#39;] predictionsTokensGet()

Tokens

Returns an array of token symbols we are currently issuing predictions for.

### Example
```javascript
var PredictionEnterpriseApi = require('prediction_enterprise_api');
var defaultClient = PredictionEnterpriseApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionEnterpriseApi.PredictionsApi();
apiInstance.predictionsTokensGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

