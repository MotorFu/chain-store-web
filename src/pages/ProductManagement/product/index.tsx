import React, { useState, useRef } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Modal, Space, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {
  findProduct,
  addProduct,
  removeProduct,
  updateProduct,
  updateProductEnabled,
} from '@/services/chain-store/ProductApi';
import EditForm from './components/EditForm';
import { PaginationConfig } from '@/StoreConst';

const AccountTable: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<API.ProductListItem[]>([]);

  const [currentItem, setCurrentItem] = useState<API.ProductListItem>();

  const columns: ProColumns<API.ProductListItem>[] = [
    {
      title: 'ID',
      key: 'id',
      dataIndex: 'id',
      sorter: true,
      width: 80,
    },
    {
      title: '图片',
      key: 'image',
      dataIndex: 'image',
      valueType: 'image',
      hideInSearch: true,
    },
    {
      title: '名称',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '描述',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: '计量单位',
      key: 'unit',
      dataIndex: 'unit',
      width: 80,
      hideInSearch: true,
    },
    {
      title: '状态',
      key: 'enabled',
      dataIndex: 'enabled',
      valueType: 'select',
      initialValue: '0',
      width: 80,
      valueEnum: {
        0: {
          text: '不限',
          status: '',
        },
        true: {
          text: '已启用',
          checked: true,
          status: '',
        },
        false: {
          text: '已禁用',
          checked: false,
          status: '',
        },
      },
      render: (dom, item) => {
        if (item.enabled) {
          return <Tag color="success">已启用</Tag>;
        }
        return <Tag color="error">已禁用</Tag>;
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
      width: 160,
      hideInSearch: true,
      render: (_, item) => (
        <Space size="middle">
          <a
            onClick={() => {
              setCurrentItem(item);
              setShowEditModal(true);
            }}
            key="edit"
          >
            编辑
          </a>
          <a key="enabled" onClick={() => updateEnabledFunc(item)}>
            {item.enabled ? '禁用' : '启用'}
          </a>
          <a key="delete" onClick={() => removeFunc(item)}>
            删除
          </a>
        </Space>
      ),
    },
  ];

  function updateEnabledFunc(item: API.ProductListItem) {
    Modal.confirm({
      title: '提示',
      content: <div>确定要{item.enabled ? '禁用' : '开启'}商品？</div>,
      onOk: async () => {
        const success = await updateProductEnabled({ data: item });
        if (success) {
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }
      },
    });
  }

  function removeFunc(item: API.ProductListItem) {
    Modal.confirm({
      title: '提示',
      content: <div>确定要删除【{item.name}】商品？</div>,
      onOk: async () => {
        const success = await removeProduct({
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
      <ProTable<API.ProductListItem, API.PageParams>
        pagination={PaginationConfig}
        headerTitle={''}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              if (!showEditModal) {
                setCurrentItem(undefined);
                setShowEditModal(true);
              }
            }}
          >
            <PlusOutlined /> 添加
          </Button>,
        ]}
        request={findProduct}
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
              await removeProduct({ data: selectedRowsState });
              setSelectedRows([]);
              actionRef.current?.reloadAndRest?.();
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
      <EditForm
        onSubmit={async (value) => {
          let success;
          if (value.id != null) {
            success = await updateProduct({ data: { ...currentItem, ...value } });
          } else {
            success = await addProduct({ data: value });
          }

          if (success) {
            setCurrentItem(undefined);
            setShowEditModal(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          setCurrentItem(undefined);
          setShowEditModal(false);
        }}
        visible={showEditModal}
        values={currentItem || {}}
      />
    </PageContainer>
  );
};

export default AccountTable;
