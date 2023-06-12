import { Typography } from 'antd'
import React from 'react'
const { Title } = Typography;

export interface AuxProps  { 
    children: React.ReactNode
 }

const App = (props:AuxProps) => (
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', backgroundColor: '#B7B1A4', margin: 0 }}>
        {props.children}

    </section>
)

export default App