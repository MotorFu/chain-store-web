import React, { useRef } from 'react';
import type { FormInstance } from 'antd';
import { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';
import { Button } from 'antd';

// export type FormValueType =Partial<API.ProductListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: API.ProductListItem) => void;
  onSubmit: (values: API.ProductListItem) => Promise<void>;
  visible: boolean;
  values: Partial<API.ProductListItem>;
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const EditForm: React.FC<UpdateFormProps> = (props) => {
  console.log('props.values-->', props.values);
  const formRef = useRef<FormInstance>();
  return (
    <ModalForm<API.ProductListItem>
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
      <ProFormUploadButton
        name="image"
        initialValue={[{ thumbUrl: props.values.image }]}
        label="图片"
        max={1}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        action="/upload.do"
        extra=""
        rules={[
          {
            required: true,
            message: '请上传图片！',
          },
        ]}
      />
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
      <ProFormText
        name="phone"
        label="联系电话"
        initialValue={props.values.description}
        rules={[
          {
            required: true,
            message: '请输入联系电话！',
          },
        ]}
      />
      <ProFormText
        name="address"
        label="地址"
        initialValue={props.values.unit}
        rules={[
          {
            required: true,
            message: '请输入门店地址！',
          },
        ]}
      />
    </ModalForm>
  );
};

export default EditForm;
