# PredictionApi.PredictionsApi

All URIs are relative to *https://enterprise.prediction.vc/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**predictionsAccuracyGet**](PredictionsApi.md#predictionsAccuracyGet) | **GET** /predictions/accuracy | Accuracy
[**predictionsGet**](PredictionsApi.md#predictionsGet) | **GET** /predictions | Predictions
[**predictionsTokensGet**](PredictionsApi.md#predictionsTokensGet) | **GET** /predictions/tokens | Tokens


<a name="predictionsAccuracyGet"></a>
# **predictionsAccuracyGet**
>  predictionsAccuracyGet(symbol, from, to, opts)

Accuracy

Returns a list of accuracies of our predictions, calculated daily.  We measure prediction accuracy by analyzing whether or not our prediction target has been reached once within the time frame we assign; this simulates a limit order getting filled at our predicted price.

### Example
```javascript
const PredictionApi = require('prediction_enterprise_api')
const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

const apiInstance = new PredictionApi.PredictionsApi()

const symbol = 'ETH' // String | token symbol, e.g. ETH
const from = '2018-09-01' // Date | predictions accuracy data from
const to = '2018-09-01' // Date | predictions accuracy data to
const opts = {
  'limit': '10' // String | results limit, default 10
}
apiInstance.predictionsAccuracyGet(symbol, from, to, opts)
  .then(data => {
    console.log('API called successfully. Returned data: ' + data);
  })
  .catch(error => {
    console.error(error)
  })

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol, e.g. ETH |
 **from** | **Date**| predictions accuracty data from, e.g 2018-09-01. |
 **to** | **Date**| predictions accuracy data to, e.g 2018-09-05. |
 **limit** | **String**| results limit, default 10 | [optional]

### Return type

Object with key `data`
#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy** | **Float** | Average accuracy over given tokens | [optional]
**tokens** | **String** | Tokens the predictions were made on | [optional]
**timestamp** | **Datetime** | time of the prediction accuracy calculation | [optional]

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predictionsGet"></a>
# **predictionsGet**
>  predictionsGet(symbol, opts)

Predictions

Returns a list of predictions for the given symbol and given date.

### Example
```javascript
const PredictionApi = require('prediction_enterprise_api')
const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

const apiInstance = new PredictionApi.PredictionsApi()
const symbol = 'ETH' // String | token symbol

const opts = {
  '_date': '2018-09-01', // String | date of prediction. If not specified, predictions for today are returned.
  'latest': true, // Boolean | Retrieve only the latest prediction for the given date, default false
  'limit': '10' // String | results limit, default 10
}
apiInstance.predictionsGet(symbol, opts)
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
 **symbol** | **String**| token symbol, e.g. &#x60;ETH&#x60; |
 **_date** | **Date**| date of prediction, e.g &#x60;2018-09-01&#x60;. If not specified, predictions for today are returned. | [optional]
 **latest** | **Boolean**| Retrieve only the latest prediction for the given date, default false | [optional]
 **limit** | **String**| results limit, default 10 | [optional]

### Return type

Object with key `data`
#### Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usdPrice** | **Float** | token price at the moment of prediction in USD | [optional]
**direction** | **String** | short or long | [optional]
**_3day** | **Float** | 3 day prediction | [optional]
**target** | **Boolean** | if the 3day prediction came true | [optional]
**_7day** | **Float** | 7 day prediction | [optional]
**target7** | **Boolean** | if the 7day prediction came true | [optional]
**_14day** | **Float** | 14 day prediction | [optional]
**timestamp** | **Datetime** | time of the prediction | [optional]
### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predictionsTokensGet"></a>
# **predictionsTokensGet**
>  predictionsTokensGet()

Tokens

Returns an array of token symbols we are currently issuing predictions for.

### Example
```javascript
const PredictionApi = require('prediction_enterprise_api')
const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

const apiInstance = new PredictionApi.PredictionsApi()
apiInstance.predictionsTokensGet()
  .then(data => {
    console.log('API called successfully. Returned data: ' + data)
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
