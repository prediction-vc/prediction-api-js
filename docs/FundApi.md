# PredictionApi.FundApi

All URIs are relative to *https://enterprise.prediction.vc/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fundTradesGet**](FundApi.md#fundTradesGet) | **GET** /fund/trades | Prediction Fund trade data
[**fundTradesTokensGet**](FundApi.md#fundTradesTokensGet) | **GET** /fund/trades/tokens | Traded tokens


<a name="fundTradesGet"></a>
# **fundTradesGet**
> fundTradesGet(opts)

Prediction Fund trade data

### Example
```javascript
const PredictionApi = require('prediction-api')

const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix['Authorization'] = "Token"

const api = new PredictionApi.FundApi()

const opts = {
  'entry': '2018-09-01', // {Date} entry date for trades
  'exit': '2018-09-01', // {Date} exit date for trades
  'direction': 'short' // {String} short/long
}
api.fundTradesGet(opts)
  .then(data => {
    console.log('API called successfully. Returned data: ' + data)
  })
  .catch(error => {
    console.error(error)
  })

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entry** | **Date**| entry date for trades, e.g 2018-09-01.| [optional]
 **exit** | **Date**| exit date for trades, e.g 2018-09-01. | [optional]
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
var PredictionApi = require('prediction_enterprise_api');
var defaultClient = PredictionApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionApi.FundApi();
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
