import { request } from 'umi';

export async function findProduct(
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
  return request<API.ProductList>('/api/product', {
    method: 'GET',
    params: {
      ...params,
      sorter,
      filter,
    },
    ...(options || {}),
  });
}

export async function updateProduct(options?: { [key: string]: any }) {
  console.log('options', options);
  return request<API.ProductListItem>('/api/product', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function updateProductEnabled(options?: { [key: string]: any }) {
  return request<API.ProductListItem>('/api/product/enabled', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function addProduct(options?: { [key: string]: any }) {
  console.log('options', options);
  return request<API.ProductListItem>('/api/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

export async function removeProduct(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/product', {
    method: 'DELETE',
    ...(options || {}),
  });
}
