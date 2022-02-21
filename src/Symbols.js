import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

export function Nav(props) {
    const [mobileExpand,setMobileExpand] = useState(false)
    const toggleMobileExpand = ()=>{ setMobileExpand(!mobileExpand) }
    return <>
        {!(props.clear) && <div id="navSpacer"/>}
        <div id="nav" mobile-expand={mobileExpand?"true":"false"} className={props.clear?"clear":""}>
            <div className="wrapper center wide">
                <div className="center row group left">
                    { (props.brand=="socials")?(<><Space w="8"/>
                        <a target="noreferer" href="https://www.tiktok.com/@design_at_uci" className="item social center"><Icon w="24" h="24" hoverable src="nav-tiktok.svg" /></a>
                        <a target="noreferer" href="https://www.instagram.com/designatuci/" className="item social center"><Icon w="24" h="24" hoverable src="nav-instagram.svg" /></a>
                        <a target="noreferer" href="https://discord.com/invite/MBVrKe9" className="item social center"><Icon w="24" h="24" hoverable src="nav-discord.svg" /></a>
                        <a target="noreferer" href="https://www.facebook.com/designatuci/" className="item social center"><Icon w="24" h="24" hoverable src="nav-facebook.svg" /></a>
                        <a target="noreferer" href="https://www.linkedin.com/company/design-at-uci" className="item social center"><Icon w="24" h="24" hoverable src="nav-linkedin.svg" /></a>
                    </>):(
                        <Link to="/" className="item center brand">
                            <Icon w="24" h="24" src="logo.svg" />
                            <Space w="16"/>
                            <Text>Design at UCI</Text>
                        </Link>
                    ) }
                </div>
                <div className="center row group center">
                    <Link to="/join/" className="item center">
                        <Text>Join</Text>
                    </Link>
                    <Link to="/events/" className="item center">
                        <Text>Events</Text>
                    </Link>
                    <Link to="/resources/" className="item center">
                        <Text>Resources</Text>
                    </Link>
                </div>
                <div className="center row group right">
                    <Link to="/about/" className="item center">
                        <Text>About</Text>
                    </Link>
                    <Link to="/contact/" className="item center">
                        <Text>Contact</Text>
                    </Link>
                </div>
            </div>
            <div className="wrapper center mobile">
                <div className="center row group left">
                    { (props.brand=="socials")?(<><Space w="8"/>
                        <a href="https://www.tiktok.com/@design_at_uci" className="item social center"><Icon w="24" h="24" hoverable src="nav-tiktok.svg" /></a>
                        <a href="https://www.youtube.com/channel/UC3LqXqBN-R7C91ttlyXHhIQ" className="item social center"><Icon w="24" h="24" hoverable src="nav-youtube.svg" /></a>
                        <a href="https://discord.com/invite/MBVrKe9" className="item social center"><Icon w="24" h="24" hoverable src="nav-discord.svg" /></a>
                        <a href="https://www.linkedin.com/company/design-at-uci" className="item social center"><Icon w="24" h="24" hoverable src="nav-linkedin.svg" /></a>
                        <a href="https://www.instagram.com/designatuci/" className="item social center"><Icon w="24" h="24" hoverable src="nav-instagram.svg" /></a>
                    </>):(
                        <Link to="/" className="item center brand">
                            <Icon w="24" h="24" src="logo.svg" />
                            <Space w="24"/>
                            <Text>Design at UCI</Text>
                        </Link>
                    ) }
                </div>
                <div className="center row group right">
                    <a className="item center" id="navToggle" onClick={toggleMobileExpand} >
                        <Icon w="24" h="24" src="nav-menu.svg" />
                    </a>
                </div>
                <div className="links spaceChildren">
                    {[
                        {label:"Events",url:"/events/"},
                        {label:"Resources",url:"/resources/"},
                        {label:"About",url:"/about/"},
                        {label:"Contact",url:"/contact/"},
                    ].map((link,i)=>{
                        return  <Link to={link.url} className="item center">
                            <Text size="L">{link.label}</Text>
                        </Link>
                    })}
                    <Link to="/join/" className="item center button fill sky">
                        <Text size="L">Join</Text>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export function Bot(props) {
    return <Section id="bot" className="short">
        <div className="split3">
            <div style={{color:"white"}}>
                <Link to="/">
                    <Icon w="24" h="24" src="logo.svg" />
                    <Space w="12"/>
                    <Text>Design at UCI</Text>
                </Link>
                <Space block h="48"/>
                <div className="spaceChildrenSmall">
                    {[
                        {icon:"tiktok.svg",label:"TikTok",link:"https://www.tiktok.com/@design_at_uci"},
                        {icon:"instagram.svg",label:"Instagram",link:"https://www.instagram.com/designatuci/"},
                        {icon:"facebook.svg",label:"Facebook",link:"https://www.facebook.com/designatuci"},
                        {icon:"discord.svg",label:"Discord",link:"https://discord.com/invite/MBVrKe9"},
                        {icon:"youtube.svg",label:"YouTube",link:"https://www.youtube.com/channel/UC3LqXqBN-R7C91ttlyXHhIQ"},
                        {icon:"linkedin.svg",label:"LinkedIn",link:"https://www.linkedin.com/company/design-at-uci"},
                    ].map((item)=>{
                        return <div><a href={item.link} target="noreferer"><Icon w="24" h="24" src={item.icon} style={{marginRight:"16px"}}/><Text>{item.label}</Text></a></div>
                    })}
                </div>
                <Space h="32"/>
            </div>
            <div className="spaceChildrenSmall">
                <div><Link block to="/resources/" className="mark"><Text>Resources</Text></Link></div>
                <Space h="16"/>
                <div><Link block to="/resources/featured/"><Text>Featured Resources</Text></Link></div>
                <div><Link block to="/pt/"><Text>Project Teams</Text></Link></div>
                <div><Link block to="/merch/"><Text>Merch</Text></Link></div>
                <div><Link block to="/designathons/"><Text>Design-a-thon</Text></Link></div>
                <div><a block target="noreferer" href="https://medium.com/@designatuci"><Text>Board Blogs</Text></a></div>
                <div><a block target="noreferer" href="https://us16.campaign-archive.com/home/?u=96e1277e37e6f4c2940cd1dc9&id=3cdf6c3ea8"><Text>Newsletter Archive</Text></a></div>
                <Space h="16"/>
            </div>
            <div className="spaceChildrenSmall">
                <div><Link to="/join/" className="mark"><Text>Join</Text></Link></div>
                <Space h="16"/>
                <div><Link to="/contact/"><Text>Contact</Text></Link></div>
                <div><Link to="/events/"><Text>Events</Text></Link></div>
                <div><Link to="/about/"><Text>About</Text></Link></div>
            </div>
        </div>
        <div className="color gray">
            <Space h="32"/>
            <div><Icon w="18" h="18" src="copyright-gray.svg"/><Space w="8"/> <Text>Copyright {(new Date()).getFullYear()} Design at UCI</Text></div>
            <Space h="16"/>
            <div><Text>Developed by <a className="mark" href="https://www.kailerg.com/">Kailer Garcia</a></Text></div>
            <Space block h="64"/>
            <Text>This website uses Google Analytics, their privacy policy can be found <a target="noreferer" className="mark" href="https://www.google.com/policies/privacy/">here</a>.</Text>
        </div>
    </Section>
}

export function Section(props) {
    return <div className={"section "+props.className} id={props.id} style={props.style}>
        <div className={"wrapper "+props.wrapperClass}>
            {props.children}
        </div>
    </div>
}

export function Text(props) {
    let style = {
        ...props.style
    }    
    return <div {...props} className={"text "+props.size+" "+props.className} style={props.style}>
        {props.children}
    </div>
}

export function Icon(props) {
    let style = {
        width:props.w+"px",
        height:props.h+"px",
        backgroundImage:`url(/static/icon/${props.src})`,
        ...props.style
    }
    return <div id={props.id} className={`icon ${props.hoverable?"hoverable ":""}${props.className}`} style={style} >
        {props.children}
    </div>
}

export function Photo(props) {
    const [photoData,setphotoData] = useState(null)
    let style = {
        backgroundImage:photoData,
        ...props.style
    }
    useEffect(() => {
        if (props.lazy) {
            setTimeout(() => {
                setphotoData(`url(/static/photo/${props.src})`)
            }, 500);
        } else {
            setphotoData(`url(/static/photo/${props.src})`)
        }
    
      }, []);
    return <div className={`photo ${props.className}`} style={style} id={props.id} >
        {props.children}
    </div>
}

export function Space(props) {
    let style = {
        width:props.w+"px",
        height:props.h+"px",
        ...props.style
    }
    if (props.block) {
        style.display="block"
    }
    return <div className={"space "+props.className} {...props} style={style}>
    </div>
}

export function LoadingD(props) {
    return <div>
        <svg
            id="anim-load"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={1.5}
            {...props}
        >
        <path
            d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
            fill="none"
            strokeWidth="4"
            stroke="var(--yellow)"
        />
        <path
            d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
            fill="none"
            strokeWidth="4.1"
            stroke="var(--orange)"
        />
        <path
            d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
            fill="none"
            strokeWidth="4.2"
            stroke="var(--blue)"
        />
        </svg>
        <style>{`
            #anim-load {
                will-change: contents;
                opacity: 0;
                animation: anim-load-fadein 0.2s 0.2s linear forwards;
            }
            #anim-load path {
                stroke-dasharray: 30px 191px;
                transform-origin: center;
                animation: anim-load 3.0s cubic-bezier(.2,.76,.83,.45) infinite;
            }
            #anim-load path:nth-child(2) { animation-delay: -0.3s; }
            #anim-load path:nth-child(3) { animation-delay: -0.6s; }
            @keyframes anim-load {
                0% { stroke-dashoffset: 662px; }
                60% { stroke-dasharray: 60px 161px; }
                100% { stroke-dashoffset: 0px; }
            }
            @keyframes anim-load-fadein {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
        `}</style>
    </div>
}

export function PageIcon(props) {
    return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit={2}
        {...props}
        className={"icon "+props.className}
      >
        <path
          d="M10.617 5H9a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4v-1.617a1 1 0 00-2 0V15a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h1.617a1 1 0 000-2zm6.969 0l-7.137 7.136a1.002 1.002 0 000 1.415c.391.39 1.024.39 1.415 0L19 6.414v3.642a1 1 0 002 0V4a1 1 0 00-1-1h-6.056a1 1 0 000 2h3.642z"
          fill={props.color}
        />
      </svg>
    )
}

export function CheckIcon(props) {
    if (props.check==true) {
        return (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit={2}
                fill={props.color} width={props.r} height={props.r}  
            {...props}
            >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM6.99 13.768l2.828 2.828a1.5 1.5 0 002.121 0l7.071-7.071a1.5 1.5 0 10-2.121-2.121l-6.01 6.01-1.768-1.768a1.501 1.501 0 00-2.121 2.122z" />
            </svg>
        )

    } else {
        return (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit={2}
                fill={props.color} width={props.r} height={props.r}  
            {...props}
            >
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 3c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9z" />
            </svg>
        )
    }
}