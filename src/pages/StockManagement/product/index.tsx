import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Drawer, Space } from 'antd';

import { findProductStock } from '@/services/chain-store/StockApi/ProductStock';
import ProDescriptions, { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import { PaginationConfig } from '@/StoreConst';

const SaleOrderTable: React.FC = () => {
  const [showViewDrawer, setShowViewDrawer] = useState(false);
  const actionRef = useRef<ActionType>();

  const [currentItem, setCurrentItem] = useState<API.StoreProductStockListItem>();

  const columns: ProColumns<API.StoreProductStockListItem>[] = [
    {
      title: 'ID',
      key: 'productId',
      dataIndex: 'productId',
      sorter: true,
    },
    {
      title: '图片',
      key: 'productImage',
      dataIndex: 'productImage',
      valueType: 'image',
      hideInSearch: true,
    },
    {
      title: '商品名',
      key: 'productName',
      dataIndex: 'productName',
    },
    {
      title: '门店',
      key: 'storeName',
      dataIndex: 'storeName',
    },
    {
      title: '库存',
      key: 'stock',
      dataIndex: 'stock',
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
      <ProTable<API.StoreProductStockListItem, API.PageParams>
        pagination={PaginationConfig}
        headerTitle={''}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        request={findProductStock}
        columns={columns}
        rowSelection={false}
      />

      <Drawer
        width={600}
        visible={showViewDrawer}
        onClose={() => {
          setCurrentItem(undefined);
          setShowViewDrawer(false);
        }}
        closable={false}
      >
        {currentItem?.id && (
          <ProDescriptions<API.StoreProductStockListItem>
            column={2}
            title={'商品库存详情'}
            request={async () => ({
              data: currentItem || {},
            })}
            params={{
              id: currentItem?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.StoreProductStockListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default SaleOrderTable;
