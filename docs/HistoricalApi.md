# PredictionApi.HistoricalApi

All URIs are relative to *https://enterprise.prediction.vc/api/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**historicalGet**](HistoricalApi.md#historicalGet) | **GET** /historical | Historical Data


<a name="historicalGet"></a>
# **historicalGet**
> historicalGet(symbol, from, to, cols, opts)

Historical Data

### Example
```javascript
const PredictionApi = require('prediction_enterprise_api')
const defaultClient = PredictionApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = 'YOUR API KEY'
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

const apiInstance = new PredictionApi.HistoricalApi()

const symbol = 'ETH' // String | token symbol
const from = '2018-09-01' // Date | historical data from this date
const to = '2018-09-01' // Date | historical data till this date
const cols = 'usdPrice,marketCap,timeStamp' // String | Comma separted list of columns to return. Available columns are listed in the table below.
const opts = {
  'limit': 100 // String | results limit, default 10
}
apiInstance.historicalGet(symbol, from, to, cols, opts)
  .then(data => {
    console.log('API called successfully. Returned data: ' + data)
  })
  .catch(error => {
    console.error(error)
  })

```

### Available columns


  | Columns        | Description                                                                                                                                     |
  |------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
  | usdPrice         | token price in USD                                                                                                                              |
  | marketCap        | market capitalization at the time                                                                                                               |
  | volume           | traded token volume in the past 24h                                                                                                             |
  | open             | open interval value                                                                                                                             |
  | high             | high interval value                                                                                                                             |
  | low              | low interval value                                                                                                                              |
  | close            | close interval value                                                                                                                            |
  | _twitter         | twitter data: bio, follower, following, etc.                                                                                                    |
  | _github          | github repo data: watchers, stargazers, fork_count, open_issues, activity, etc.                                                                 |
  | _facebook        | likes                                                                                                                                           |
  | _metrics         | alexaUsRank, alexaGlobalRank, employees, employeesRange, marketCap, raised, annualRevenue, estimatedAnnualRevenue, fiscalYearEnd                |
  | machineRatings   | machineRatingTeam, machineRatingNews, machineRatingEngineering, machineRatingICO, machineRatingSocial                                           |
  | communityRatings | communityRatingTeam, communityRatingProduct, communityRatingVision, communityRatingMarketing, communityRatingTokenomics, communityRatingAverage |


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol** | **String**| token symbol, e.g. &#x60;ETH&#x60; |
 **from** | **String**| historical data from this date, e.g &#x60;2018-09-01&#x60;. |
 **to** | **String**| historical data till this date, e.g &#x60;2018-09-01&#x60;. |
 **cols** | **String**| Comma separted list of columns to return. e.g. &#x60;cols&#x3D;usdPrice,volume,timeStamp&#x60; Available columns are listed in the table above. |
 **limit** | **String**| results limit, default 10 | [optional]

### Return type

Object with key `data`
#### Properties example

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**usdPrice** | **Object** | token price in USD | [optional]
**volume** | **Object** | token volume for the past 24 hours | [optional]
**timestamp** | **Object** | datetime | [optional]

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
