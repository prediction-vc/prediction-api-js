# PredictionApi.OHLCApi

All URIs are relative to *https://enterprise.prediction.vc/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ohlcGet**](OHLCApi.md#ohlcGet) | **GET** /ohlc | OHLC Data


<a name="ohlcGet"></a>
# **ohlcGet**
> ohlcGet(symbol, from, to, opts)

OHLC Data

### Example
```javascript
const PredictionApi = require('prediction_enterprise_api')
const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

const apiInstance = new PredictionApi.OHLCApi()

const symbol = 'ETH' // String | token symbol
const from = '2018-09-01' // Date | historical data from this date
const to = '2018-09-01' // Date | historical data till this date
const opts = {
  'limit': '10' // String | results limit, default 10
}
apiInstance.ohlcGet(symbol, from, to, opts)
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
 **symbol** | **String**| token symbol, e.g. ETH |
 **from** | **String**| historical data from this date, e.g 2018-09-01. |
 **to** | **String**| historical data till this date, e.g 2018-09-01. |
 **limit** | **String**| results limit, default 10 | [optional]

### Return type

Object with key `data`
#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**open** | **Object** | open price in USD | [optional]
**high** | **Object** | high price in USD | [optional]
**low** | **Object** | low price in USD | [optional]
**close** | **Object** | close price in USD | [optional]
**volume** | **Object** | token volume for the past minute | [optional]
**timestamp** | **Object** | datetime | [optional]


### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
