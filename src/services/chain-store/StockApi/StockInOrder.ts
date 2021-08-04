import { request } from 'umi';

export async function findStockInOrder(
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
  return request<API.StoreStockInOrderList>('/api/store/stockIn/order', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function removeStockInOrder(ids: number[], options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/api/store/stockIn/order`, {
    method: 'DELETE',
    data: ids,
    ...(options || {}),
  });
}

export async function findStockInOrderItem(
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
  return request<API.StoreStockInOrderItemList>(`/api/store/stockIn/order/${id}`, {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function removeStockInOrderItem(itemIds: number[], options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/api/store/stockIn/orderItem`, {
    method: 'DELETE',
    data: itemIds,
    ...(options || {}),
  });
}
