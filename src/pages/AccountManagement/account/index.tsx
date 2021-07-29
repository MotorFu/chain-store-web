import React, { useState, useRef } from 'react';
import { FooterToolbar, PageContainer } from '@ant-design/pro-layout';
import ProTable, { ActionType, ProColumns } from '@ant-design/pro-table';
import { Button, Dropdown, Menu, Space, Tag } from 'antd';
import { PlusOutlined, RightOutlined } from '@ant-design/icons';

import { findAccount, updateAccount } from '@/services/ant-design-pro/account';
import dayjs from 'dayjs';
import EditForm from './components/EditForm';

const AccountTable: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);
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
      sortOrder: 'ascend'
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
      valueEnum:{
        0:{
          text:'不限',
          status:'',
        },
        1:{
          text:'超级管理员',
          status:'',
        },
        2:{
          text:'系统管理员',
          status:'',
        },
        3:{
          text:'门店管理员',
          status:'',
        }
      },
      render: (dom, item) => {
        if (item.type === 1) {
          return <Tag color="success" key={item.key}>超级管理员</Tag>;
        }
        if (item.type === 2) {
          return <Tag color="#2db7f5" key={item.key}>系统管理员</Tag>;
        }
        return <Tag color="#108ee9" key={item.key}>门店管理员</Tag>;
      }
    },
    {
      title: '账号状态',
      key: 'enabled',
      dataIndex: 'enabled',
      valueType:'select',
      initialValue: '0',
      valueEnum:{
        0:{
          text:'不限',
          status:'',
        },
        true:{
          text:'已启用',
          checked:true,
          status:'',
        },
        false:{
          text:'已禁用',
          checked:false,
          status:'',
        }
      },
      render: (dom,item) => {
        if (item.enabled) {
          return <Tag color="success">已启用</Tag>;
        }
        return <Tag color="error">已禁用</Tag>;
      }
    },
    {
      title: '创建时间',
      key: 'createdTimeRang',
      dataIndex: 'createdTimeRang',
      valueType: 'dateRange',
      sorter: true,
      render(dom: any, item) {

        return dayjs(item.createdTime).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    {
      title: '操作',
      key: 'option',
      dataIndex: 'option',
      hideInSearch:true,
      render: (_, item) => <Space size="middle">
        <a onClick={() => {
          setShowEditModal(true);
          setCurrentItem(item);
        }} key="edit">编辑</a>
        <a key="enabled">{item.enabled ? '禁用' : '启用'}</a>
        <Dropdown key="more" trigger={['click']} overlay={
          <Menu>
            <Menu.Item key={0}>修改密码</Menu.Item>
            <Menu.Item key={1}>所属门店</Menu.Item>
            <Menu.Item key={2}>删除账号</Menu.Item>
          </Menu>
        }><a>更多<RightOutlined/></a></Dropdown>
      </Space>

    },
  ];
  return (
    <PageContainer>
      <ProTable<API.AccountListItem, API.PageParams>
        headerTitle={'headerTitle'}
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button type="primary"
                  key="primary"
                  onClick={() => {
                    if (!showAddModal) {
                      setShowAddModal(true);
                    }
                  }}
          >
            <PlusOutlined/> 添加
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
              // await handleRemove(selectedRowsState);
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
          console.log("edit item values--->",value)
          const success = await updateAccount(value);
          if (success) {
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
        updateModalVisible={showEditModal}
        values={currentItem || {}}
      />
    </PageContainer>
  );
};

export default AccountTable;
