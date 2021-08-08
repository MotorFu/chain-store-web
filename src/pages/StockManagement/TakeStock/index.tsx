import React, { useState, useRef } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Drawer, Space } from 'antd';

import {
  findTakeStockOrder,
  removeTakeStockOrder,
} from '@/services/chain-store/StockApi/TakeStockOrder';
import ProDescriptions, { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import { PaginationConfig } from '@/StoreConst';

const SaleOrderTable: React.FC = () => {
  const [showViewDrawer, setShowViewDrawer] = useState(false);
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<API.StoreTakeStockOrderListItem[]>([]);

  const [currentItem, setCurrentItem] = useState<API.StoreTakeStockOrderListItem>();

  const columns: ProColumns<API.StoreTakeStockOrderListItem>[] = [
    {
      title: '订单ID',
      key: 'id',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: '订单号',
      key: 'orderNo',
      dataIndex: 'orderNo',
    },

    {
      title: '盘点商品数',
      key: 'productCount',
      dataIndex: 'productCount',
    },
    {
      title: '门店',
      key: 'storeName',
      dataIndex: 'storeName',
    },
    {
      title: '创建时间',
      key: 'createdAt',
      dataIndex: 'createdAt',
      valueType: 'dateTime',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '操作',
      key: 'option',
      dataIndex: 'option',
      hideInSearch: true,
      hideInDescriptions: true,
      render: (_, item) => (
        <Space size="middle">
          <a
            onClick={() => {
              setCurrentItem(item);
              setShowViewDrawer(true);
            }}
            key="edit"
          >
            查看
          </a>
        </Space>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.StoreTakeStockOrderListItem, API.PageParams>
        pagination={PaginationConfig}
        headerTitle={'headerTitle'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        request={findTakeStockOrder}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              <span>已选中{selectedRowsState.reduce((pre, item) => pre + item.id!, 0)} 个账号</span>
            </div>
          }
        >
          <Button
            onClick={async () => {
              console.log('selectedRowsState--->', selectedRowsState);
              await removeTakeStockOrder(selectedRowsState.map((it) => it.id));
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}

      <Drawer
        width={600}
        visible={showViewDrawer}
        onClose={() => {
          setCurrentItem(undefined);
          setShowViewDrawer(false);
        }}
        closable={false}
      >
        {currentItem?.orderNo && (
          <ProDescriptions<API.StoreTakeStockOrderListItem>
            column={2}
            title={'盘点单详情'}
            request={async () => ({
              data: currentItem || {},
            })}
            params={{
              id: currentItem?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.StoreTakeStockOrderListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default SaleOrderTable;
