import React, { useState } from 'react';
import { Modal, Button, Typography } from 'antd';
import { useRouter } from 'next/router'
const { Title } = Typography;
import { useSpring, animated } from '@react-spring/web'

const App = () => {
    const [visible, setVisible] = useState(true);
    const router = useRouter()
    const { to } = router.query
    const styles = useSpring({
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 24,
    })
    return (
        <>
            <Modal
                title=""
                open={visible}
                onOk={() => setVisible(false)}
                footer={[

                ]}
            >
                <animated.div className='header-content' style={styles}>
                    <Title level={1} style={{ marginBottom: 0, marginTop: '0.2em', fontFamily: `'Alex_Brush'`, fontSize: '60px' }}>
                        Silvie & Aris
                    </Title>
                    <h3>Kepada Bapak/Ibu/Saudara/i</h3>
                    <br/>
                    <h3>{to}</h3>
                    <br/>
                    <Button key="back" onClick={() => setVisible(false)}>
                        Buka Undangan
                    </Button>,
                </animated.div>
            </Modal>
        </>
    );
};

export default App;