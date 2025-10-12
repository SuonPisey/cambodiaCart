export interface BaseResponse<T = any> {
  status_code: number;
  message?: string;
  result?: T;
}
export interface PaginationResponse<T = any> {
  status_code: number;
  message?: string;
  result?: {
    data: T[];
  };
  page: number;
  size: number;
  total: number;
  pages: number;
}
