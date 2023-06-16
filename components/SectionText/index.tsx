import React from 'react'
import { useSpring, animated } from '@react-spring/web'

export interface AuxProps {
  children: React.ReactNode
}

const App = (props: AuxProps) => {
  const headerStyle = useSpring({
    config: { duration: 3000 },
    from: { opacity: 0, left: "-500px" },
    to: {
      opacity: 1,
      left: "-500px"
    }
  });
  return (
    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40, padding: '3em', backgroundColor: '#B7B1A4', margin: 0 }}>
      <animated.div style={headerStyle}>


        {props.children}
      </animated.div>

    </section>
  )
}

export default App