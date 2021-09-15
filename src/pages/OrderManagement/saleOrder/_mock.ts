import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';
import { tableListDataSource as StoreDataSource } from '../../AccountManagement/store/_mock';
import { tableListDataSource as AccountDataSource } from '../../AccountManagement/account/_mock';
import { OrderPayTypeOptions } from '../../../StoreConst';
import { Random } from 'mockjs';

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  console.log('saleOrder init data');
  const tableListDataSource: API.SaleOrderListItem[] = [];

  const CashierDataSource = AccountDataSource.filter(
    (it) => it.type === 3 && it.storeRelation?.role === 3,
  );
  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;

    let storeItem: API.StoreListItem = { id: 0, name: '', createdAt: 0 };
    const cashierItem = CashierDataSource[Random.natural(0, CashierDataSource.length - 1)];

    StoreDataSource.forEach((store) => {
      if (store.id === cashierItem.storeRelation?.storeId) {
        storeItem = store;
      }
    });
    tableListDataSource.push({
      id: index + 1,
      key: `${index + 1}`,
      storeId: storeItem.id,
      storeName: storeItem.name,
      orderNo: Random.datetime('yyyyMMddHHmmss') + Random.natural(100000, 999999),
      totalPrice: Random.natural(100, 50000),
      accountId: cashierItem.id,
      accountName: cashierItem.username,
      payType: OrderPayTypeOptions[Random.natural(1, 3)].value,
      payTime: dayjs()
        .add(-(pageSize - i), 'day')
        .add(50, 'second')
        .valueOf(),
      createdAt: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

// 源数据
export const tableListDataSource = genList(1, 100);

/**
 * 拷贝数据
 */
function cloneDataSource() {
  const data: API.SaleOrderListItem[] = [];
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
    API.SaleOrderListItem & {
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
  'GET /api/saleOrder': findPage,

  'DELETE /api/saleOrder/{id}': (req: Request, res: Response) => {
    res.send({ status: 'ok', success: true });
  },
};
