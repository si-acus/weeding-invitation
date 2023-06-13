import { Carousel, Space, Typography } from 'antd'
import Image from 'next/image'
import React from 'react'
import bg from '../../public/beatriz-perez-moya-M2T1j-6Fn8w-unsplash.jpg'
import CountDown from './CountDown'
const { Title } = Typography;
const contentStyle: React.CSSProperties = {
  height: '100vh',
  color: '#fff',
  lineHeight: '100vh',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundImage: `url('${bg.src}')`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
}

const App: React.FC = () => (
  <section>
    <div style={{
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(180deg, #B7B1A400 45%, #B7B1A4 96%)',
      opacity: 1,
      transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s'
    }}>

      <Carousel autoplay>
        <div style={{height:'100%', width:'100%'}}>
          <div style={contentStyle} >-</div>
        </div>
        <div style={{height:'100%', width:'100%'}}>
          <div style={contentStyle} >-</div>
        </div>
        <div style={{height:'100%', width:'100%'}}>
          <div style={contentStyle} >-</div>
        </div>

      </Carousel>
    </div>
    <div style={{
      height: '100vh',
      width: '100%',
      top: '1em',
      left: 0,
      position: 'absolute',
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(180deg, #B7B1A400 45%, #B7B1A4 96%)',
      opacity: 1,
      transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
    }} />
    <div style={{
      height: '100%',
      width: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      zIndex: 0,
      textAlign: 'center', marginTop: 48, marginBottom: 40
    }}>
      <div style={{ height: '50%' }}></div>
      <Title level={4} style={{ marginBottom: 0 }}>
        THE WEDDING OF
      </Title>
      <Title level={1} style={{ marginBottom: 0, marginTop: '0.2em' }}>
        Silvie & Aris
      </Title>

      <CountDown />
    </div>
  </section>
)

export default App