# PredictionApi.FundApi

All URIs are relative to *https://enterprise.prediction.vc/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fundTradesGet**](FundApi.md#fundTradesGet) | **GET** /funds/trades | Prediction Fund trade data
[**fundTradesTokensGet**](FundApi.md#fundTradesTokensGet) | **GET** /funds/trades/tokens | Traded tokens


<a name="fundsSimfundPairsGet"></a>
# **fundsSimfundPairsGet**
> fundsSimfundPairsGet(opts)

Prediction Fund trade data

### Example
```javascript
const PredictionApi = require('prediction-api')

const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = "YOUR API KEY"

const api = new PredictionApi.FundApi()

const opts = {
  'entry': '2018-09-01', // {Date} entry date for trades
  'exit': '2018-09-01', // {Date} exit date for trades
  'direction': 'short' // {String} short/long
}
api.fundsSimfundPairsGet(opts)
  .then(data => {
    console.log('API called successfully. Returned data: ')
    console.log(data)
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

Object with key `data`
#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **String** | tokens traded with | [optional]
**entryDate** | **DateTime** | trade entry datetime | [optional]
**exitDate** | **DateTime** | trade exit datetime | [optional]
**gain** | **Float** | trade gain percentage | [optional]
**notionalTraded** | **Float** | notional amount traded with | [optional]
**direction** | **String** | short/long | [optional]
**entryValue** | **Float** | value of the token when it entered the portfolio | [optional]
**exitValue** | **Float** | value of the token when it left the portfolio | [optional]


### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="fundsSimfundTradesGet"></a>
# **fundsSimfundTradesGet**
> fundsSimfundTradesGet()

Traded tokens

### Example
```javascript
const PredictionApi = require('prediction_enterprise_api')
const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = 'YOUR API KEY'

const apiInstance = new PredictionApi.FundApi()
apiInstance.fundsSimfundTradesGet()
  .then(data => {
    console.log('API called successfully. Returned data: ')
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })

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
