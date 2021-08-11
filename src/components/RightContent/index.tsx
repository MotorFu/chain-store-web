import { Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';
import { Link } from 'react-router-dom';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue=""
        options={[
          {
            label: <Link to="/account/page">账号列表</Link>,
            value: '账号列表',
          },
          {
            label: <Link to="/account/store-page">门店列表</Link>,
            value: '账号列表',
          },
          {
            label: <Link to={'/product/page'}>商品列表</Link>,
            value: '商品列表',
          },
          {
            label: <Link to="/product/category-page">分类列表</Link>,
            value: '分类列表',
          },
          {
            label: <Link to="/sale/page">销售订单列表</Link>,
            value: '销售订单列表',
          },
          {
            label: <Link to="/sale/transaction-page">销售订单交易流水</Link>,
            value: '销售订单交易流水',
          },
        ]}
        onSearch={(value) => {
          console.log('input', value);
        }}
      />
      <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span>
      <Avatar />
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
