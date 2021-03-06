import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';

import { Random, mock } from 'mockjs';
import { AccountTypeEnum } from '../../../StoreConst';

import { create, update, updateEnabled, remove } from '../../../../mock/_common_mock';

import { tableListDataSource as StoreDataSource } from '../store/_mock';

const AccountIcons: string[] = [
  'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  'https://pic.feizl.com/upload2007/allimg/210227/13151924U-0.jpg',
  'https://p.qqan.com/up/2021-2/20212201335364831.jpg',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'https://pic.jiadown.com/upload/image/202012/2020061409134817239.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT4YFJKSelGZbbIeSQNA7Xt4u59SEvhVcWhA&usqp=CAU',
  'https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/d4/a2/4c/d4a24c9b-06d1-66df-06af-abcfed3e594f/source/512x512bb.jpg',
  'https://i.pinimg.com/474x/eb/d0/02/ebd002f69ccba8c11d7a35aef69a820e.jpg',
  'https://i02piccdn.sogoucdn.com/2bc81f961306802d',
  'https://images.liqucn.com/img/h24/h39/img_localize_61556803b7d62382719231e994975359_400x400.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGudQGDQO6AzHAyaXZj4XtUWDdULk4teFuKQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGb3fxzqCxmspQ3FQyyNeR35T8SP2l1NYyLA&usqp=CAU',
];
// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  console.log('account init data');
  const tableListDataSource: API.AccountListItem[] = [];

  const sId = Random.increment();
  tableListDataSource.push({
    id: sId,
    key: `${sId}`,
    username: `superAdmin`,
    icon: AccountIcons[0],
    phone: '18616352386',
    enabled: true,
    type: AccountTypeEnum.SUPER_ADMIN.valueOf(),
    createdAt: dayjs().valueOf(),
  });

  for (let i = 0; i < 3; i += 1) {
    const nId = Random.increment();
    tableListDataSource.push({
      id: nId,
      key: `${nId}`,
      username: `admin_ ${Random.word(5, 10)}`,
      icon: AccountIcons[Random.natural(0, AccountIcons.length - 1)],
      phone: mock(/^1[3456789]\d{9}$/),
      enabled: Random.boolean(),
      type: AccountTypeEnum.NORMAL_ADMIN.valueOf(),
      createdAt: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
    });
  }

  // ???????????????????????????????????????????????????

  StoreDataSource.forEach((store) => {
    const ssId = Random.increment();
    // ?????????????????????
    tableListDataSource.push({
      id: ssId,
      key: `${ssId}`,
      username: `store_ ${Random.word(5, 10)}`,
      icon: AccountIcons[Random.natural(0, AccountIcons.length - 1)],
      phone: mock(/^1[3456789]\d{9}$/),
      enabled: true,
      type: AccountTypeEnum.STORE_ADMIN.valueOf(),
      createdAt: dayjs().valueOf(),
      storeRelation: {
        storeId: store.id,
        storeName: store.name,
        role: 1,
      },
    });
    const snId = Random.increment();
    // ?????????????????????
    tableListDataSource.push({
      id: snId,
      key: `${snId}`,
      username: `store_ ${Random.word(5, 10)}`,
      icon: AccountIcons[Random.natural(0, AccountIcons.length - 1)],
      phone: mock(/^1[3456789]\d{9}$/),
      enabled: true,
      type: AccountTypeEnum.STORE_ADMIN.valueOf(),
      createdAt: dayjs().valueOf(),
      storeRelation: {
        storeId: store.id,
        storeName: store.name,
        role: 2,
      },
    });

    const scId = Random.increment();
    // ???????????????
    tableListDataSource.push({
      id: scId,
      key: `${scId}`,
      username: `store_ ${Random.word(5, 10)}`,
      icon: AccountIcons[Random.natural(0, AccountIcons.length - 1)],
      phone: mock(/^1[3456789]\d{9}$/),
      enabled: true,
      type: AccountTypeEnum.STORE_ADMIN.valueOf(),
      createdAt: dayjs().valueOf(),
      storeRelation: {
        storeId: store.id,
        storeName: store.name,
        role: 3,
      },
    });
  });

  // for (let i = 0; i < pageSize; i += 1) {
  //   const index: number = (current - 1) * 10 + i;
  //
  //   const storeItem = StoreDataSource[Random.natural(0, StoreDataSource.length - 1)];
  //   tableListDataSource.push({
  //     id: index + 7,
  //     key: `${index + 7}`,
  //     username: `store_ ${Random.word(5, 10)}`,
  //     icon: AccountIcons[Random.natural(0, AccountIcons.length - 1)],
  //     phone: mock(/^1[3456789]\d{9}$/),
  //     enabled: Random.boolean(5, pageSize, false),
  //     type: AccountTypeEnum.STORE_ADMIN.valueOf(),
  //     createdAt: dayjs()
  //       .add(-(pageSize - i), 'day')
  //       .valueOf(),
  //     storeRelation: {
  //       storeId: storeItem.id,
  //       role: Random.natural(2, 3),
  //     },
  //   });
  // }
  // tableListDataSource.reverse();
  return tableListDataSource;
};
// ?????????
export const tableListDataSource = genList(1, 20);

/**
 * ????????????
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
      (data) => data.createdAt >= startTime && data.createdAt < endTime,
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
  'GET /api/account': findPage,

  'POST /api/account': (req: Request, res: Response) =>
    create<API.AccountListItem>(req, res, tableListDataSource),

  'PUT /api/account': (req: Request, res: Response) =>
    update<API.AccountListItem>(req, res, tableListDataSource),

  'PUT /api/account/enabled': (req: Request, res: Response) =>
    updateEnabled<API.AccountListItem>(req, res, tableListDataSource),

  'DELETE /api/account': (req: Request, res: Response) =>
    remove<API.AccountListItem>(req, res, tableListDataSource),
};
