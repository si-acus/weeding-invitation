import React, { useRef } from 'react';
import {
  FloatButton,
  Typography,
} from 'antd';
import { EnvironmentOutlined, EllipsisOutlined, TeamOutlined, CalendarOutlined, FormOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';
import SectionHead from '../components/SectionHead'
import SectionFooter from '../components/SectionFooter'
import SectionText from '../components/SectionText'
import SectionContentRight from '../components/SectionContentRight'
import SectionInvitation from '../components/SectionInvitation'
import SectionMap from '../components/SectionMap'
import SectionComment from '../components/SectionComment'
import SectionCollapse from '../components/SectionCollapse'
import ModalContent from '../components/ModalContent'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion';

const { Title } = Typography;

const Home = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const node = ref.current;
    const onWheel = (e: any) => {
      if (ref.current)
        ref.current.scrollLeft += e.deltaY;
    };
    node?.addEventListener('wheel', onWheel, {
      passive: true
    });
    return () => {
      node?.removeEventListener('wheel', onWheel,);
    };
  }, []);
  const audioRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [visibleModal, setVisibleModal] = React.useState(true);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  React.useEffect(() => {
    if (isPlaying) {
      if (audioRef.current && audioRef.current.play )
        audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);
  React.useEffect(() => {
    if (!visibleModal) {
      togglePlayPause()
    }
  }, [visibleModal]);
  const handleClickScroll = (e: string) => {
    const element = document.getElementById(e);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div ref={ref}>
      <ModalContent visible={visibleModal} setVisible={setVisibleModal} />
      <SectionHead />
      <SectionText>
        <motion.h4
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          style={{ marginBottom: 0, fontFamily: `'Dancing_Script'`, fontSize: '40px' }}
        >
          Assalamu&#39;alaikum Wr. Wb.
        </motion.h4>
        <motion.h4
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          Segala Puji Bagi Allah SWT yang telah menjadikan hambanya hidup berpasang-pasangan. Dengan memohon Ridho, Rahmat, dan Berkah Allah SWT, kami bermaksud untuk mengundang Saudara/i dalam acara pernikahan yang kami selenggarakan.
        </motion.h4>
      </SectionText>
      <SectionContentRight />
      <SectionText>
        <motion.h4
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          style={{ marginBottom: 0, fontFamily: `'Dancing_Script'`, fontSize: '20px' }}
        >
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kamu yang berpikir.
          AR-RUM AYAT : 21
        </motion.h4>
      </SectionText>
      <SectionInvitation />
      <SectionMap />
      <SectionCollapse />
      <SectionComment />
      <SectionFooter />

      <audio src="audio.mp3" ref={audioRef} loop />
      <FloatButton
        shape="circle"
        onClick={togglePlayPause}
        type="primary"
        style={{ right: 94 }}
        icon={isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
      />
      <FloatButton.Group trigger="click" style={{ right: 24 }} type='primary' icon={<EllipsisOutlined />} >
        <FloatButton.BackTop visibilityHeight={0} />
        <FloatButton icon={<TeamOutlined />} onClick={() => handleClickScroll('SectionContentRight')} />
        <FloatButton icon={<CalendarOutlined />} onClick={() => handleClickScroll('SectionInvitation')} />
        <FloatButton icon={<EnvironmentOutlined />} onClick={() => handleClickScroll('SectionMap')} />
        <FloatButton icon={<FormOutlined />} onClick={() => handleClickScroll('SectionComment')} />
      </FloatButton.Group>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })