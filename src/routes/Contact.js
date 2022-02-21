import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Nav,Bot,Section,Text,Space,Icon } from '../Symbols.js'

export default (props)=>{
    return <>
        <Helmet>
            <title>Contact – Design at UCI</title>
        </Helmet>
        <Nav/>
        <Section className="center page">
            <div className="split2 slim">
                <div className="flex">
                    <a className="wait scale show dx button fill blue" href="mailto:hello@designatuci.com">
                        <Text size="L">hello@designatuci.com</Text>
                    </a>
                    <Space h="32" block/>
                    <Text className="color gray">Do you have a question, comment, or feedback for us? Don't hessitate to send us an email.</Text>
                </div>
                <div className="flex">
                    <a className="wait scale show dx button fill gray" href="mailto:contact@designatuci.com">
                        <Text size="L">contact@designatuci.com</Text>
                    </a>
                    <Space h="32" block/>
                    <Text className="color gray">Want to collaborate with Design at UCI? You can reach the campus' design community easily through us.</Text>
                </div>
            </div>
            <Space h="32"/>
            <div>
                <Text className="color gray">Reach out to us on social media</Text>
                <Space h="16" block/>
                <div className="flex row">
                    <a style={{padding:"12px"}} target="noreferer" href="https://www.tiktok.com/@design_at_uci" className="wait show dx drop item social center"><Icon w="24" h="24" hoverable src="nav-tiktok.svg" /></a>
                    <a style={{padding:"12px"}} target="noreferer" href="https://www.youtube.com/channel/UC3LqXqBN-R7C91ttlyXHhIQ" className="wait show dx drop item social center"><Icon w="24" h="24" hoverable src="nav-youtube.svg" /></a>
                    <a style={{padding:"12px"}} target="noreferer" href="https://discord.com/invite/MBVrKe9" className="wait show dx drop item social center"><Icon w="24" h="24" hoverable src="nav-discord.svg" /></a>
                    <a style={{padding:"12px"}} target="noreferer" href="https://www.linkedin.com/company/design-at-uci" className="wait show dx drop item social center"><Icon w="24" h="24" hoverable src="nav-linkedin.svg" /></a>
                    <a style={{padding:"12px"}} target="noreferer" href="https://www.instagram.com/designatuci/" className="wait show dx drop item social center"><Icon w="24" h="24" hoverable src="nav-instagram.svg" /></a>

                </div>
            </div>
        </Section>
        <Bot/>
    </>
}