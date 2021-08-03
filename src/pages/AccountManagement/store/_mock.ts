import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  console.log('store init data');
  const tableListDataSource: API.StoreListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;

    tableListDataSource.push({
      id: index + 1,
      key: `${index + 1}`,
      name: `店名_ ${index}`,
      image: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      ][i % 2],
      phone: `${16688000000 + i}`,
      address: '上海市徐汇区',
      enabled: i % 4 !== 0,
      createdTime: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};
// 源数据
const tableListDataSource = genList(1, 15);

/**
 * 拷贝数据
 */
function cloneDataSource() {
  const data: API.StoreListItem[] = [];
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
    API.StoreListItem & {
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
  if (params.name) {
    tempDataSource = tempDataSource.filter((data) => data?.name?.includes(params.name || ''));
  }
  if (params.phone) {
    tempDataSource = tempDataSource.filter((data) => data?.phone?.includes(params.phone || ''));
  }
  if (params.address) {
    tempDataSource = tempDataSource.filter((data) => data?.address?.includes(params.address || ''));
  }
  if (params.enabled && (String(params.enabled) === 'true' || String(params.enabled) === 'false')) {
    tempDataSource = tempDataSource.filter(
      (data) => (data?.enabled ? 'true' : 'false') === String(params.enabled),
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
  'GET /api/store': findPage,

  // 添加门店
  'POST /api/store': (req: Request, res: Response) => {
    const { image, name, phone, address } = req.body;
    const itemIdList: number[] = [];
    tableListDataSource.forEach((item) => {
      itemIdList.push(item.id);
    });
    const item = {
      id: Math.max(...itemIdList) + 1,
      image: image[0].thumbUrl,
      name,
      phone,
      address,
      enabled: true,
      createdTime: dayjs().valueOf(),
    };
    tableListDataSource.push(item);
    res.send({ status: 'ok', success: true });
  },

  'PUT /api/store': (req: Request, res: Response) => {
    res.send({ status: 'ok', success: true });
  },
};
