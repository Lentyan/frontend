interface Product {
  sku: string;
  group: string;
  category: string;
  subcategory: string;
  uom: string;
}

export default interface ProductResponse {
  data: Product[];
}
