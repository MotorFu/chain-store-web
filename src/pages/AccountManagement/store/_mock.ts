import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';
import { Random, mock } from 'mockjs';

const StoreImages: string[] = [
  'https://img2.fr-trading.com/0/2_592_67091_800_600.jpg.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8fMtwaPzUkLKdDdo8dtkMAT0pomCy8WBSg&usqp=CAU',
];
// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  console.log('store init data');
  const tableListDataSource: API.StoreListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;

    tableListDataSource.push({
      id: index + 1,
      key: `${index + 1}`,
      name: `${mock('@ctitle(3,7)')}`,
      image: StoreImages[Random.natural(0, StoreImages.length - 1)],
      phone: `${16688000000 + i}`,
      address: mock('@county(true)'),
      enabled: i % 4 !== 0,
      createdAt: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};
// 源数据
export const tableListDataSource = genList(1, 15);

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

function updateEnabled(req: Request, res: Response) {
  const { id, enabled } = req.body;
  const item = tableListDataSource.filter((it) => it.id === id)[0];
  item.enabled = !enabled;
  res.send({ status: 'ok', success: true });
}

function remove(req: Request, res: Response) {
  const items = req.body as API.StoreListItem[];
  items.forEach((item) => {
    const itemIndex = tableListDataSource.findIndex((it) => it.id === item.id);
    tableListDataSource.splice(itemIndex, 1);
  });
  res.send({ status: 'ok', success: true });
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
      createdAt: dayjs().valueOf(),
    };
    tableListDataSource.push(item);
    res.send({ status: 'ok', success: true });
  },

  'PUT /api/store/enabled': updateEnabled,

  'DELETE /api/store': remove,
};
