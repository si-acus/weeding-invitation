import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', margin: 0 }}>
      <Row className="bottom-bar">
        <Col lg={24} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <h2>
              Silvi & Aris
            </h2>
          </span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
