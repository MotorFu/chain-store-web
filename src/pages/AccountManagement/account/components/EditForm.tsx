import React from 'react';
import { Modal } from 'antd';
import { ProFormSelect, ProFormText, ProFormUploadButton, StepsForm } from '@ant-design/pro-form';

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
  visible: boolean;
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
            title={props.values.id == null ? '添加账号' : '修改账号'}
            visible={props.visible}
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
          username: props.values.username,
          phone: props.values.phone,
        }}
        title="基本信息"
      >
        <ProFormUploadButton
          name="icon"
          label="头像"
          max={1}
          initialValue={[{ thumbUrl: props.values.icon }]}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          action="/upload.do"
          rules={[
            {
              required: true,
              message: '请上传图片！',
            },
          ]}
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
          label="手机号"
          placeholder="请输入手机号"
          rules={[
            {
              required: true,
              message: '手机号不能为空',
            },
            {
              pattern: /^1\d{10}$/,
              message: '不合法的手机号格式!',
            },
          ]}
        />
      </StepsForm.StepForm>
      <StepsForm.StepForm
        initialValues={{
          type: '0',
          relation: {
            storeId: 0,
            storeName: '门店名称',
          },
        }}
        title="账号类型"
      >
        <ProFormSelect
          name="type"
          label="账号类型"
          valueEnum={{
            china: '系统管理员',
            usa: '门店管理员',
          }}
        />

        <ProFormSelect
          name="type"
          label="门店角色"
          valueEnum={{
            superAdmin: '超级管理员',
            normal: '普通管理员',
            cashier: '收银员',
          }}
        />
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default EditForm;
