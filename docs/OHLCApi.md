# PredictionEnterpriseApi.OHLCApi

All URIs are relative to *https://enterprise.prediction.vc/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ohlcGet**](OHLCApi.md#ohlcGet) | **GET** /ohlc | OHLC Data


<a name="ohlcGet"></a>
# **ohlcGet**
> Ohlc ohlcGet(symbol, from, to, opts)

OHLC Data

OHLC Data

### Example
```javascript
var PredictionEnterpriseApi = require('prediction_enterprise_api');
var defaultClient = PredictionEnterpriseApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionEnterpriseApi.OHLCApi();

var symbol = "symbol_example"; // String | token symbol, e.g. ETH

var from = "from_example"; // String | historical data from this date, e.g 2018-09-01.

var to = "to_example"; // String | historical data till this date, e.g 2018-09-01.

var opts = { 
  'limit': "limit_example" // String | results limit, default 10
};
apiInstance.ohlcGet(symbol, from, to, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol, e.g. ETH | 
 **from** | **String**| historical data from this date, e.g 2018-09-01. | 
 **to** | **String**| historical data till this date, e.g 2018-09-01. | 
 **limit** | **String**| results limit, default 10 | [optional] 

### Return type

[**Ohlc**](Ohlc.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

