import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, backgroundColor: '#B7B1A4', padding: '3em', margin: 0 }}>
      <Title level={4} style={{ marginTop: '0.2em', fontSize: '20px' }}>
        Merupakan suatu kehormatan dan kebahagiaan
        bagi kami, apabila Bapak/Ibu/Saudara/i
        berkenan hadir dan memberikan doa restu.
        Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
      </Title>
      <Title
        style={{ marginBottom: 0, fontFamily: `'Dancing_Script'`, fontSize: '30px' }}
      >
        Wassalamu&#39;alaikum Wr. Wb.
      </Title>
      <Title level={1} style={{ marginTop: '0.2em', fontFamily: `'Alex_Brush'`, fontSize: '30px' }}>
        Silvie & Aris
      </Title>
    </footer>
  );
}


export default Footer;
