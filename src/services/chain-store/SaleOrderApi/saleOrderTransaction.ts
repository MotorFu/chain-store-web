import { request } from 'umi';

export async function findSaleOrderTransaction(
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
  return request<API.SaleOrderTransactionList>('/api/saleOrder/transaction', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}
