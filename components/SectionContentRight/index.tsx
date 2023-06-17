import { Col, Row, Space, Typography, Card } from 'antd'
import React from 'react'
const { Title } = Typography;
const { Meta } = Card;
import bg from '../../public/silvie.jpg'
import bg1 from '../../public/aris.jpg'
import bg2 from '../../public/denny-muller-uoQP_9qmDzg-unsplash.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const App = () => (
  <section id="SectionContentRight"
    style={{
      backgroundImage: `url("${bg2.src}")`,
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      textAlign: 'center', margin: 0,
    }}
  >
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '90px 45px' }}>
      <Row justify="center" align="middle">
        <Col lg={12} sm={24} xs={24}>
          <Space direction='horizontal'>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image alt="example" src={bg.src} width={240} height={360} />}
            >
              <Meta title="Silvie" />
            </Card>
          </Space>
        </Col>
        <Col lg={12} sm={24} xs={24}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Title level={1} style={{ marginBottom: '40px', marginTop: '0.2em', fontFamily: `'Alex_Brush'`, fontSize: '40px' }}>
              Silvie Aprilia Aqidah, S.Ag
            </Title>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Title level={4} style={{ marginBottom: 0 }}>
              Anak ke-6 dari Bapak Babas Suhaemi & Ibu Tati Haryati
            </Title>
          </motion.div>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col lg={12} sm={24} xs={24}>
          <Space direction='horizontal'>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<Image alt="example" src={bg1.src} width={240} height={360} />}
            >
              <Meta title="Aris" />
            </Card>
          </Space>
        </Col>
        <Col lg={12} sm={24} xs={24}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Title level={1} style={{ marginBottom: '40px', marginTop: '0.2em', fontFamily: `'Alex_Brush'`, fontSize: '40px' }}>
              Aris Nurisman Maulana
            </Title>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Title level={4} style={{ marginBottom: 0 }}>
              Anak ke-3 dari Bapak Hendi Setiawan & Ibu Tati Rohaeti
            </Title>
          </motion.div>
        </Col>
      </Row>
    </div>
  </section>
)

export default App