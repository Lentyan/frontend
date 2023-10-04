export interface Statistics {
  store: string;
  productGroup: string;
  category: string;
  subcategory: string;
  productName: string;
  uom: string;
  actualVolumeAmount: string;
  forecastVolumeAmount: string;
  differenceVolumeAmount: string;
  actualSales: number;
  forecastSales: number;
  differenceSales: number;
  wape: number;
}
