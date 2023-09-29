interface Forecast {
  [key: string]: number;
}

interface StoreForecast {
  store: string;
  sku: string;
  forecast_date: string;
  forecast: Forecast;
}

export default interface StoreForecastResponse {
  data: StoreForecast[];
}
