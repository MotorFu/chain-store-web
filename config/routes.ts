export default [
  {
    layout: false,
    name: 'login',
    path: '/login',
    component: './user/Login',
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },

  {
    path: '/account',
    name: 'account',
    icon: 'user',
    access: 'canAdmin',
    routes: [
      {
        path: '/account/page',
        name: 'list',
        icon: 'smile',
        component: './AccountManagement/account',
      },
      {
        path: '/account/store-page',
        name: 'store-list',
        icon: 'smile',
        component: './AccountManagement/store',
      },
      {
        component: './404',
      },
    ],
  },

  {
    path: '/product',
    name: 'product',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/product/page',
        name: 'list',
        icon: 'smile',
        component: './ProductManagement/product',
      },
      {
        path: '/product/category-page',
        name: 'category-list',
        icon: 'smile',
        component: './ProductManagement/category',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/order',
    name: 'order',
    icon: 'moneyCollect',
    access: 'canAdmin',
    routes: [
      {
        path: '/order/page',
        name: 'list',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/order/transaction-page',
        name: 'transaction-list',
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
    name: 'stock',
    icon: 'gold',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/stock/product-page',
        name: 'product-list',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stock/purchase-order-page',
        name: 'purchase-list',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stock/stock-in-order-page',
        name: 'stock-in-list',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stock/take-stock-order-page',
        name: 'take-stock-list',
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
    name: 'stat',
    icon: 'dashboard',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/stat/product',
        name: 'product',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stat/order',
        name: 'order',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/stat/stock',
        name: 'stock',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
