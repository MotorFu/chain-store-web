import React, { useState, useRef } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Modal, Space, Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {
  findStore,
  addStore,
  removeStore,
  updateStore,
  updateStoreEnabled,
} from '@/services/chain-store/AccountApi/store';
import EditForm from './components/EditForm';
import { PaginationConfig } from '@/StoreConst';

const StoreTable: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<API.StoreListItem[]>([]);

  const [currentItem, setCurrentItem] = useState<API.StoreListItem>();

  const columns: ProColumns<API.StoreListItem>[] = [
    {
      title: '门店ID',
      key: 'id',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: '图片',
      key: 'image',
      dataIndex: 'image',
      valueType: 'image',
      hideInSearch: true,
    },
    {
      title: '店名',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '联系电话',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: '地址',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: '状态',
      key: 'enabled',
      dataIndex: 'enabled',
      valueType: 'select',
      initialValue: '0',
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
      hideInSearch: true,
      width: 160,
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

  function updateEnabledFunc(item: API.StoreListItem) {
    Modal.confirm({
      title: '提示',
      content: <div>确定要{item.enabled ? '禁用' : '开启'}门店？</div>,
      onOk: async () => {
        const success = await updateStoreEnabled({ data: item });
        if (success) {
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }
      },
    });
  }

  function removeFunc(item: API.StoreListItem) {
    Modal.confirm({
      title: '提示',
      content: <div>确定要删除【{item.name}】门店？</div>,
      onOk: async () => {
        const success = await removeStore({
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
      <ProTable<API.StoreListItem, API.PageParams>
        pagination={PaginationConfig}
        headerTitle={'headerTitle'}
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
        request={findStore}
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
              await removeStore({ data: selectedRowsState });
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
            success = await updateStore({ data: { ...currentItem, ...value } });
          } else {
            success = await addStore({ data: value });
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

export default StoreTable;
