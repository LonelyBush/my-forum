import { DatePicker, Form, Input, InputNumber, type FormProps } from 'antd';
import { ButtonPrimary } from '../button/ButtonPrimary/ButtonPrimary';
import { useEffect, type Dispatch, type SetStateAction } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addRow, editRow, resetKey } from '../../store/slices/tableDataSlices';
import dayjs from 'dayjs';

interface FieldType {
  name: string;
  date: Date;
  amount: number;
}

export const FormInput = ({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const store = useAppSelector((state) => state.tableData);
  const [form] = Form.useForm();

  const dispatch = useAppDispatch();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const formattedValues = {
      ...values,
      date: values.date.toISOString().split('T')[0],
    };

    const findData = store.data.find((item) => item.key === store.key);

    if (store.key && findData) {
      const editData = {
        key: findData.key,
        ...formattedValues,
      };
      dispatch(editRow({ ...editData }));
      dispatch(resetKey());
    } else {
      dispatch(addRow(formattedValues));
    }
    setIsModalOpen(false);
    form.resetFields();
  };

  useEffect(() => {
    const findData = store.data.find((item) => item.key === store.key);

    if (store.key && findData) {
      form.setFieldsValue({
        ...findData,
        date: dayjs(findData.date, 'YYYY-MM-DD'),
      });
    } else {
      form.resetFields();
    }
  }, [form, store]);

  return (
    <Form
      name="basic"
      layout="vertical"
      form={form}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Имя"
        name="name"
        rules={[{ required: true, message: 'Пожалуйста, введите имя' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Дата"
        name="date"
        rules={[{ required: true, message: 'Пожалуйста, введите дату' }]}
      >
        <DatePicker style={{ width: '100%' }} format={'YYYY-MM-DD'} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Cумма"
        name="amount"
        rules={[{ required: true, message: 'Пожалуйста, введите сумму' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label={null}>
        <ButtonPrimary type="submit">Отправить</ButtonPrimary>
      </Form.Item>
    </Form>
  );
};
