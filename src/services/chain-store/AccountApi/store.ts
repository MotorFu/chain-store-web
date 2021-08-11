import { request } from 'umi';

export async function findStore(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  sorter?: any,
  filter?: any,
  options?: Record<string, any>,
) {
  return request<API.StoreList>('/api/store', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
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

export async function updateStoreEnabled(options?: { [key: string]: any }) {
  return request<API.StoreListItem>('/api/store/enabled', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function addStore(options?: { [key: string]: any }) {
  return request<API.StoreListItem>('/api/store', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function removeStore(options?: { [key: string]: any }) {
  console.log('removeStore options--->', options);
  return request<Record<string, any>>('/api/store', {
    method: 'DELETE',
    ...(options || {}),
  });
}
