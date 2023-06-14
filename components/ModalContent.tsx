import React, { useState } from 'react';
import { Modal, Button, Typography } from 'antd';
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
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
                <motion.div animate={{ opacity: visible ? 1 : 0 }} className='header-content'>
                    <Title level={1} style={{ marginBottom: 0, marginTop: '0.2em', fontFamily: `'Alex_Brush'` , fontSize: '60px'}}>
                        Silvie & Aris
                    </Title>
                    <h3>Kepada Bapak/Ibu/Saudara/i</h3>
                    <h3>{to}</h3>
                </motion.div>
            </Modal>
        </>
    );
};

export default App;