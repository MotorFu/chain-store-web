import React, { useRef } from 'react';
import type { FormInstance } from 'antd';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { Button } from 'antd';

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: API.CategoryListItem) => void;
  onSubmit: (values: API.CategoryListItem) => Promise<void>;
  visible: boolean;
  values: Partial<API.CategoryListItem>;
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const EditForm: React.FC<UpdateFormProps> = (props) => {
  console.log('props.values-->', props.values);
  const formRef = useRef<FormInstance>();
  return (
    <ModalForm<API.CategoryListItem>
      layout="horizontal"
      {...formItemLayout}
      title={props.values.id == null ? '添加门店' : '修改门店'}
      visible={props.visible}
      formRef={formRef}
      modalProps={{
        // destroyOnClose:true,
        afterClose: () => {
          formRef.current?.resetFields();
        },
        onCancel: () => {
          props.onCancel();
        },
      }}
      submitter={{
        render: ({ reset, submit }) => [
          <Button key="cancel" onClick={() => props.onCancel()}>
            取消
          </Button>,
          <Button key="reset" onClick={reset}>
            重置
          </Button>,
          <Button key="submit" onClick={submit} type="primary">
            提交
          </Button>,
        ],
      }}
      onFinish={props.onSubmit}
    >
      <ProFormText
        name="name"
        label="名称"
        initialValue={props.values.name}
        rules={[
          {
            required: true,
            message: '请输入账号！',
          },
        ]}
      />
    </ModalForm>
  );
};

export default EditForm;
