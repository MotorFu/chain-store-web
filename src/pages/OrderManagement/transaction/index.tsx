import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Drawer, Space } from 'antd';

import { findSaleOrderTransaction } from '@/services/ant-design-pro/saleOrderTransaction';
import ProDescriptions, { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';

const SaleOrderTable: React.FC = () => {
  const [showViewDrawer, setShowViewDrawer] = useState(false);
  const actionRef = useRef<ActionType>();

  const [currentItem, setCurrentItem] = useState<API.SaleOrderTransactionListItem>();

  const columns: ProColumns<API.SaleOrderTransactionListItem>[] = [
    {
      title: '订单ID',
      key: 'id',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: '订单号',
      key: 'storeOrderNo',
      dataIndex: 'storeOrderNo',
    },
    {
      title: '门店',
      key: 'storeName',
      dataIndex: 'storeName',
    },
    {
      title: '收银员名称',
      key: 'accountName',
      dataIndex: 'accountName',
    },
    {
      title: '支付金额',
      key: 'payAmount',
      dataIndex: 'payAmount',
    },
    {
      title: '支付类型',
      key: 'payType',
      dataIndex: 'payType',
    },
    {
      title: '支付时间',
      key: 'payTime',
      dataIndex: 'payTime',
      valueType: 'dateTime',
    },
    {
      title: '创建时间',
      key: 'createdTime',
      dataIndex: 'createdTime',
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
      <ProTable<API.SaleOrderTransactionListItem, API.PageParams>
        headerTitle={'headerTitle'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        request={findSaleOrderTransaction}
        columns={columns}
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
        {currentItem?.storeOrderNo && (
          <ProDescriptions<API.SaleOrderTransactionListItem>
            column={2}
            title={'订单详情'}
            request={async () => ({
              data: currentItem || {},
            })}
            params={{
              id: currentItem?.id,
            }}
            columns={columns as ProDescriptionsItemProps<API.SaleOrderTransactionListItem>[]}
          />
        )}
      </Drawer>
    </PageContainer>
  );
};

export default SaleOrderTable;
