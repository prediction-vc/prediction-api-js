# prediction_enterprise_api

We are proud to introduce our 1.0.0 version of Prediction Enterprise API.  It is our first step to sharing our data with the world and being more transparent about our predictions, their accuracy and our fund trades and performance.  In the case you are missing some data please drop us a line at enterprise@prediction.vc. We will be happy to answer your questions and implement new features for you.  [Platform FAQ](https://predictionvc.freshdesk.com/support/solutions/)

- API version: 1.0.0
- Package version: 1.0.0

## Installation

```shell
npm install prediction_enterprise_api --save
```

## Getting Started

### Authorization

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### Code sample

```javascript
const PredictionEnterpriseApi = require('prediction_enterprise_api')

const defaultClient = PredictionEnterpriseApi.ApiClient.instance

// Configure API key authorization: Authorization
const Authorization = defaultClient.authentications['Authorization']
Authorization.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix['Authorization'] = "Token"

const api = new PredictionEnterpriseApi.FundApi()

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

## Documentation for API Endpoints

All URIs are relative to *https://enterprise.prediction.vc/api/*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*PredictionEnterpriseApi.FundApi* | [**fundTradesGet**](docs/FundApi.md#fundTradesGet) | **GET** /fund/trades | Prediction Fund trade data
*PredictionEnterpriseApi.FundApi* | [**fundTradesTokensGet**](docs/FundApi.md#fundTradesTokensGet) | **GET** /fund/trades/tokens | Traded tokens
*PredictionEnterpriseApi.HistoricalApi* | [**historicalGet**](docs/HistoricalApi.md#historicalGet) | **GET** /historical | Historical Data
*PredictionEnterpriseApi.OHLCApi* | [**ohlcGet**](docs/OHLCApi.md#ohlcGet) | **GET** /ohlc | OHLC Data
*PredictionEnterpriseApi.PredictionsApi* | [**predictionsAccuracyGet**](docs/PredictionsApi.md#predictionsAccuracyGet) | **GET** /predictions/accuracy | Accuracy
*PredictionEnterpriseApi.PredictionsApi* | [**predictionsGet**](docs/PredictionsApi.md#predictionsGet) | **GET** /predictions | Predictions
*PredictionEnterpriseApi.PredictionsApi* | [**predictionsTokensGet**](docs/PredictionsApi.md#predictionsTokensGet) | **GET** /predictions/tokens | Tokens
