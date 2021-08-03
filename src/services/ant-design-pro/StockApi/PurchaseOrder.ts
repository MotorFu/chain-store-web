import { request } from 'umi';

export async function findPurchaseOrder(
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
  return request<API.StorePurchaseOrderList>('/api/store/purchase/order', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function removePurchaseOrder(ids: number[], options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/api/store/purchase/order`, {
    method: 'DELETE',
    data: ids,
    ...(options || {}),
  });
}

export async function findPurchaseOrderItem(
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
  return request<API.StorePurchaseOrderItemList>(`/api/store/purchase/order/${id}`, {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function removePurchaseOrderItem(itemIds: number[], options?: { [key: string]: any }) {
  return request<Record<string, any>>(`/api/store/purchase/orderItem`, {
    method: 'DELETE',
    data: itemIds,
    ...(options || {}),
  });
}
