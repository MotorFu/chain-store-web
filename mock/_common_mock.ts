import { Request, Response } from 'express';
import dayjs from 'dayjs';

/**
 * 更新 开启/禁用
 * @param req
 * @param res
 * @param tableListDataSource
 */
export function updateEnabled<T extends API.BaseItem>(
  req: Request,
  res: Response,
  tableListDataSource: T[],
) {
  const { id, enabled } = req.body;
  const item = tableListDataSource.filter((it) => it.id === id)[0];
  item.enabled = !enabled;
  res.send({ status: 'ok', success: true });
}

/**
 * 删除
 * @param req
 * @param res
 * @param tableListDataSource
 */
export function remove<T extends API.BaseItem>(
  req: Request,
  res: Response,
  tableListDataSource: T[],
) {
  const items = req.body as T[];
  console.log('mock update', items);
  if (items.length > 0) {
    items.forEach((item) => {
      const itemIndex = tableListDataSource.findIndex((it) => it.id === item.id);
      tableListDataSource.splice(itemIndex, 1);
    });
  }
  res.send({ status: 'ok', success: true });
}

/**
 * 创建
 * @param req
 * @param res
 * @param tableListDataSource
 * @param attach
 */
export function create<T extends API.BaseItem>(
  req: Request,
  res: Response,
  tableListDataSource: T[],
  attach?: T,
) {
  const item = req.body as T;
  console.log('mock create ', item);
  const itemIdList: number[] = [];
  tableListDataSource.forEach((it) => {
    itemIdList.push(it.id);
  });
  item.id = Math.max(...itemIdList) + 1;
  item.key = String(item.id);
  item.enabled = true;
  item.createdAt = dayjs().valueOf();

  tableListDataSource.push({
    ...item,
    ...attach,
  });
  res.send({ status: 'ok', success: true });
}

/**
 * 更新
 * @param req
 * @param res
 * @param tableListDataSource
 */
export function update<T extends API.BaseItem>(
  req: Request,
  res: Response,
  tableListDataSource: T[],
) {
  const item = req.body as T;
  item.lastModifiedAt = dayjs().valueOf();
  console.log('mock update', item);
  const itemIndex = tableListDataSource.findIndex((it) => it.id === item.id);
  tableListDataSource[itemIndex] = item;
  res.send({ status: 'ok', success: true });
}
