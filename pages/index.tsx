import {
  Typography,
} from 'antd';
import SectionHead from '../components/SectionHead'
import SectionFooter from '../components/SectionFooter'
import SectionText from '../components/SectionText'
import SectionContentRight from '../components/SectionContentRight'
import SectionContentLeft from '../components/SectionContentLeft'
import SectionInvitation from '../components/SectionInvitation'
import SectionMap from '../components/SectionMap'
import SectionComment from '../components/SectionComment'
import SectionCollapse from '../components/SectionCollapse'
const { Title } = Typography;

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
      <SectionContentLeft />
      <SectionText>

        <Title level={4} style={{ marginBottom: 0, }}>
          Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kamu yang berpikir.
          AR-RUM AYAT : 21        </Title>
      </SectionText>
      <SectionInvitation />
      <SectionMap />
      <SectionCollapse />
      <SectionComment />
      <SectionFooter />

    </>
  );
}
