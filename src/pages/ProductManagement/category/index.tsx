import React, { useState, useRef } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Dropdown, Menu, Space, Tag } from 'antd';
import { PlusOutlined, RightOutlined } from '@ant-design/icons';

import {
  findCategory,
  addCategory,
  removeCategory,
  updateCategory,
} from '@/services/chain-store/ProductApi/category';
import EditForm from './components/EditForm';
import { PaginationConfig } from '@/StoreConst';

const AccountTable: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<API.CategoryListItem[]>([]);

  const [currentItem, setCurrentItem] = useState<API.CategoryListItem>();

  const columns: ProColumns<API.CategoryListItem>[] = [
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
          <a key="enabled">{item.enabled ? '禁用' : '启用'}</a>
          <Dropdown
            key="more"
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item key={0}>修改密码</Menu.Item>
                <Menu.Item key={1}>所属门店</Menu.Item>
                <Menu.Item key={2}>删除账号</Menu.Item>
              </Menu>
            }
          >
            <a>
              更多
              <RightOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];
  return (
    <PageContainer>
      <ProTable<API.CategoryListItem, API.PageParams>
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
        request={findCategory}
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
              await removeCategory(selectedRowsState);
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
            success = await updateCategory(value);
          } else {
            success = await addCategory(value);
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
