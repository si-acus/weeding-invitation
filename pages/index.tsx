import {
  Typography,
  Space,
  Divider,
} from 'antd';
import SectionHead from '../components/SectionHead'
import SectionFooter from '../components/SectionFooter'
import SectionText from '../components/SectionText'
import SectionContentRight from '../components/SectionContentRight'
import SectionInvitation from '../components/SectionInvitation'
import SectionMap from '../components/SectionMap'
import SectionComment from '../components/SectionComment'
const { Title } = Typography;

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
} // our location object from earlier


export default function Home() {
  return (
    <>
      <SectionHead />
      <SectionText>
        <Title level={4} style={{ marginBottom: 0, }}>
          Assalamu&#39;alaikum wr wb
        </Title>
        <Title level={4} style={{ marginBottom: 0, }}>
          Segala Puji Bagi Allah SWT yang telah menjadikan hambanya hidup berpasang-pasangan. Dengan memohon Ridho, Rahmat, dan Berkah Allah SWT, kami bermaksud untuk mengundang Saudara/i dalam acara pernikahan yang kami selenggarakan.
        </Title>
      </SectionText>
      <SectionContentRight />
      <SectionText>

        <Title level={4} style={{ marginBottom: 0, }}>
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kamu yang berpikir.
          AR-RUM AYAT : 21        </Title>
      </SectionText>
      <SectionInvitation />
      <SectionMap location={location} zoomLevel={17} />
      <SectionComment />
      <SectionFooter />

    </>
  );
}
