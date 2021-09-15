import React, { useState, useRef } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Dropdown, Menu, Space, Tag, Modal } from 'antd';
import { PlusOutlined, RightOutlined } from '@ant-design/icons';

import {
  findAccount,
  addAccount,
  updateAccount,
  updateAccountEnabled,
  removeAccount,
} from '@/services/chain-store/AccountApi';
import EditForm from './components/EditForm';
import { PaginationConfig } from '@/StoreConst';

// import {tableListDataSource as StoreDataSource} from "@/pages/AccountManagement/store/_mock";

const AccountTable: React.FC = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const actionRef = useRef<ActionType>();

  const [selectedRowsState, setSelectedRows] = useState<API.AccountListItem[]>([]);

  const [currentItem, setCurrentItem] = useState<API.AccountListItem>();

  const columns: ProColumns<API.AccountListItem>[] = [
    {
      title: '账号ID',
      key: 'id',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: '头像',
      key: 'icon',
      dataIndex: 'icon',
      valueType: 'avatar',
    },
    {
      title: '账号',
      key: 'username',
      dataIndex: 'username',
    },
    {
      title: '手机号',
      key: 'phone',
      dataIndex: 'phone',
    },
    {
      title: '账号类型',
      key: 'type',
      dataIndex: 'type',
      valueEnum: {
        0: {
          text: '不限',
          status: '',
        },
        1: {
          text: '超级管理员',
          status: '',
        },
        2: {
          text: '系统管理员',
          status: '',
        },
        3: {
          text: '门店管理员',
          status: '',
        },
      },
      render: (dom, item) => {
        if (item.type === 1) {
          return (
            <Tag color="#108ee9" key={item.key}>
              超级管理员
            </Tag>
          );
        }
        if (item.type === 2) {
          return (
            <Tag color="cyan" key={item.key}>
              系统管理员
            </Tag>
          );
        }
        return (
          <Tag color="purple" key={item.key}>
            门店管理员
          </Tag>
        );
      },
    },
    {
      title: '门店名称',
      key: 'storeRelation.storeName',
      dataIndex: 'storeRelation.storeName',
      hideInSearch: true,
      render: (_, item) => {
        return item.storeRelation ? item.storeRelation.storeName : '-';
      },
    },
    {
      title: '门店角色',
      key: 'storeRelation.role',
      dataIndex: 'storeRelation.role',
      hideInSearch: true,
      render: (_, item) => {
        switch (item.storeRelation?.role) {
          case 1:
            return '门店超级管理员';
          case 2:
            return '门店普通管理员';
          case 3:
            return '门店收银员';
          default:
            return '-';
        }
      },
    },
    {
      title: '账号状态',
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
      title: '创建时间',
      dataIndex: 'createdAt',
      valueType: 'dateRange',
      hideInTable: true,
      search: {
        transform: (value) => {
          return {
            startTime: value[0],
            endTime: value[1],
          };
        },
      },
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
          <Dropdown
            key="more"
            trigger={['click']}
            overlay={
              <Menu>
                <Menu.Item key={0}>修改密码</Menu.Item>
                {item.type === 1 ? null : (
                  <Menu.Item key={1} onClick={() => removeFunc(item)}>
                    删除账号
                  </Menu.Item>
                )}
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

  function updateEnabledFunc(item: API.AccountListItem) {
    Modal.confirm({
      title: '提示',
      content: <div>确定要{item.enabled ? '禁用' : '开启'}账号？</div>,
      onOk: async () => {
        const success = await updateAccountEnabled(item);
        if (success) {
          if (actionRef.current) {
            actionRef.current.reload();
          }
        }
      },
    });
  }

  function removeFunc(item: API.AccountListItem) {
    Modal.confirm({
      title: '提示',
      content: <div>确定要删除【{item.username}】账号？</div>,
      onOk: async () => {
        const success = await removeAccount({
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
      <ProTable<API.AccountListItem, API.PageParams>
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
                setShowEditModal(true);
                setCurrentItem(undefined);
              }
            }}
          >
            <PlusOutlined /> 添加
          </Button>,
        ]}
        request={findAccount}
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
              await removeAccount({ data: selectedRowsState });
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
          console.log('edit item values--->', value);
          let result;
          if (value.id) {
            result = await updateAccount({ data: { ...currentItem, ...value } });
          } else {
            result = await addAccount({ data: value });
          }
          if (result) {
            setShowEditModal(false);
            setCurrentItem(undefined);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          setShowEditModal(false);
          setCurrentItem(undefined);
        }}
        visible={showEditModal}
        values={currentItem || {}}
      />
    </PageContainer>
  );
};

export default AccountTable;
