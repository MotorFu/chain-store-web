import React from 'react';
import { Row, Col } from 'antd';
import './Welcome.less';

export default (): React.ReactNode => {
  return (
    <Row className="title-box">
      <Col span={24} className="title-content">
        <div>
          <img alt="logo" className="title-logo" src="logo.svg" />
        </div>
        欢迎使用连锁商店管理系统
      </Col>
    </Row>
  );
};
