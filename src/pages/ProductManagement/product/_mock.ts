import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';
import mockjs from 'mockjs';
import { create, remove, update, updateEnabled } from '../../../../mock/_common_mock';
// mock tableListDataSource
const { Random } = mockjs;
const ProductImages: string[] = [
  'https://img10.360buyimg.com/seckillcms/s500x500_jfs/t1/187950/40/15614/86418/610264e5Efa9fd905/69a51b998c66d047.png',
  'https://img12.360buyimg.com/seckillcms/s500x500_jfs/t1/177068/25/5425/124485/60a90f9fEc01a8294/90e74b4deeea25d9.jpg',
  'https://img11.360buyimg.com/seckillcms/s500x500_jfs/t1/177276/17/1591/132603/608b7c9bE36559d2d/732ab5321bfce7b9.jpg',
  'https://img12.360buyimg.com/seckillcms/s500x500_jfs/t1/195176/3/5062/152583/60ae00e2E7536f7a0/801c43c934a1ff79.jpg',
  'https://img11.360buyimg.com/seckillcms/s500x500_jfs/t1/126612/27/19192/121768/60b0c808Ea87aa7a2/03e4e63758fe67f9.jpg',
  'https://img13.360buyimg.com/seckillcms/s500x500_jfs/t1/141409/17/4795/79798/5f2cbc4eE90c909be/75c827e7ea831725.jpg',

  'https://img10.360buyimg.com/babel/s300x300_jfs/t1/187715/26/2616/135983/609a3cbdE115032c2/b01c7d3491840958.jpg.webp',
  'https://img30.360buyimg.com/babel/s300x300_jfs/t1/148058/40/2464/166042/5f068c06Eade49c6f/d06b0c32a3ee82b1.jpg.webp',
  'https://img11.360buyimg.com/babel/s300x300_jfs/t1/15784/37/17910/142599/60f52106E7736f692/1aa219187b4c8388.jpg.webp',
  'https://img13.360buyimg.com/babel/s300x300_jfs/t1/168929/5/5555/184021/601bd571Ee0b7cf49/cff33cffb8b82aab.jpg.webp',
  'https://img20.360buyimg.com/babel/s300x300_jfs/t1/172763/16/6050/59208/6082391aEf8d86f48/ba24a3a66ce0fc61.jpg.webp',
  'https://img20.360buyimg.com/babel/s300x300_jfs/t16975/127/2018214094/360609/527dfa3f/5ae29e45N69562223.jpg.webp',
  'https://img10.360buyimg.com/babel/s300x300_jfs/t1/156176/16/17769/110324/605955daEf5a3d613/69d8762c34721678.jpg.webp',
  'https://img11.360buyimg.com/babel/s300x300_jfs/t1/143478/17/17954/187091/5fd321b5E2aa90966/ada39cec7bf7827b.jpg.webp',
];
const genList = (current: number, pageSize: number) => {
  console.log('product init data');
  const tableListDataSource: API.ProductListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;
    tableListDataSource.push({
      id: index + 1,
      key: `${index + 1}`,
      name: `??????_ ${mockjs.mock('@ctitle()')}`,
      image: ProductImages[Random.natural(0, ProductImages.length)],
      description: `????????????_${mockjs.mock('@cparagraph(1, 3)')}`,
      unit: '???',
      originalPrice: mockjs.mock('@natural(10000,20000)'),
      retailPrice: mockjs.mock('@natural(20000,30000)'),
      enabled: Random.boolean(),
      createdAt: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    });
  }
  // tableListDataSource.reverse();
  return tableListDataSource;
};
// ?????????
export const tableListDataSource = genList(1, 15);

/**
 * ????????????
 */
function cloneDataSource() {
  const data: API.ProductListItem[] = [];
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
    API.ProductListItem & {
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
  // GET POST ?????????
  'GET /api/product': findPage,

  'POST /api/product': (req: Request, res: Response) =>
    create<API.ProductListItem>(req, res, tableListDataSource),

  'PUT /api/product': (req: Request, res: Response) =>
    update<API.ProductListItem>(req, res, tableListDataSource),

  'PUT /api/product/enabled': (req: Request, res: Response) =>
    updateEnabled<API.ProductListItem>(req, res, tableListDataSource),

  'DELETE /api/product': (req: Request, res: Response) =>
    remove<API.ProductListItem>(req, res, tableListDataSource),
};
