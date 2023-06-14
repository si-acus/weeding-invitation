import React from 'react'
import { Col, Row, Carousel, Typography, Card, Space } from 'antd'
import bg1 from '../../public/silviearis1.jpg'
import bg2 from '../../public/silviearis2.jpg'
import bg3 from '../../public/silviearis3.jpg'
import bg4 from '../../public/silviearis4.jpg'
import bg5 from '../../public/silviearis5.jpg'
import Image from 'next/image'
const { Title } = Typography;

const App = () => (
  <section id="SectionInvitation" style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '90px 45px', margin: 0 }}>
    <Row justify="center" align="middle">
      <Col lg={12} sm={24} xs={24}>
        <Space direction='horizontal'>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<Carousel autoplay>
              <Image alt="example" src={bg1.src} width={240} height={360} />
              <Image alt="example" src={bg2.src} width={240} height={360} />
              <Image alt="example" src={bg3.src} width={240} height={360} />
              <Image alt="example" src={bg4.src} width={240} height={360} />
              <Image alt="example" src={bg5.src} width={240} height={360} />
            </Carousel>}
          />
        </Space>
      </Col>
      <Col lg={12} sm={24} xs={24}>
        <Title level={4} style={{ marginBottom: 0 }}>
          AKAD NIKAH
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          Sabtu, 1 Juli 2023
          09.00-11.00 WIB
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          RESEPSI
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          Sabtu, 1 Juli 2023
          11.00-15.00WIB
        </Title>
        <Title level={4} style={{ marginBottom: 0 }}>
          Gedung BK3D/ Wisma Bhumi Atikan
          Jl.Raya Sukabumi, Cibadak, Jawa Barat
        </Title>
      </Col>
    </Row>

  </section>
)

export default App