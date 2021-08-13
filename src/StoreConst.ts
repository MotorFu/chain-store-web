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
  },
  {
    value: 2,
    label: '支付宝',
  },
  {
    value: 3,
    label: '微信',
  },
];

// export default {
//   AccountTypeEnum,
//   StoreRoleEnum
// }
