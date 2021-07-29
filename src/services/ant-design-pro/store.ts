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
  options?: { [key: string]: any },
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
  console.log('options', options);
  return request<API.StoreListItem>('/api/store', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function addStore(body: API.StoreListItem, options?: { [key: string]: any }) {
  console.log('options', options);
  return request<API.StoreListItem>('/api/store', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function removeStore(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/store', {
    method: 'DELETE',
    ...(options || {}),
  });
}
