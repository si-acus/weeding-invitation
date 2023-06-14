import React, { useState } from 'react';
import { Modal, Button, Typography } from 'antd';
import { useRouter } from 'next/router'
const { Title } = Typography;

const App = () => {
    const [visible, setVisible] = useState(true);
    const router = useRouter()
    const { to } = router.query

    return (
        <>
            <Modal
                title=""
                visible={visible}
                onOk={() => setVisible(false)}
                footer={[
                    <Button key="back" onClick={() => setVisible(false)}>
                        Buka Undangan
                    </Button>,
                ]}
            >
                <div className='header-content'>
                    <Title level={1} style={{ marginBottom: 0, marginTop: '0.2em', fontFamily: `'Alex_Brush'` , fontSize: '60px'}}>
                        Silvie & Aris
                    </Title>
                    <h3>Kepada Bapak/Ibu/Saudara/i</h3>
                    <h3>{to}</h3>
                </div>
            </Modal>
        </>
    );
};

export default App;