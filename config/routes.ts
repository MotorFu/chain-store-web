export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/account',
    name: '账号管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/account/page',
        name: '账号列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/account/store-page',
        name: '门店列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/product',
    name: '商品管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/product/page',
        name: '商品列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/product/category-page',
        name: '分类列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/order',
    name: '订单管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/order/page',
        name: '商品列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/stock',
    name: '库存管理',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/stock/page',
        name: '商品库存列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stock/purchase-order-page',
        name: '采购单列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stock/stock-in-order-page',
        name: '入库单列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stock/take-stock-order-page',
        name: '盘点单列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/stat',
    name: '数据统计',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/stat/product',
        name: '商品统计',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stat/order',
        name: '订单统计',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stat/stock',
        name: '库存统计',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
