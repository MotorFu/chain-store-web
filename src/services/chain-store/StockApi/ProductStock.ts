import { request } from 'umi';

export async function findProductStock(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  sorter?: any,
  filter?: any,
  options?: { [key: string]: any },
) {
  return request<API.StoreProductStockList>('/api/store/product/stock', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}
