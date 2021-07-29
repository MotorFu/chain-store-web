// @ts-ignore
/* eslint-disable */

declare namespace API {
  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  // 账号列表
  type AccountList = {
    data?: AccountListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type AccountListItem = {
    id: number;
    key: string;
    username: string;
    password?: string;
    icon?: string;
    phone?: string;
    type: number;
    enabled: boolean;
    createdTime: number;
  };

  type StoreList = {
    data?: StoreListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type StoreListItem = {
    id?: number;
    key?: string;
    name?: string;
    icon?: string;
    phone?: string;
    address?: string;
    enabled?: boolean;
    createdTime?: number;
  };

  type AccountRole = 1 | 2; // admin | cashier

  type AccountStoreRelationList = {
    data?: AccountStoreRelationItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
  type AccountStoreRelationItem = {
    id?: number;
    key?: string;
    accountId?: number;
    storeId?: number;
    role?: AccountRoleEnum;
    createdTime?: number;
  };

  type CurrentUser = {
    id?: number;
    username?: string;
    icon?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
