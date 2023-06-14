import { Col, Row, Space, Typography, Card } from 'antd'
import React from 'react'
const { Title } = Typography;
const { Meta } = Card;
import bg from '../../public/aris.jpg'
import Image from 'next/image';
const App = () => (
  <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '90px 45px', margin: 0 }}>
    <Row justify="center" align="middle">
      <Col lg={12} sm={24} xs={24}>
        <Space direction='horizontal'>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<Image alt="example" src={bg.src} width={240} height={360} />}
          >
            <Meta title="Aris" />
          </Card>
        </Space>
      </Col>
      <Col lg={12} sm={24} xs={24}>
        <Title level={1} style={{ marginBottom: '40px', marginTop: '0.2em', fontFamily: `'Alex_Brush'`, fontSize: '40px' }}>
          Aris Nurisman Maulana
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>

          Anak ke-3 dari Bapak Hendi Setiawan & Ibu Tati Rohaeti
        </Title>
      </Col>

    </Row>

  </section>
)

export default App