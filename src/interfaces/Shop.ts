export interface ShopApiResponse<T> {
  count: number
  next: string
  previous: any
  results: T[]
}

export interface Shop {
  id: number
  store: string
  city: string
  division: string
  type_format: number
  loc: number
  size: number
  is_active: boolean
}
