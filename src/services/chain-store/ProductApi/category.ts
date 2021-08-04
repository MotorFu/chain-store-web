import { request } from 'umi';

export async function findCategory(
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
  return request<API.CategoryList>('/api/category', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function updateCategory(options?: { [key: string]: any }) {
  console.log('options', options);
  return request<API.CategoryListItem>('/api/category', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function addCategory(body: API.CategoryListItem, options?: { [key: string]: any }) {
  console.log('options', options);
  return request<API.CategoryListItem>('/api/category', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function removeCategory(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/category', {
    method: 'DELETE',
    ...(options || {}),
  });
}
