import React, { useState, Suspense, lazy } from 'react';
import {
  Modal,
  Typography,
} from 'antd';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'


const IndexContent = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () =>
      Math.floor(Math.random() * 10) >= 4
        ? import("../components/IndexContent")
        : Promise.reject(new Error())
  );
});

const Home = () => {
  const [visible, setVisible] = useState(true);

  const router = useRouter()
  const { to } = router.query
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <IndexContent />
      </Suspense>

    </>
  );
}


export default dynamic(() => Promise.resolve(Home), { ssr: false })