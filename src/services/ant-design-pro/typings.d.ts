// @ts-ignore
/* eslint-disable */

declare namespace API {
  enum AccountTypeEnum {
    SuperAdmin = 1,
    StoreAdmin = 2,
    Cashier = 3,
  }

  enum AccountStatusEnum {
    Normal = 1, //正常
    Freeze = 2, //冻结
  }

  // 账号列表
  type AccountList = {
    name?: string;
    icon?: string;
    phone?: string;
    type?: AccountTypeEnum;
    status?: AccountStatusEnum;
  };

  type AccountListItem = {
    name?: string;
    password?: string;
    icon?: string;
    phone?: string;
  };

  type StoreList = {
    name?: string;
    icon?: string;
    phone?: string;
    address?: string;
    enabled?: boolean;
    createdTime?: number;
  };

  type StoreListItem = {
    name?: string;
    icon?: string;
    phone?: string;
    address?: string;
  };

  enum AccountRoleEnum {
    Admin = 1,
    Cashier = 2,
  }

  type AccountStoreRelationList = {
    accountId?: number;
    storeId?: number;
    role?: AccountRoleEnum;
    createdTime?: number;
  };
  type AccountStoreRelationItem = {
    accountId?: number;
    storeId?: number;
    role?: AccountRoleEnum;
  };

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
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

  type FakeCaptcha = {
    code?: number;
    status?: string;
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
