import React from 'react';
import { Row, Col } from 'antd';
import styles from './Welcome.less';
import './Welcome.less';
import { PageContainer } from '@ant-design/pro-layout';

export default (): React.ReactNode => {
  return (
    <PageContainer title={false} header={{ style: { display: 'none' } }}>
      <Row className={styles.titleBox}>
        <Col span={24} className={styles.titleContent}>
          <div>
            <img alt="logo" className={styles.titleLogo} src="logo.svg" />
          </div>
          欢迎使用连锁商店管理系统
        </Col>
      </Row>
    </PageContainer>
  );
};
