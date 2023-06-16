import { useEffect, useState } from 'react'
import { Card, Space } from 'antd'
import { motion } from 'framer-motion';

function CountdownTimer() {
  const [expiryTime, setExpiryTime] = useState("1 july 2023 15:30:25")
  const [countdownTime, setCountdownTime] = useState(
    {
      countdownDays: 0,
      countdownHours: 0,
      countdownMinutes: 0,
      countdownSeconds: 0
    }
  )
  const countdownTimer = () => {

    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime()
      const currentTime = new Date().getTime()
      const remainingDayTime = countdownDateTime - currentTime
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24))
      const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60))
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000)

      setCountdownTime({
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      })

      if (remainingDayTime < 0) {
        clearInterval(timeInterval)
        setExpiryTime("expired")
      }

    }, 1000)
  }

  useEffect(() => {
    countdownTimer()
  })

  return (
    < >
      {expiryTime !== "expired" ?
        <Space direction='horizontal'>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Card size='small' style={{ width: '70px', textAlign: 'center' }}><h3>{countdownTime.countdownDays} </h3> <p>Days</p></Card >
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Card size='small' style={{ width: '70px', textAlign: 'center' }}><h3>{countdownTime.countdownHours} </h3> <p>Hours</p></Card >
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Card size='small' style={{ width: '70px', textAlign: 'center' }}><h3>{countdownTime.countdownMinutes} </h3> <p>Minutes</p></Card >
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, y: 1 },
              hidden: { opacity: 0, y: -20 },
            }}
          >
            <Card size='small' style={{ width: '70px', textAlign: 'center' }}><h3>{countdownTime.countdownSeconds} </h3> <p>Seconds</p></Card >
          </motion.div>
        </Space>
        : <p>Deal has been Expired</p>}
    </>
  )
}
export default CountdownTimer