export interface SkuResponse<T> {
  count: number
  next: string
  previous: any
  results: T[]
}

export interface Sku {
  id: number
  sku: string
  group: string
  category: string
  subcategory: string
  uom: number
}
