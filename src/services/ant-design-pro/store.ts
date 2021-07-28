import { request } from 'umi';

export async function findStore(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<{
    data: API.StoreList;
  }>('/api/store', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function updateStore(options?: { [key: string]: any }) {
  return request<API.StoreListItem>('/api/store', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function addStore(options?: { [key: string]: any }) {
  return request<API.StoreListItem>('/api/store', {
    method: 'POST',
    ...(options || {}),
  });
}

export async function removeAccount(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/store', {
    method: 'DELETE',
    ...(options || {}),
  });
}
