# PredictionEnterpriseApi.HistoricalApi

All URIs are relative to *https://dev-enterprise-prediction.herokuapp.com/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**historicalGet**](HistoricalApi.md#historicalGet) | **GET** /historical | Historical Data


<a name="historicalGet"></a>
# **historicalGet**
> Historical historicalGet(symbol, from, to, cols, opts)

Historical Data

Historical Data

### Example
```javascript
var PredictionEnterpriseApi = require('prediction_enterprise_api');
var defaultClient = PredictionEnterpriseApi.ApiClient.instance;

// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

var apiInstance = new PredictionEnterpriseApi.HistoricalApi();

var symbol = "symbol_example"; // String | token symbol, e.g. `ETH`

var from = "from_example"; // String | historical data from this date, e.g `2018-09-01`.

var to = "to_example"; // String | historical data till this date, e.g `2018-09-01`.

var cols = "cols_example"; // String | Comma separted list of columns to return. e.g. `cols=usdPrice,volume,timeStamp` Available columns are listed in the table above.

var opts = { 
  'limit': "limit_example" // String | results limit, default 10
};
apiInstance.historicalGet(symbol, from, to, cols, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol, e.g. &#x60;ETH&#x60; | 
 **from** | **String**| historical data from this date, e.g &#x60;2018-09-01&#x60;. | 
 **to** | **String**| historical data till this date, e.g &#x60;2018-09-01&#x60;. | 
 **cols** | **String**| Comma separted list of columns to return. e.g. &#x60;cols&#x3D;usdPrice,volume,timeStamp&#x60; Available columns are listed in the table above. | 
 **limit** | **String**| results limit, default 10 | [optional] 

### Return type

[**Historical**](Historical.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

