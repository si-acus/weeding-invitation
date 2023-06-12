import { Col, Row, Space, Typography, Card } from 'antd'
import React from 'react'
const { Title } = Typography;
const { Meta } = Card;

const App = () => (
  <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', margin: 0 }}>
    <Row justify="center" align="middle">
      <Col span={6}>

      </Col>
      <Col span={18}>
        <Title level={4} style={{ marginBottom: 0 }}>
          AKAD NIKAH
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          MINGGU, 05 MARET 2023
          08.00 WIB
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          Graha Panglinggihan 70
          Jl. Raya Cihuni Cibatu, Cimaragas, Kec. Pangatikan, Kabupaten Garut, Jawa Barat 44183
        </Title>

        <Title level={4} style={{ marginBottom: 0 }}>
          RESEPSI
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          MINGGU, 05 MARET 2023
          11.00-14.00 WIB
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          Graha Panglinggihan 70
          Jl. Raya Cihuni Cibatu, Cimaragas, Kec. Pangatikan, Kabupaten Garut, Jawa Barat 44183
        </Title>
      </Col>
    </Row>

  </section>
)

export default App