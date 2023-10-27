export interface Sale {
  date: string;
  sales_type: number;
  sales_units: number;
  sales_units_promo: number;
  sales_rub: number;
  sales_rub_promo: number;
}

export interface SalesData {
  store: string;
  sku: string;
  fact: Sale[];
}

export interface SalesResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
