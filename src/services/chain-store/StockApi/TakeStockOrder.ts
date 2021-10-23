import { request } from 'umi';

export async function findTakeStockOrder(
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
  return request<API.StoreTakeStockOrderList>('/api/store/takeStock/order', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function removeTakeStockOrder(options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/api/store/takeStock/order`, {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function findTakeStockItem(
  id: number,
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
  return request<API.StoreTakeStockOrderItemList>(`/api/store/takeStock/order/${id}`, {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function removeTakeStockOrderItem(
  itemIds: number[],
  options?: { [key: string]: any },
) {
  return request<Record<string, any>>(`/api/store/takeStock/orderItem`, {
    method: 'DELETE',
    data: itemIds,
    ...(options || {}),
  });
}
