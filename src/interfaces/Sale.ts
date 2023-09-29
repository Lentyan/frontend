interface SalesFact {
  date: string;
  sales_type: number;
  sales_units: number;
  sales_units_promo: number;
  sales_rub: number;
  sales_rub_promo: number;
}

interface StoreSalesData {
  store: string;
  sku: string;
  fact: SalesFact[];
}

export default interface StoreSalesResponse {
  data: StoreSalesData[];
}
