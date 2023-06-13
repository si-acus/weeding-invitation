import React, { useEffect, useState }from 'react';
import { Button, Card, Form, Input, Select, List, Space } from 'antd';
import qs from 'qs';
import moment from 'moment'
import 'moment/locale/id'  
moment.locale('id')
const { TextArea } = Input;
interface DataType {
  record_id: string,
  name: string,
  outgiving: string;
  confirmation: string;
  date: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    fetch(`https://script.google.com/macros/s/AKfycbwFvIfuxGYzsp6ETpNsq94Fay4q0B6vxL7PSc5T9FK7PyUOyQOK8eGsAEqWa5u4xnj8/exec?${qs.stringify({ action: "insert", ...values })}`, { method: "GET", redirect: "follow" })
      .then((response) => {
        form.resetFields();
        fetchData();
      }).catch((e)=>console.log(e))
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const fetchData = () => {
    setLoading(true);
    fetch(`https://script.google.com/macros/s/AKfycbwFvIfuxGYzsp6ETpNsq94Fay4q0B6vxL7PSc5T9FK7PyUOyQOK8eGsAEqWa5u4xnj8/exec?action=read`, { method: "GET", redirect: "follow" })
      .then((response) => {
        fetch(response.url)
          .then((res) => res.json())
          .then(({ data }) => {
            setLoading(false);
            setData(data);
          }).catch((e)=>console.log(e))
      }).catch((e)=>console.log(e))

  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Card>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Input nama anda' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Ucapan" name="outgiving" rules={[{ required: true, message: 'Input Ucapan!' }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Konfirmasi Kehadiran" name="confirmation" rules={[{ required: true, message: 'Konfirmasi Kehadiran' }]}>
          <Select>
            <Select.Option value="Hadir">Hadir</Select.Option>
            <Select.Option value="Tidak Bisa Hadir">Tidak Bisa Hadir</Select.Option>
            <Select.Option value="Mungkin Hadir">Mungkin Hadir</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item: DataType) => (
          <List.Item
            key={item.record_id}
          >
            <List.Item.Meta
              title={<a >{item.name} <i>{item.confirmation}</i></a>}
              description={moment(item.date).fromNow()}
            />
            {item.outgiving}
          </List.Item>
        )}
      />
    </Card>
  )
};

export default App;