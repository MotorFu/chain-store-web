import React, { useRef } from 'react';
import type { FormInstance } from 'antd';
import { ModalForm, ProFormText, ProFormTextArea, ProFormUploadButton } from '@ant-design/pro-form';

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
        unit: '件',
        originalPrice: props.values.originalPrice,
        retailPrice: props.values.retailPrice,
        description: props.values.description,
      }}
      onFinish={props.onSubmit}
    >
      <ProFormText name="id" label="ID" hidden={true} />
      <ProFormUploadButton
        name="image"
        label="图片"
        max={1}
        fieldProps={{
          name: 'file',
          listType: 'picture-card',
        }}
        transform={(value: any) => ({ icon: value[0].thumbUrl })}
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
            message: '请输入商品名称！',
          },
        ]}
      />
      <ProFormTextArea
        name="description"
        label="商品描述"
        rules={[
          {
            required: true,
            message: '请输入商品描述！',
          },
        ]}
      />
      <ProFormText name="unit" label="计量单位" hidden={true} />
      <ProFormText
        name="originalPrice"
        label="原价"
        rules={[
          {
            required: true,
            message: '请输入原价！',
          },
        ]}
      />
      <ProFormText
        name="retailPrice"
        label="现价"
        rules={[
          {
            required: true,
            message: '请输入现价！',
          },
        ]}
      />
    </ModalForm>
  );
};

export default EditForm;
