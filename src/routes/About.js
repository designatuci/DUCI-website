import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Nav, Bot, Section, Photo, Text, Space, Icon } from '../Symbols.js'

export default (props)=>{
    return <>
        <Helmet>
            <title>About – Design at UCI</title>
        </Helmet>
        <Nav />
        <div id="carousel" className="page hint">
            <Section className="short">
                <div className="narrow" style={{color:"white"}}>
                    <div></div>
                    <Text className="wait subtle d05">Nice to meet you</Text>
                    <Space block h="16"/>
                    <Text size="XXXL" className="block-paragraph wait show scale l3 bold color white">
                        {"We're the premier club for UI, UX, and graphic design at the University of California Irvine.".split(" ").map((word,i)=>{
                            return <Text size="XXXL" className="wait dx l2 bold">{word}<pre> </pre></Text>
                        })}
                    </Text>
                    {/* <Text size="XXL" className="wait scale bold">We're the premier club for UI, UX, and graphic design at the University of California Irvine.</Text> */}
                </div>
            </Section>
            {/* <div className="noise"></div> */}
        </div>
        <img src="/static/photo/img1.png"></img>
        <style>{`
            #carousel {
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                position: relative;
                background-color: var(--gray);
                background-image: url(/static/photo/img1.png);
                background-size: cover;
                background-position: center;
            }
            #carousel .text {
                text-shadow: 4px 4px 16px #0018;
            }
            #carousel .noise {
                pointer-events: none;
                background-image: url(/static/photo/static.gif);
                background-size: 32px;
                background-position: center;
                background-repeat: repeat;
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                opacity: 0.12;
                mix-blend-mode: screen;
            }
        `}</style>
        <Section className="">
            <Text size="XL" className="wait slim">
                We provide a friendly space with helpful resources for students to become better designers.
            </Text>
            <Space block h="16"/>
            <div className="split2" style={{textAlign:"left"}}>
                <div className="narrow wait dx">
                    <Text className="paragraph middle">
                        Whether they're just starting out, or have been designing for several years. Through community, education, and collaboration, we strive to find meaningful ways to support and foster a design community.
                    </Text>
                    <Space block h="32"/>
                    <Link to="/resources/" className="color blue">
                        <Text className="pagelink">View resources</Text>
                    </Link>
                </div>
                <div className="narrow wait dx">
                    <Text className="paragraph middle">
                        Design at UCI meets once a week for a general meeting on most weeks while the academic quarter is in session. Join us on our social media pages and newsletter to get the latest updates regarding workshops, meetings and events. We can't wait to meet you!
                    </Text>
                    <Space block h="32"/>
                    <Link to="/events/" className="color blue">
                        <Text className="pagelink">View events</Text>
                    </Link>
                </div>
                <div className="narrow wait">
                    <Text className="paragraph middle">
                        There are no requirements to join, everyone is welcome to attend our meetings and use the resources we provide. Although some events may be exlcusive to UCI students, we also host events with participants around the globe.
                    </Text>
                    <Space block h="32"/>
                    <Link to="/join/" className="color blue">
                        <Text className="pagelink">Join for notifications</Text>
                    </Link>
                </div>
            </div>
        </Section>
        <Section className="short center fill color gray">
            <Text>Partners</Text>
            <div className="split3" style={{columnGap:"128px"}}>
                <a target="noreferer" href="https://www.ics.uci.edu/">
                    <Icon w="256" h="128" src="logo-uci.svg"/>
                </a>
                <a target="noreferer" href="https://www.sketch.com/">
                    <Icon w="256" h="128" src="logo-sketch.svg"/>
                </a>
                <div className="center">
                    <Link to="/contact/">
                        <Text>Want to work with us?</Text>
                    </Link>
                </div>
            </div>
            
        </Section>
        <style>{`
            #boardMembers .wrapper > .center::after {
                content: "";
                flex: auto;
                display: block;
                width: 100%;
            }
            #boardMembers .wrapper > .center {
                width: 100%;
                justify-content: center;
                flex-wrap: wrap;
            }
            #boardMembers .item {
                align-self: flex-start;
                width: 100%;
                max-width: 210px;
                display; inline-block;
                margin-bottom: 64px;
            }
            @media only screen and (max-width: 768px) {
                #boardMembers .item {
                    width: 50%;
                }
                #boardMembers .wrapper > .center {
                    width: calc(100% + 32px);
                }
            }
            @media only screen and (max-width: 340px) {
                #boardMembers .item {
                    width: 100%;
                }
            }
            #boardMembers .item .photo {
                position: relative;
                width: 88%;
                max-width: 192px;
                border-radius: 12px;
                background-color: var(--silver);
                margin-bottom: 16px;
            }
            #boardMembers .item .photo > div {
                padding-bottom:100%;
            }
        `}</style>
        <Section className="center" id="boardMembers">
            <div style={{marginBottom:"64px"}}>
                <Text size="XL">Board Members</Text>
            </div>
            <div className="center row">
                {
                    [
                        {
                            name:"Hannah Limary",position:"President",color:"blue",photo:"Hannah_Limary.png",
                            links:{linkedin:"https://www.linkedin.com/in/hannah-limary",website:"https://hannahlimary.squarespace.com/"}
                        },{
                            name:"Evangeline Gao",position:"Vice President",color:"blue",photo:"Evangeline_Gao.png",
                        },{
                            name:"Kailer Garcia",position:"Creative Director",color:"blue",photo:"Kailer_Garcia.png",
                            links:{linkedin:"https://www.linkedin.com/in/kailer/",website:"https://www.kailerg.com/"}
                        },{
                            name:"Isabel Pham",position:"Visual Designer",color:"blue",photo:"Isabel_Pham.png",
                            links:{linkedin:"https://www.linkedin.com/in/isabe1pham/"}
                        },{
                            name:"Vivian Nguyen",position:"Content Creator",color:"blue",photo:"Vivian_Nguyen.png",
                            links:{linkedin:"https://www.linkedin.com/in/vivvnguyenn/"}
                        },{
                            name:"Amy Steinmetz",position:"Financial Chair",color:"blue",photo:"Amy_Steinmetz.png",
                            links:{linkedin:"https://www.linkedin.com/in/amysteinmetz/",website:"https://uxfol.io/steinmea",instagram:"https://www.instagram.com/amytallgirl/"}
                        },{
                            name:"Carly Chan",position:"Marketing Director",color:"green",photo:"Carly_Chan.png",
                            links:{linkedin:"https://www.linkedin.com/in/carlychan/",website:"https://carlychan.com/",instagram:"https://www.instagram.com/_carlychan_/"}
                        },{
                            name:"Iantha Khan",position:"Marketing",color:"green",photo:"missing.svg",
                        },{
                            name:"Jolin Huang",position:"Marketing",color:"green",photo:"Jolin_Huang.png",
                            links:{linkedin:"https://www.linkedin.com/in/jolin-huang-30a4451b0/",website:"https://jolinhuang9090.wixsite.com/uxuiportfolio",instagram:"https://www.instagram.com/j.huanggg/"}
                        },{
                            name:"Kevin Tsai",position:"Industry Outreach",color:"red",photo:"missing.svg",
                        },{
                            name:"Vivian Lin",position:"Industry Outreach",color:"red",photo:"Vivian_Lin.png",
                            links:{linkedin:"https://www.linkedin.com/in/vivianplin/",instagram:"https://www.instagram.com/strawbbyv/"}
                        },{
                            name:"Meghna Kaligotla",position:"Workshop Committee",color:"red",photo:"missing.svg",
                        },{
                            name:"Vivian Chu",position:"Workshop Committee",color:"red",photo:"Vivian_Chu.png",
                            links:{linkedin:"https://www.linkedin.com/in/vivianchu204/"}
                        },{
                            name:"Sonali Chellappa",position:"Project Teams Committee",color:"pink",photo:"Sonali_Chellappa.png",
                        },{
                            name:"Gabby Tom",position:"Project Teams Committee",color:"pink",photo:"missing.svg",
                        },{
                            name:"Juhi Patel",position:"Project Teams Committee",color:"pink",photo:"missing.svg",
                        },
                    ].map((person,i)=>{
                        return (<div className="item center column">
                            <Photo src={`portrait/${person.photo}`}><div/></Photo>
                            <Text size="L">{person.name}</Text>
                            <Text className="color gray" style={{marginTop:"8px"}}>{person.position}</Text>
                            <div className="flex row" style={{marginTop:"4px"}}>
                                {(person.links != null) && Object.keys(person.links).map((key)=>{
                                    return <a target="noreferer" href={person.links[key]} style={{padding:"4px"}}>
                                        <Icon hoverable src={`nav-${key}.svg`} w="20" h="20"/>
                                    </a>
                                })}
                            </div>
                        </div>)
                    })
                }
            </div>
            <Space block h="8"/>
            <div style={{marginBottom:"64px"}}>
                <Text size="XL">Board Alumni</Text>
            </div>
            <div className="center row">
                {
                    [
                        // -2022
                        {name:"divider",year:"2022"},
                        {
                            name:"Kailer Garcia",position:"Creative Director",color:"blue",photo:"Kailer_Garcia.png",
                            links:{linkedin:"https://www.linkedin.com/in/kailer/",website:"https://www.kailerg.com/"}
                        },
                        // -2021
                        {name:"divider",year:"2021"},
                        {name:"Jody Jamin",position:"President",color:"blue",photo:"missing.svg"},
                        {name:"Ivy Thong",position:"Vice President",color:"blue",photo:"missing.svg"},
                        {name:"Andrew Benson",position:"Financial Chair",color:"blue",photo:"missing.svg"},
                        {name:"Laney Dang",position:"Marketing Director",color:"green",photo:"missing.svg"},
                        {name:"John Ly",position:"Marketing",color:"green",photo:"missing.svg"},
                        {name:"Ashlyn Riambon",position:"Marketing",color:"green",photo:"missing.svg"},
                        {name:"Stella Adriana",position:"Industry Outreach",color:"red",photo:"missing.svg"},
                        {name:"Sophia Huang",position:"Workshop Committee",color:"red",photo:"missing.svg"},
                        {name:"Sruthi Ramabadran",position:"Social Coordinator",color:"red",photo:"missing.svg"},
                        {name:"Jonathan Fung",position:"Project Teams Committee",color:"pink",photo:"missing.svg"},
                        {name:"Angela Martin",position:"Project Teams Committee",color:"pink",photo:"missing.svg"},
                        // -2020
                        {name:"divider",year:"2020"},
                        {name:"Tiffany Nguyen",position:"President",color:"blue",photo:"missing.svg"},
                        {name:"Nguyen Dang",position:"Visual Designer",color:"blue",photo:"missing.svg"},
                        {name:"Kacey Diep",position:"Finnacial Chair",color:"blue",photo:"missing.svg"},
                        {name:"Akshita Nathani",position:"Industry Outreach",color:"red",photo:"missing.svg"},
                        {name:"Danny Pham",position:"Social Coordinator",color:"red",photo:"missing.svg"},
                        {name:"Sabrina Lee",position:"Social Coordinator",color:"red",photo:"missing.svg"},
                        {name:"Dachelle Alo",position:"Project Teams Committee",color:"pink",photo:"missing.svg"},
                    ].map((person,i)=>{
                        if (person.name=="divider") {
                        return <div style={{width:"100%",paddingTop:"32px",boxShadow:"0 -12px 24px -24px var(--gray)",marginBottom:"64px",}}><Text className="color blue">Departed {person.year}</Text></div>
                        } else {
                            return (<div className="item center column">
                                {/* <Photo src={`portrait/${person.photo}`}><div/></Photo> */}
                                <Text size="L">{person.name}</Text>
                                <Text className="color gray" style={{marginTop:"8px"}}>{person.position}</Text>
                                <div className="flex row" style={{marginTop:"4px"}}>
                                    {(person.links != null) && Object.keys(person.links).map((key)=>{
                                        return <a target="noreferer" href={person.links[key]} style={{padding:"4px"}}>
                                            <Icon hoverable src={`nav-${key}.svg`} w="20" h="20"/>
                                        </a>
                                    })}
                                </div>
                            </div>)
                        }
                    })
                }
            </div>

        </Section>
        <Bot />
    </>
}