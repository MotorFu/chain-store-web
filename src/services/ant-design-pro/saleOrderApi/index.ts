import { request } from 'umi';

export async function findSaleOrder(
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
  return request<API.SaleOrderList>('/api/saleOrder', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function removeSaleOrder(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/saleOrder', {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function findSaleOrderTransactionLog(
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
  return request<API.SaleOrderTransactionList>('/api/saleOrder/transactionLog', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}
