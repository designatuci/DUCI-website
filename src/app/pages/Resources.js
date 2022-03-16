import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Section,Text,Icon, Space } from '../Symbols.js'

export default (props)=>{
    return <>
        <Helmet>
            <title>Resources – Design at UCI</title>
        </Helmet>
        <Section className="page short bareTop">
            <Space h="0"/>
            <div className="split2" style={{gap:"32px"}}>
                {[
                    {title:"Design-a-thon",link:"/designathons/",desc:"Our biggest event held every year. Teams design and compete for prizes",
                    main:"blue",accent:"gray",background:"var(--sky)",icon:"res-designathon.svg",
                    },
                    {title:"Project Teams",link:"/pt/",desc:"Work on a team to design a beautiful large-scale product.",
                        main:"red",accent:"gray",background:"var(--blush)",icon:"res-pt.svg",
                    },
                    {title:"Featured Resources",link:"/resources/featured/",desc:"Explore our curated collection of useful online tools, guides, and more.",
                        main:"orange",accent:"gray",background:"var(--peach)",icon:"res-featured.svg",
                    },
                    {title:"Merchandise",link:"/merch/",desc:"Support and represent Design at UCI.",
                        main:"green",accent:"gray",background:"var(--mint)",icon:"res-merch.svg",
                    },
                    {title:"Newsletter Archive",link:"https://us16.campaign-archive.com/home/?u=96e1277e37e6f4c2940cd1dc9&id=3cdf6c3ea8",desc:"View past newsletters.",
                        newTab:true, main:"black",accent:"gray",background:"var(--silver)",icon:"res-archive.svg",
                    },
                    {title:"Board Blogs",link:"https://medium.com/@designatuci",desc:"Learn more about the people behind Design at UCI.",
                        newTab:true, main:"black",accent:"gray",background:"var(--silver)",icon:"res-blog.svg",
                    },
                ].map((card,i)=>{
                    return (card.newTab)?
                    <a href={card.link} target="noreferrer" style={{background:card.background, ...card.style}} className="wait dx show card flex left fill sky spaceChildrenSmall">
                        <Icon w="192" h="96" src={card.icon} style={{marginTop:"-32px",margin:"-16px",marginBottom:"0"}} />
                        <Text size="L" className={`bold color ${card.main}`}>{card.title}</Text>
                        <Text className={`color ${card.accent}`}>{card.desc}</Text>
                    </a>
                    :
                    <Link to={card.link} style={{background:card.background, ...card.style}} className="wait dx show card flex left fill sky spaceChildrenSmall">
                        <Icon w="192" h="96" src={card.icon} style={{marginTop:"-32px",margin:"-16px",marginBottom:"0"}} />
                        <Text size="L" className={`bold color ${card.main}`}>{card.title}</Text>
                        <Text className={`color ${card.accent}`}>{card.desc}</Text>
                    </Link>
                })}
            </div>
            <style>{`
                
            `}</style>
        </Section>
    </>
}