import { request } from 'umi';

export async function findAccount(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.AccountListItem>('/api/account', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function updateAccount(options?: { [key: string]: any }) {
  return request<API.AccountListItem>('/api/account', {
    method: 'PUT',
    ...(options || {}),
  });
}

export async function addAccount(options?: { [key: string]: any }) {
  return request<API.AccountListItem>('/api/account', {
    method: 'POST',
    ...(options || {}),
  });
}

export async function removeAccount(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/account', {
    method: 'DELETE',
    ...(options || {}),
  });
}

export async function findAccountStoreRelationByAccount(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  accountId?: number,
  options?: { [key: string]: any },
) {
  return request<{
    data: API.AccountList;
  }>(`/api/account/${accountId}/store/relation`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/**
 * 添加账号与门店关联关系
 * @param options
 */
export async function addAccountStoreRelation(options?: { [key: string]: any }) {
  return request<API.AccountStoreRelationItem>('/api/account/store/relation', {
    method: 'POST',
    ...(options || {}),
  });
}

/**
 * 添加账号与门店关联关系
 * @param options
 */
export async function removeAccountStoreRelation(options?: { [key: string]: any }) {
  return request<API.AccountStoreRelationItem>('/api/account/store/relation', {
    method: 'DELETE',
    ...(options || {}),
  });
}
