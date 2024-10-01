import { useRequest } from '@@/plugin-request';
import {
  PageContainer,
  ProForm,
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Card, message } from 'antd';
import type { FC } from 'react';
import { fakeSubmitForm } from './service';
import styles from './style.less';

const BasicForm: FC<Record<string, any>> = () => {
  const { run } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: () => {
      message.success('提交成功');
    },
  });

  const onFinish = async (values: Record<string, any>) => {
    run(values);
  };

  return (
    <PageContainer title="New Item" content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
      <Card bordered={false}>
        <ProForm
          style={{ margin: 'auto', marginTop: 8, maxWidth: 600 }}
          name="basic"
          layout="vertical"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
        >
          <ProFormText
            width="md"
            label="Name"
            name="title"
            rules={[
              {
                required: true,
                message: 'Name is required',
              },
            ]}
            placeholder="Enter name"
            allowClear
          />
          <ProFormDigit
            label={
              <span>
                Price
                <em className={styles.optional}>（Price for retail sales）</em>
              </span>
            }
            name="price"
            rules={[
              {
                required: true,
                message: 'Price is required',
              },
            ]}
            placeholder="Enter price"
            min={0}
            width="xs"
            fieldProps={{
              formatter: (value) => `${value || 0}$`,
              parser: (value) => (value ? value.replace('$', '') : '0'),
            }}
          />

          <ProForm.Group size={8}>
            <ProFormSelect
              
              rules={[
                {
                  required: true,
                  message: '请输入您的所在省!',
                },
              ]}
              width={100}
              fieldProps={{
                labelInValue: true,
              }}
              name="isAutoGenerateBarcode"
              label="Barcode"
              className={styles.item}
              request={async () => {
                return [{name: 'Auto', id: 1}, {name: 'Manual', id: 2}].map((item) => {
                  return {
                    label: item.name,
                    value: item.id,
                  };
                });
              }}
            />
            <ProFormDependency name={['isAutoGenerateBarcode']}>
              {({ isAutoGenerateBarcode }) => {
                return (
                  <ProFormText
                    width="sm"
                    name="barcode"
                    disabled={isAutoGenerateBarcode?.value === 1}
                    label={<div style={{ visibility: 'hidden' }}>Barcode</div>}
                    placeholder="Enter barcode"
                    allowClear
                  />
                );
              }}
            </ProFormDependency>
          </ProForm.Group>

          <ProFormTextArea
            label="Description"
            width="xl"
            name="goal"
            placeholder="Enter description"
          />

          <ProFormRadio.Group
            options={[
              {
                value: 1,
                label: 'Draft',
              },
              {
                value: 2,
                label: 'Publish',
              },
              {
                value: 3,
                label: 'Inactive',
              },
            ]}
            label="Status"
            help="Choose: Draft to save, Publish to go live, or Inactive to hide."
            name="status"
          />
        </ProForm>
      </Card>
    </PageContainer>
  );
};

export default BasicForm;
