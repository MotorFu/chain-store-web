import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';
import { tableListDataSource as AccountDataSource } from '../../AccountManagement/account/_mock';
import { Random } from 'mockjs';
import { tableListDataSource as StoreDataSource } from '../../AccountManagement/store/_mock';
import { tableListDataSource as PurchaseDataSource } from '../../StockManagement/purchase/_mock';

// mock tableListDataSource

const genList = (current: number, pageSize: number) => {
  console.log('stock in order init data');
  const tableListDataSource: API.StoreStockInOrderListItem[] = [];
  const accountItem = AccountDataSource[Random.natural(0, AccountDataSource.length - 1)];
  let storeItem: API.StoreListItem = { id: 0, name: '', createdAt: 0 };
  StoreDataSource.forEach((store) => {
    if (store.id === accountItem.storeRelation?.storeId) {
      storeItem = store;
    }
  });
  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;

    const item: API.StoreStockInOrderListItem = {
      id: index + 1,
      key: `${index + 1}`,
      storeId: storeItem.id,
      storeName: storeItem.name,
      orderNo: `SIO_${dayjs()
        .add(-(pageSize - i), 'day')
        .format('YYYYMMDDHHmmss')}`,
      source: Random.natural(1, 2),
      productCount: Random.natural(1, 20),
      status: Random.natural(1, 3),
      createdAt: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    };
    if (item.source === 2) {
      item.sourceOrderId = PurchaseDataSource[Random.natural(0, PurchaseDataSource.length - 1)].id;
    }
    tableListDataSource.push(item);
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

// 源数据
const tableListDataSource = genList(1, 100);

/**
 * 拷贝数据
 */
function cloneDataSource() {
  const data: API.StoreStockInOrderListItem[] = [];
  tableListDataSource.forEach((item) => {
    data.push(item);
  });
  return data;
}

function findPage(req: Request, res: Response, u: string) {
  let tempDataSource = cloneDataSource();
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10 } = req.query;
  const params = parse(realUrl, true).query as unknown as API.PageParams &
    API.StoreStockInOrderListItem & {
      sorter: any;
      filter: any;
    };
  if (params.sorter) {
    const sorter = JSON.parse(params.sorter);

    tempDataSource = tempDataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach((key) => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }

  console.log('params----->', params);
  if (params.id) {
    tempDataSource = tempDataSource.filter((data) => data?.id === parseInt(`${params.id}`, 10));
  }
  if (params.orderNo) {
    tempDataSource = tempDataSource.filter((data) => data?.orderNo?.includes(params.orderNo || ''));
  }
  if (params.storeName) {
    tempDataSource = tempDataSource.filter((data) =>
      data?.storeName?.includes(params.storeName || ''),
    );
  }

  const dataSource = [...tempDataSource].slice(
    ((current as number) - 1) * (pageSize as number),
    (current as number) * (pageSize as number),
  );
  const result = {
    data: dataSource,
    total: tempDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.current}`, 10) || 1,
  };

  return res.json(result);
}

export default {
  // GET POST 可省略
  'GET /api/store/stockIn/order': findPage,

  'DELETE /api/store/stockIn/order': (req: Request, res: Response) => {
    res.send({ status: 'ok', success: true });
  },
};
