import type { Request, Response } from 'express';
import dayjs from 'dayjs';
import { parse } from 'url';
import { parseInt } from 'lodash';
import { create, update } from '../../../../mock/_common_mock';
import mockjs from 'mockjs';

const { Random } = mockjs;
// mock tableListDataSource
const genList = (current: number, pageSize: number) => {
  console.log('category init data');
  const tableListDataSource: API.CategoryListItem[] = [];

  for (let i = 0; i < pageSize; i += 1) {
    const index: number = (current - 1) * 10 + i;

    const firstId: number = index + 1;
    const firstEnabled = Random.boolean();
    const secondCategoryCount = Random.natural(1, 5);
    const secondList: API.CategoryListItem[] = [];
    for (let j = 0; j < secondCategoryCount; j += 1) {
      const secondId: number = current * 100000 + j + 1;
      secondList.push({
        id: secondId,
        parentId: firstId,
        level: 2,
        key: `${secondId}`,
        name: `二级分类_ ${Random.ctitle()}`,
        enabled: firstEnabled ? Random.boolean() : false,
        createdAt: dayjs()
          .add(-(pageSize - i), 'day')
          .valueOf(),
      });
    }

    tableListDataSource.push({
      id: firstId,
      parentId: 0,
      level: 1,
      key: `${firstId}`,
      name: `一级分类_ ${Random.ctitle()}`,
      enabled: firstEnabled,
      createdAt: dayjs()
        .add(-(pageSize - i), 'day')
        .valueOf(),
      children: secondList,
    });
  }
  // tableListDataSource.reverse();
  return tableListDataSource;
};
// 源数据
const tableListDataSource = genList(1, 15);

/**
 * 拷贝数据
 */
function cloneDataSource() {
  const data: API.CategoryListItem[] = [];
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
    API.CategoryListItem & {
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

function findFirstList(req: Request, res: Response) {
  const firstDataList: API.SelectOption[] = [];
  tableListDataSource.forEach((it) => {
    firstDataList.push({
      label: it.name,
      value: it.id,
    });
  });

  res.send({ success: true, data: firstDataList });
}

/**
 * 更新 开启/禁用
 * @param req
 * @param res
 * @param tableListDataSource
 */
function updateEnabledFunc(req: Request, res: Response) {
  const { id, parentId, enabled } = req.body;
  if (parentId === 0) {
    const item = tableListDataSource.filter((it) => it.id === id)[0];
    item.enabled = !enabled;
  } else {
    const parentItem = tableListDataSource.filter((it) => it.id === parentId)[0];
    const childItem = parentItem.children?.filter((it) => it.id === id)[0];
    if (childItem) childItem.enabled = !enabled;
  }
  res.send({ status: 'ok', success: true });
}

/**
 * 删除或批量删除分类
 * @param req
 * @param res
 */
function removeFunc(req: Request, res: Response) {
  const items = req.body as API.CategoryListItem[];
  console.log('mock update', items, items.length);
  if (items.length > 0) {
    items.forEach((item) => {
      if (item.parentId === 0) {
        const itemIndex = tableListDataSource.findIndex((it) => it.id === item.id);
        tableListDataSource.splice(itemIndex, 1);
      } else {
        const itemIndex = tableListDataSource.findIndex((it) => it.id === item.parentId);
        const childItemIndex = tableListDataSource[itemIndex].children?.findIndex(
          (it) => it.id === item.id,
        );
        if (childItemIndex) {
          tableListDataSource[itemIndex].children?.splice(childItemIndex, 1);
        }
      }
    });
  }
  res.send({ status: 'ok', success: true });
}

export default {
  // GET POST 可省略
  'GET /api/category': findPage,

  // 获取一级分类
  'GET /api/category/first': findFirstList,

  'POST /api/category': (req: Request, res: Response) =>
    create<API.CategoryListItem>(req, res, tableListDataSource),

  'PUT /api/category': (req: Request, res: Response) =>
    update<API.CategoryListItem>(req, res, tableListDataSource),

  'PUT /api/category/enabled': updateEnabledFunc,

  'DELETE /api/category': removeFunc,
};
