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

  type BaseItem = {
    id: number;
    key: string;
    enabled?: boolean;
    createdAt: number;
    createdBy?: number;
    lastModifiedAt?: number;
    lastModifiedBy?: number;
  };

  type AccountListItem = {
    username: string;
    password?: string;
    icon?: string;
    phone?: string;
    type: number;
    storeRelation?: {
      storeId: number;
      role: number;
    };
  } & BaseItem;

  type StoreList = {
    data?: StoreListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type StoreListItem = {
    name: string;
    image?: string;
    phone?: string;
    address?: string;
  } & BaseItem;

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
    createdAt?: number;
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
    createdAt?: number;
  } & BaseItem;

  type CategoryList = {
    data?: CategoryListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type CategoryListItem = {
    name: string;
  } & BaseItem;

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
    createdAt?: number;
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

    createdAt?: number;
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
    createdAt?: number;
  };

  // 门店商品采购
  type StorePurchaseOrderList = {
    data?: StorePurchaseOrderListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  export type PurchaseOrderStatus = 1 | 2 | 3; // 1:草稿，2：待采购，3：采购完成

  type StorePurchaseOrderListItem = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    orderNo: string;
    status: PurchaseOrderStatus;
    createdAt?: number;
  };

  type StorePurchaseOrderItemList = {
    data?: StorePurchaseOrderItemListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type StorePurchaseOrderItemListItem = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    productId: number;
    storeProductId: number;
    storeProductSkuInfo: string;
    planStock: number;
    actualStock: number;
    costPrice: number;
  };

  // 门店商品入库
  type StoreStockInOrderList = {
    data?: StoreStockInOrderListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  export type StockInOrderStatus = 1 | 2 | 3; // 1:草稿，2：待入库，3：已入库
  export type StockInOrderSource = 1 | 2; // 1：手动入库，2：采购入库

  type StoreStockInOrderListItem = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    orderNo: string;
    source: StockInOrderSource;
    sourceOrderId: number; //1:草稿，2：待入库，3：已入库
    status: StockInOrderStatus;
    createdAt?: number;
  };

  type StoreStockInOrderItemList = {
    data?: StoreStockInOrderItemListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type StoreStockInOrderItemListItem = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    productId: number;
    storeProductId: number;
    storeProductSkuInfo: string;
    stock: number;
    costPrice: number;
    updatedTime: number;
  };

  // 门店商品盘点
  type StoreTakeStockOrderList = {
    data?: StoreTakeStockOrderListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  export type TakeStockOrderStatus = 1 | 2 | 3; // 1:草稿，2：盘点中，3：盘点完成

  type StoreTakeStockOrderListItem = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    orderNo: string;
    productCount: number;
    status: TakeStockOrderStatus;
    createdAt?: number;
  };

  type StoreTakeStockOrderItemList = {
    data?: StoreTakeStockOrderItemListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  export type TakeStockResult = 1 | 2; // 1：报损，2：报溢

  type StoreTakeStockOrderItemListItem = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    productId: number;
    storeProductId: number;
    storeProductSkuInfo: string;
    actualStock: number;
    takeStock: number;
    result: TakeStockResult;
    result_stock: number;
    updatedTime: number;
  };

  // 操作日志
  type StoreStockLogList = {
    data?: StoreStockLogItemList[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  export type StockLogType = 1 | 2 | 3 | 4; // 1：出库，2：入库,3：报损，4：报溢

  type StoreStockLogItemList = {
    id: number;
    key?: string;
    storeId: number;
    storeName: string;
    productId: number;
    storeProductId: number;
    storeProductSkuInfo: string;
    type: StockLogType;
    stock: number;
    createdAt: number;
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
