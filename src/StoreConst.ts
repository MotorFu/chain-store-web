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

export default {
  AccountTypeEnum,
  StoreRoleEnum,
  PaginationConfig,
};
