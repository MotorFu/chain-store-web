import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';

// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  console.log('account init data');
  const tableListDataSource: API.AccountListItem[] = [];

  tableListDataSource.push({
    id: 1,
    key: '1',
    username: `superAdmin`,
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
    phone: '18616352386',
    enabled: true,
    type: 1,
    createdTime: dayjs().valueOf(),
  });

  tableListDataSource.push({
    id: 2,
    key: '2',
    username: `sysAdmin`,
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
    phone: '18616352386',
    enabled: true,
    type: 2,
    createdTime: dayjs().valueOf(),
  });
  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;

    tableListDataSource.push({
      id: index + 3,
      key: `${index + 3}`,
      username: `account_ ${index}`,
      icon: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      ][i % 2],
      phone: `${18888000000 + i}`,
      enabled: i % 4 !== 0,
      type: 3,
      createdTime: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};
// 源数据
const tableListDataSource = genList(1, 20);

/**
 * 拷贝数据
 */
function cloneDataSource() {
  const data: API.AccountListItem[] = [];
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
    API.AccountListItem & {
      sorter: any;
      filter: any;
      startTime?: string;
      endTime?: string;
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

  console.log('params----->', params, typeof params.enabled);
  if (params.id) {
    tempDataSource = tempDataSource.filter((data) => data?.id === parseInt(`${params.id}`, 10));
  }
  if (params.username) {
    tempDataSource = tempDataSource.filter((data) =>
      data?.username?.includes(params.username || ''),
    );
  }
  if (params.phone) {
    tempDataSource = tempDataSource.filter((data) => data?.phone?.includes(params.phone || ''));
  }
  if (params.enabled && (String(params.enabled) === 'true' || String(params.enabled) === 'false')) {
    tempDataSource = tempDataSource.filter(
      (data) => (data?.enabled ? 'true' : 'false') === String(params.enabled),
    );
  }
  if (params.type && (params.type as number) !== 0) {
    tempDataSource = tempDataSource.filter((data) => data?.type === params.type);
  }
  if (params.startTime && params.endTime) {
    const startTime = dayjs(params.startTime).valueOf();
    const endTime = dayjs(params.endTime).valueOf() + 24 * 3600 * 1000;
    tempDataSource = tempDataSource.filter(
      (data) => data.createdTime >= startTime && data.createdTime < endTime,
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
  'GET /api/account': findPage,

  'POST /api/account': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user', success: true });
  },

  'PUT /api/account': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user', success: true });
  },
};
