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
    id: number;
    key?: string;
    name: string;
    image?: string;
    phone?: string;
    address?: string;
    enabled: boolean;
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
    access?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type ProductList = {
    data?: ProductListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type ProductListItem = {
    id: number;
    key?: string;
    name: string;
    image?: string;
    description?: string;
    unit?: string;
    originalPrice: number;
    retailPrice: number;
    enabled: boolean;
    createdTime?: number;
  };

  type CategoryList = {
    data?: CategoryListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type CategoryListItem = {
    id: number;
    key?: string;
    name: string;
    enabled: boolean;
    createdTime?: number;
  };

  type SaleOrderList = {
    data?: SaleOrderListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type SaleOrderListItem = {
    id: number;
    key?: string;
    orderNo: string;
    totalPrice: number;
    storeId: number;
    storeName: string;
    accountId: number;
    accountName: string;
    createdTime?: number;
    payTime?: number;
    payType?: number;
    SaleOrderItem?: [];
  };

  type SaleOrderTransactionList = {
    data?: SaleOrderTransactionListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type SaleOrderTransactionListItem = {
    id: number;
    key?: string;
    storeOrderId: number;
    storeOrderNo: string;
    transactionNo: string;
    storeId: number;
    storeName: string;
    accountId: number;
    accountName: string;
    payType: number;
    payAmount: number;
    payTime: number;

    createdTime?: number;
  };

  //订单明细
  type SaleOrderItem = {
    id: number;
    key?: string;
    storeProductId?: number;
    storeProductSkuId?: number;
    storeProductName?: string;
    storeProductSkuInfo?: string;
    price?: number;
    count?: number;
  };

  //门店商品库存
  type StoreProductStockList = {
    data?: StoreProductStockListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type StoreProductStockListItem = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    productId: number;
    storeProductId: number;
    storeProductSkuInfo: string;
    price: number;
    stock: number;
    createdTime?: number;
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
