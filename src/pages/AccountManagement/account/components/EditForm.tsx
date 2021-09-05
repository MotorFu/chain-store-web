import React, { useState } from 'react';
import { Modal } from 'antd';
import { ProFormSelect, ProFormText, ProFormUploadButton, StepsForm } from '@ant-design/pro-form';

import { tableListDataSource } from '@/pages/AccountManagement/store/_mock';

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
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const EditForm: React.FC<UpdateFormProps> = (props) => {
  const [showStore, setShowStore] = useState(false);

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
        layout={'horizontal'}
        {...formItemLayout}
        initialValues={{
          id: props.values.id,
          username: props.values.username,
          phone: props.values.phone,
          icon: props.values.icon ? [{ thumbUrl: props.values.icon }] : null,
        }}
        title="基本信息"
      >
        <ProFormText name="id" width="md" label="手机号" placeholder="请输入手机号" hidden={true} />
        <ProFormUploadButton
          name="icon"
          label="头像"
          max={1}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          transform={(value: any) => ({ icon: value[0].thumbUrl })}
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
        layout={'horizontal'}
        {...formItemLayout}
        initialValues={{
          id: props.values.id,
          type: props.values.type,
          storeRelation: {
            role: props.values.storeRelation?.role,
            storeId: props.values.storeRelation?.storeId,
          },
        }}
        title="账号类型"
        onValuesChange={(changeValues, values) => {
          console.log('onValuesChange---->', changeValues, values);
          setShowStore(values.type === 3);
        }}
      >
        <ProFormText name="id" width="md" label="手机号" placeholder="请输入手机号" hidden={true} />
        <ProFormSelect
          name="type"
          label="账号类型"
          disabled={props.values.type === 1}
          options={
            props.values.type === 1
              ? [
                  {
                    value: 1,
                    label: '超级系统管理员',
                  },
                ]
              : [
                  {
                    value: 2,
                    label: '系统管理员',
                  },
                  {
                    value: 3,
                    label: '门店管理员',
                  },
                ]
          }
        />
        {props.values.type === 3 || showStore
          ? [
              <ProFormSelect
                key={'storeRelation.role'}
                name={['storeRelation', 'role']}
                label="门店角色"
                options={[
                  {
                    value: 1,
                    label: '超级管理员',
                  },
                  {
                    value: 2,
                    label: '普通管理员',
                  },
                  {
                    value: 3,
                    label: '收银员',
                  },
                ]}
              />,
              <ProFormSelect
                key={'storeRelation.storeId'}
                name={['storeRelation', 'storeId']}
                label="门店"
                request={async () => {
                  return tableListDataSource.map((it) => {
                    return {
                      value: it.id,
                      label: it.name,
                    };
                  });
                }}
              />,
            ]
          : null}
      </StepsForm.StepForm>
    </StepsForm>
  );
};

export default EditForm;
