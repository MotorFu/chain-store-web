import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';
// import { PayTypes } from '@/services/SysConst';

export const PayTypes: number[] = [1, 2, 3];

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  console.log('saleOrder init data');
  const tableListDataSource: API.SaleOrderTransactionListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;

    tableListDataSource.push({
      id: index + 1,
      key: `${index + 1}`,
      storeId: index + 1,
      storeName: `店名_${index + 1}`,
      storeOrderId: index + 1,
      storeOrderNo: dayjs()
        .add(-(pageSize - i), 'day')
        .format('YYYYMMDDHHmmss'),
      transactionNo: dayjs()
        .add(-(pageSize - i), 'day')
        .format('YYYYMMDDHHmmss'),
      accountId: 1,
      accountName: `收银员_${(index % 3) + 1}`,
      payType: PayTypes[Math.ceil(Math.random() * 2) + 1],
      payAmount: 10,
      payTime: dayjs()
        .add(-(pageSize - i), 'day')
        .add(10, 'second')
        .valueOf(),
      createdTime: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    });
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
  const data: API.SaleOrderTransactionListItem[] = [];
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
    API.SaleOrderTransactionListItem & {
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
  if (params.transactionNo) {
    tempDataSource = tempDataSource.filter((data) =>
      data?.transactionNo?.includes(params.transactionNo || ''),
    );
  }
  if (params.storeOrderNo) {
    tempDataSource = tempDataSource.filter((data) =>
      data?.storeOrderNo?.includes(params.storeOrderNo || ''),
    );
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
  'GET /api/saleOrder/transaction': findPage,
};
