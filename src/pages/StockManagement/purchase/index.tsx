import React, { useState, useRef } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Drawer, Modal, Space, Tag } from 'antd';

import {
  findPurchaseOrder,
  removePurchaseOrder,
} from '@/services/chain-store/StockApi/PurchaseOrder';
import ProDescriptions, { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import { PaginationConfig, PurchaseStatusOptions } from '@/StoreConst';
import { PlusOutlined } from '@ant-design/icons';

const SaleOrderTable: React.FC = () => {
  const [showViewDrawer, setShowViewDrawer] = useState(false);
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<API.StorePurchaseOrderListItem[]>([]);

  const [currentItem, setCurrentItem] = useState<API.StorePurchaseOrderListItem>();

  const columns: ProColumns<API.StorePurchaseOrderListItem>[] = [
    {
      title: 'ID',
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
      title: '门店',
      key: 'storeName',
      dataIndex: 'storeName',
    },
    {
      title: '商品数',
      key: 'productCount',
      dataIndex: 'productCount',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (_, item) => {
        const statusOption = PurchaseStatusOptions[item.status];
        return <Tag color={statusOption.color}>{statusOption.label}</Tag>;
      },
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
            key="view"
          >
            查看
          </a>
          <a onClick={() => {}} key="edit">
            编辑
          </a>
          <a key="delete" onClick={() => removeFunc(item)}>
            删除
          </a>
        </Space>
      ),
    },
  ];

  function removeFunc(item: API.StorePurchaseOrderListItem) {
    Modal.confirm({
      title: '提示',
      content: <div>确定要删除【{item.orderNo}】采购单？</div>,
      onOk: async () => {
        const success = await removePurchaseOrder({
          data: [item],
        });
        if (success) {
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }
      },
    });
  }
  return (
    <PageContainer>
      <ProTable<API.StorePurchaseOrderListItem, API.PageParams>
        pagination={PaginationConfig}
        headerTitle={''}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary" key="primary" onClick={() => {}}>
            <PlusOutlined /> 添加
          </Button>,
        ]}
        request={findPurchaseOrder}
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
              await removePurchaseOrder(selectedRowsState.map((it) => it.id));
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
          <ProDescriptions<API.StorePurchaseOrderListItem>
            column={2}
            title={'采购单详情'}
            request={async () => ({
              data: currentItem || {},
            })}
            params={{
              id: currentItem?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.StorePurchaseOrderListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default SaleOrderTable;
