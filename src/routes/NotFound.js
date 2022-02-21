import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Nav,Bot,Section,Text,Space,LoadingD } from '../Symbols.js'

export default (props)=>{
    const [linksData,setLinksData] = useState(null)
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/designatuci/data/main/hyperlinks.json?%uniquetime=${Math.round((new Date()).getTime()/120000)}`)
            .then((res) => res.json())
            .then((data) => {
                let path = window.location.pathname.substr(1)
                console.log(path)
                for (let link of data.links) {
                    if (link.code==path || link.code+"/"==path) {
                        data.redirect = true
                        window.location.replace(link.link)
                    }
                }
                setLinksData(data)
        })

    }, []);
    return <>
        <Helmet>
            <title>404 – Design at UCI</title>
        </Helmet>
        <Nav/>
        <Section className="center page hint" wrapperClass="narrow">
        {(linksData==null) ?
            <div className="flex" style={{padding:"64px 0"}}>
                <LoadingD width="128"/>
            </div>
            : (linksData.redirect == true) ?
                <div>
                    <Text className="color blue" size="L">One moment...</Text>
                </div>
                :
                <div className="wait show flex spaceChildren">
                    <div className="flex">
                        <Text className="color blue wait show scale" style={{fontSize:"88px"}}>404</Text>
                        <Text className="color blue" size="L">Page Not Found</Text>
                    </div>
                    <Space h="8"/>
                    <Text className="color gray">The URL <Text className="bold" style={{margin:"0 4px"}}>{window.location.hostname+window.location.pathname}</Text> does not exist.</Text>
                    <Text className="color gray">If you believe this is a mistake, please <Link to="/contact/" className="link">contact us</Link>.</Text>
                </div>
        }
        </Section>
        <Section className="center flex bare fill black" style={{height:"88px",marginBottom:"-88px"}}>
            <Text className="color blue">Sitemap Directory</Text>
        </Section>
        <Bot />
    </>
}