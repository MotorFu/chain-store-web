import React, { useRef } from 'react';
import type { FormInstance } from 'antd';
import { ModalForm, ProFormRadio, ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { findFirstCategoryList } from '@/services/chain-store/ProductApi/category';

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
  console.log('props.values-->', props.values, props.values.id !== undefined);
  const formRef = useRef<FormInstance>();
  const [showFirstCategory, setShowFirstCategory] = React.useState(false);
  return (
    <ModalForm<API.CategoryListItem>
      layout="horizontal"
      {...formItemLayout}
      title={props.values.id == null ? '添加分类' : '修改分类'}
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
        name: props.values.name,
        level: props.values.level,
        parentId: props.values.parentId,
      }}
      onInit={(values) => {
        console.log('values=====>', values);
        setShowFirstCategory(values.level === 2);
      }}
      onFinish={props.onSubmit}
      onValuesChange={(_, values) => {
        setShowFirstCategory(values.level === 2);
      }}
    >
      <ProFormText name="id" label="ID" hidden={true} />
      <ProFormRadio.Group
        name="level"
        label="分类级别"
        disabled={props.values.id !== undefined}
        initialValue={props.values.level}
        options={[
          {
            label: '一级分类',
            value: 1,
          },
          {
            label: '二级分类',
            value: 2,
          },
        ]}
      />
      {showFirstCategory ? (
        <ProFormSelect
          name="parentId"
          label="父级分类"
          disabled={props.values.id !== undefined}
          request={async () => {
            const list = await findFirstCategoryList();
            return list.data;
          }}
        />
      ) : null}

      <ProFormText
        name="name"
        label="名称"
        rules={[
          {
            required: true,
            message: '请输入分类名称！',
          },
        ]}
      />
    </ModalForm>
  );
};

export default EditForm;
