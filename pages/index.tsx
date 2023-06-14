import {
  FloatButton,
  Typography,
} from 'antd';
import { EnvironmentOutlined, EllipsisOutlined, TeamOutlined, CalendarOutlined, FormOutlined } from '@ant-design/icons';
import SectionHead from '../components/SectionHead'
import SectionFooter from '../components/SectionFooter'
import SectionText from '../components/SectionText'
import SectionContentRight from '../components/SectionContentRight'
import SectionContentLeft from '../components/SectionContentLeft'
import SectionInvitation from '../components/SectionInvitation'
import SectionMap from '../components/SectionMap'
import SectionComment from '../components/SectionComment'
import SectionCollapse from '../components/SectionCollapse'
import ModalContent from '../components/ModalContent'
import dynamic from 'next/dynamic'

const { Title } = Typography;

const Home = () => {
  const handleClickScroll = (e: string) => {
    const element = document.getElementById(e);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <ModalContent />
      <SectionHead />
      <SectionText>
        <Title level={4} style={{ marginBottom: 0, fontFamily: `'Dancing_Script'`, fontSize: '40px' }}>
          Assalamu&#39;alaikum Wr. Wb.
        </Title>
        <Title level={4} style={{ marginBottom: 0, }}>
          Segala Puji Bagi Allah SWT yang telah menjadikan hambanya hidup berpasang-pasangan. Dengan memohon Ridho, Rahmat, dan Berkah Allah SWT, kami bermaksud untuk mengundang Saudara/i dalam acara pernikahan yang kami selenggarakan.
        </Title>
      </SectionText>
      <SectionContentRight />
      <SectionContentLeft />
      <SectionText>

      <Title level={4} style={{ marginBottom: 0, fontFamily: `'Dancing_Script'`, fontSize: '20px' }}>
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kamu yang berpikir.
          AR-RUM AYAT : 21        </Title>
      </SectionText>
      <SectionInvitation />
      <SectionMap />
      <SectionCollapse />
      <SectionComment />
      <SectionFooter />


      <FloatButton.Group trigger="click" style={{ right: 24 }} type='primary' icon={<EllipsisOutlined />} >
        <FloatButton.BackTop visibilityHeight={0} />
        <FloatButton icon={<TeamOutlined />} onClick={() => handleClickScroll('SectionContentRight')} />
        <FloatButton icon={<CalendarOutlined />} onClick={() => handleClickScroll('SectionInvitation')} />
        <FloatButton icon={<EnvironmentOutlined />} onClick={() => handleClickScroll('SectionMap')} />
        <FloatButton icon={<FormOutlined />} onClick={() => handleClickScroll('SectionComment')} />
      </FloatButton.Group>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false })