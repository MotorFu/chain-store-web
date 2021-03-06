import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Drawer, Space, Tag } from 'antd';

import { findSaleOrderTransaction } from '@/services/chain-store/SaleOrderApi/saleOrderTransaction';
import ProDescriptions, { ProDescriptionsItemProps } from '@ant-design/pro-descriptions';
import { OrderPayTypeOptions, PaginationConfig } from '@/StoreConst';

const SaleOrderTable: React.FC = () => {
  const [showViewDrawer, setShowViewDrawer] = useState(false);
  const actionRef = useRef<ActionType>();

  const [currentItem, setCurrentItem] = useState<API.SaleOrderTransactionListItem>();

  const columns: ProColumns<API.SaleOrderTransactionListItem>[] = [
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: '交易流水号',
      key: 'transactionNo',
      dataIndex: 'transactionNo',
    },
    {
      title: '支付类型',
      key: 'payType',
      dataIndex: 'payType',
      render: (_, item) => {
        const typeOption = OrderPayTypeOptions[item.payType];
        return <Tag color={typeOption.color}>{typeOption.label}</Tag>;
      },
    },
    {
      title: '支付金额(元)',
      key: 'payAmount',
      dataIndex: 'payAmount',
      render: (_, item) => {
        return (item.payAmount / 100).toFixed(2);
      },
    },
    {
      title: '支付时间',
      key: 'payTime',
      dataIndex: 'payTime',
      valueType: 'dateTime',
    },
    {
      title: '门店',
      key: 'storeName',
      dataIndex: 'storeName',
    },
    {
      title: '收银员',
      key: 'accountName',
      dataIndex: 'accountName',
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
      <ProTable<API.SaleOrderTransactionListItem, API.PageParams>
        pagination={PaginationConfig}
        headerTitle={''}
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
