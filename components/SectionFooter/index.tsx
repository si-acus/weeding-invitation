import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', margin: 0 }}>
      <Title level={1} style={{ marginTop: '0.2em', fontFamily: `'Alex_Brush'`, fontSize: '30px' }}>
        Silvie & Aris
      </Title>
    </footer>
  );
}


export default Footer;
