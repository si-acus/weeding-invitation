import {
    FloatButton,
    Typography,
} from 'antd';
import { EnvironmentOutlined, EllipsisOutlined, TeamOutlined, CalendarOutlined, FormOutlined } from '@ant-design/icons';
import SectionHead from './SectionHead'
import SectionFooter from './SectionFooter'
import SectionText from './SectionText'
import SectionContentRight from './SectionContentRight'
import SectionContentLeft from './SectionContentLeft'
import SectionInvitation from './SectionInvitation'
import SectionMap from './SectionMap'
import SectionComment from './SectionComment'
import SectionCollapse from './SectionCollapse'
import ModalContent from './ModalContent'

const { Title } = Typography;

export default function Home() {
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
