export const PaginationConfig = {
  pageSize: 10,
};

// 账号类型
export enum AccountTypeEnum {
  SUPER_ADMIN = 1,
  NORMAL_ADMIN = 2,
  STORE_ADMIN = 3,
}

// 门店角色
export enum StoreRoleEnum {
  SUPER_ADMIN = 1, // 门店超级管理员
  NORMAL_ADMIN = 2, // 门店普通管理员
  CASHIER = 3, // 门店收银员
}

export enum OrderPayTypeEnum {
  CASH = 1,
  ALIPAY = 2,
  WECHAT = 3,
}

export const OrderPayTypeOptions = [
  {
    value: 0,
    label: '不限',
  },
  {
    value: 1,
    label: '现金',
    color: '#ff7b7b',
  },
  {
    value: 2,
    label: '支付宝',
    color: '#03a6fc',
  },
  {
    value: 3,
    label: '微信',
    color: '#62e367',
  },
];

export const PurchaseStatusOptions = [
  {
    value: 0,
    label: '不限',
  },
  {
    value: 1,
    label: '草稿',
    color: '#ccc',
  },
  {
    value: 2,
    label: '待采购',
    color: '#03a6fc',
  },
  {
    value: 3,
    label: '采购完成',
    color: '#28c522',
  },
];

export const StockInTypeOptions = [
  {
    value: 0,
    label: '不限',
  },
  {
    value: 1,
    label: '普通入库',
  },
  {
    value: 2,
    label: '采购入库',
  },
];

export const StockInStatusOptions = [
  {
    value: 0,
    label: '不限',
  },
  {
    value: 1,
    label: '草稿',
    color: '#ccc',
  },
  {
    value: 2,
    label: '待入库',
    color: '#03a6fc',
  },
  {
    value: 3,
    label: '入库完成',
    color: '#28c522',
  },
];

export const TakeStockStatusOptions = [
  {
    value: 0,
    label: '不限',
  },
  {
    value: 1,
    label: '草稿',
    color: '#ccc',
  },
  {
    value: 2,
    label: '待盘点',
    color: '#03a6fc',
  },
  {
    value: 3,
    label: '盘点完成',
    color: '#28c522',
  },
];

// export default {
//   AccountTypeEnum,
//   StoreRoleEnum
// }
