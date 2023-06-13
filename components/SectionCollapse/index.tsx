import React from 'react'
import { Collapse } from 'antd';


const App = () => (
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', backgroundColor: '#B7B1A4', margin: 0 }}>
        <Collapse defaultActiveKey={['1']} ghost items={[{
             key: '1',
             label: 'This is panel header 1',
             children: <p>A dog is a type of domesticated animal.
             Known for its loyalty and faithfulness,
             it can be found as a welcome guest in many households across the world.</p>,
        }]} />
    </section>
)

export default App