# PredictionEnterpriseApi.FundApi

All URIs are relative to *https://dev-enterprise-prediction.herokuapp.com/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fundTradesGet**](FundApi.md#fundTradesGet) | **GET** /fund/trades | Prediction Fund trade data
[**fundTradesTokensGet**](FundApi.md#fundTradesTokensGet) | **GET** /fund/trades/tokens | Traded tokens


<a name="fundTradesGet"></a>
# **fundTradesGet**
> FundTrades fundTradesGet(opts)

Prediction Fund trade data

Prediction Fund trade data

### Example
```javascript
var PredictionEnterpriseApi = require('prediction_enterprise_api');
var defaultClient = PredictionEnterpriseApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionEnterpriseApi.FundApi();

var opts = { 
  'entry': "entry_example", // String | entry date for trades, e.g 2018-09-01. (only for premium accounts)
  'exit': "exit_example", // String | exit date for trades, e.g 2018-09-01. (only for premium accounts)
  'direction': "direction_example" // String | short/long
};
apiInstance.fundTradesGet(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entry** | **String**| entry date for trades, e.g 2018-09-01. (only for premium accounts) | [optional] 
 **exit** | **String**| exit date for trades, e.g 2018-09-01. (only for premium accounts) | [optional] 
 **direction** | **String**| short/long | [optional] 

### Return type

[**FundTrades**](FundTrades.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fundTradesTokensGet"></a>
# **fundTradesTokensGet**
> [&#39;String&#39;] fundTradesTokensGet()

Traded tokens

Traded tokens

### Example
```javascript
var PredictionEnterpriseApi = require('prediction_enterprise_api');
var defaultClient = PredictionEnterpriseApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionEnterpriseApi.FundApi();
apiInstance.fundTradesTokensGet().then(function(data) {
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

