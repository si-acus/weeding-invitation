import React from 'react'
import { Collapse } from 'antd';


const App = () => (
  <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', backgroundColor: '#B7B1A4', margin: 0 }}>
    <Collapse ghost items={[{
      key: '1',
      label: <h2>Wedding Gift</h2>,
      children: <div>
        <h4>No rek Bsi 7097800687
          a/n  Silvie Aprilia Aqidah</h4>

        <h4>No rek Mandiri 1320017824856
          a/n Aris Nurisman Maulana </h4>


        <h4>🚚 Alamat Pengiriman</h4>
        <h4>Jl. Suryakencana Gg. Tholib 1 Kp. Dalima RT 01 RW 006 Kec. Cibadak Kab. Sukabumi</h4>
      </div>,
    }]} />
  </section>
)

export default App