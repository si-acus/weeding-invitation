import { Col, Row, Space, Typography, Card } from 'antd'
import React from 'react'
const { Title } = Typography;
const { Meta } = Card;

const App = () => (
  <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', margin: 0 }}>
    <Row justify="center" align="middle">
      <Col lg={12} sm={24} xs={24}>
        <Space direction='horizontal'>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Space>
      </Col>
      <Col lg={12} sm={24} xs={24}>
        <Title level={4} style={{ marginBottom: 0 }}>
          Intan Destika Nurrohman, S. Ap
          Putri Pertama Bapak Drs. H. Ayi Rohman, M. Si
          & Ibu N. Enung Nuraeni, S. Pd
        </Title>
      </Col>
    </Row>

  </section>
)

export default App