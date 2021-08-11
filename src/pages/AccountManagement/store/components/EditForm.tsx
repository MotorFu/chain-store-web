import React, { useRef } from 'react';
import type { FormInstance } from 'antd';
import { ModalForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-form';

// export type FormValueType =Partial<API.StoreListItem>;

export type UpdateFormProps = {
  onCancel: (flag?: boolean, formVals?: API.StoreListItem) => void;
  onSubmit: (values: API.StoreListItem) => Promise<void>;
  visible: boolean;
  values: Partial<API.StoreListItem>;
};
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const EditForm: React.FC<UpdateFormProps> = (props) => {
  console.log('props.values-->', props.values);
  const formRef = useRef<FormInstance>();
  return (
    <ModalForm<API.StoreListItem>
      layout="horizontal"
      {...formItemLayout}
      title={props.values.id == null ? '添加门店' : '修改门店'}
      visible={props.visible}
      formRef={formRef}
      modalProps={{
        destroyOnClose: true,
        afterClose: () => {
          formRef.current?.resetFields();
        },
        onCancel: () => {
          props.onCancel();
        },
      }}
      initialValues={{
        id: props.values.id,
        image: props.values.image ? [{ thumbUrl: props.values.image }] : null,
        name: props.values.name,
        phone: props.values.phone,
        address: props.values.address,
      }}
      onFinish={props.onSubmit}
    >
      <ProFormText name="id" width="md" label="手机号" placeholder="请输入手机号" hidden={true} />
      <ProFormUploadButton
        name="image"
        label="图片"
        max={1}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        action="/upload.do"
        transform={(value: any) => ({ image: value[0].thumbUrl })}
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
