interface Store {
  store: string;
  city: string;
  division: string;
  type_format: number;
  loc: number;
  size: number;
  is_active: 0 | 1;
}

export default interface StoreResponse {
  data: Store[];
}
