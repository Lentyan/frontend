export interface ShopApiResponse<T> {
  count: number
  next: string | null
  previous: string | null
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
