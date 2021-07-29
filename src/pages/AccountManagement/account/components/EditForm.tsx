import React from 'react';
import { Modal } from 'antd';
import {
  ProFormText,
  ProFormUploadButton,
  StepsForm,
} from '@ant-design/pro-form';

export type FormValueType = {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
} & Partial<API.AccountListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<API.AccountListItem>;
};

const EditForm: React.FC<UpdateFormProps> = (props) => {
  return (
    <StepsForm
      stepsProps={{
        size: 'small',
      }}
      stepsFormRender={(dom, submitter) => {
        return (
          <Modal
            width={640}
            bodyStyle={{ padding: '32px 40px 48px' }}
            destroyOnClose
            title={'添加/更新账号'}
            visible={props.updateModalVisible}
            footer={submitter}
            onCancel={() => {
              props.onCancel();
            }}
          >
            {dom}
          </Modal>
        );
      }}
      onFinish={props.onSubmit}
    >
      <StepsForm.StepForm
        initialValues={{
          icon: props.values.icon,
          name: props.values.username,
          desc: props.values.phone,
        }}
        title='基本信息'
      >
        <ProFormUploadButton
          extra={'支持扩展名：.jpg .png'}
          label={'头像'}
          name="file"
          title={'上传'}
        />
        <ProFormText
          name="username"
          label="账号"
          rules={[
            {
              required: true,
              message: '请输入账号！',
            },
          ]}
        />
        <ProFormText
          name="phone"
          width="md"
          label='手机号'
          placeholder='请输入手机号'
          rules={[
            {
              required: true,
              message: '手机号不能为空'
            },
            {
              pattern: /^1\d{10}$/,
              message:'不合法的手机号格式!',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          type: '0',
          relation: {
            storeId: 0,
            storeName: '门店名称'
          },
        }}
        title='账号类型'
      >
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default EditForm;
