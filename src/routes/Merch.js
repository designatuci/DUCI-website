import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Nav,Bot,Section,Text,Space,Icon,Photo,LoadingD,PageIcon } from '../Symbols.js'

export default (props)=>{
    const [eventData,setEventData] = useState(null)
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/designatuci/data/main/events.json")
            .then((res) => res.json())
            .then((data) => {
                setEventData(data.events)
            })
    }, []);
    return <>
        <Helmet>
            <title>Merch – Design at UCI</title>
        </Helmet>
        <Nav/>
        <Section className="center short" style={{background:"linear-gradient(10deg,var(--silver) -50%,var(--green))"}}>
            <Text size="XXL" className="wait dx bold color white" style={{textShadow:"0 8px 16px var(--green)"}}>Merchandise</Text>
            <Text className="wait dx subtle color white">Help support Design at UCI—so we can continue to host our free programs and events.</Text>
        </Section>
        <Section className="short">
            <div className="flex left spaceChildren">
                <Text size="XL">Fall-Winter 2021 Stickers</Text>
                {/* <a className="button S fill green" target="noreferer" href="/buy"><Text>Purchase form<PageIcon color="var(--sky)" style={{width:"24px",marginLeft:"4px"}}/></Text></a> */}
                <div className="flex left spaceChildrenSmall">
                    <Text className="color orange">Sold out</Text>
                    <Text className="color gray">High quality, weather-proof vinyl stickers with exclusive, original designs. Approximately 3x3 inches.</Text>
                </div>
            </div>
            <Space h="0"/>
            <style>{`
                .split4 .photo {
                    height: unset;
                }
            `}</style>
            <div className="split4">
                <div className="flex top left spaceChildrenSmall">
                    <Photo className="relative" src="Sf21-frozen.png">
                        <div style={{paddingBottom:"100%"}}/>
                        <Photo className="background" src="Sf21-frozen-effect1.png" id="holo-effect1"/>
                        <Photo className="background" src="Sf21-frozen-effect2.png" id="holo-effect2"/>
                        <style>{`
                            #holo-effect1, #holo-effect2 {
                                opacity: 0;
                                height: 100%;
                                mix-blend-mode: darken;
                                filter: saturate(3) hue(0deg);
                                animation: effect-pulse 2s cubic-bezier(.62,.01,.51,1) infinite;
                            }
                            #holo-effect2 {
                                animation: effect-pulse 2s 0.2s cubic-bezier(.62,.01,.51,1) infinite;
                            }
                            @keyframes effect-pulse {
                                0% { opacity: 0; filter: saturate(3) hue-rotate(0deg); }
                                40% { opacity: 0.38; filter: saturate(3) hue-rotate(-360deg); }
                                80% { opacity: 0; filter: saturate(3) hue-rotate(0); }
                            }
                        `}</style>
                    </Photo>
                    <Text>Chill Out</Text>
                    <Text className="color blue">Holographic</Text>
                </div>
                {[
                    {name:"Bobaeater",price:"3",photo:"Sf21-bobaeater.png"},
                    {name:"Design is My Passion",price:"3",photo:"Sf21-passion.png"},
                    {name:"D@UCI Boba",price:"3",photo:"Sf21-boba.png"},
                ].map((item,i)=>{
                    return <div className="flex top left spaceChildrenSmall">
                        <Photo className="relative" src={item.photo}>
                            <div style={{paddingBottom:"100%"}}/>
                        </Photo>
                        <Text>{item.name}</Text>
                    </div>
                })}
            </div>
        </Section>
        <Section className="short">
            <div className="flex left spaceChildrenSmall">
                <Text size="XL">2020 Stickers</Text>
                <Text className="color orange">Sold out</Text>
            </div>
            <Space h="0"/>
            <div className="split4">
                {[
                    {name:"I Heart Design",price:"3",photo:"sticker-heart.svg"},
                    {name:"Pen Tool",price:"3",photo:"sticker-pentool.svg"},
                    {name:"Boba",price:"3",photo:"sticker-boba.svg"},
                ].map((item,i)=>{
                    return <div className="flex top left spaceChildrenSmall">
                        <Photo className="relative" src={item.photo}>
                            <div style={{paddingBottom:"100%"}}/>
                        </Photo>
                        <Text>{item.name}</Text>
                        <Text className="color gray">${item.price}</Text>
                    </div>
                })}
            </div>
        </Section>
        {/* <Section className="short">
            <div className="flex left spaceChildrenSmall">
                <Text size="XL" className="bold">Wallpaper</Text>
                <Text size="S" className="color blue">Free Downloads</Text>
                <Text className="color gray">Represent Design at UCI on your smartphone wallpaper.</Text>
            </div>
            <Space h="0"/>
            <div className="split3">
                {[
                    {name:"I Heart Design",price:"3",photo:"sticker-heart.svg"},
                    {name:"Pen Tool",price:"3",photo:"sticker-pentool.svg"},
                ].map((item,i)=>{
                    return <div className="flex top left spaceChildrenSmall">
                        <Photo className="relative" src={item.photo}>
                            <div style={{paddingBottom:"100%"}}/>
                        </Photo>
                        <Text>{item.name}</Text>
                        <div className="flex row top">
                            <Icon w="20" h="20" src="text-download.svg"/>
                            <Space w="8"/>
                            <Text className="color gray">Download</Text>
                        </div>
                    </div>
                })}
            </div>
        </Section> */}
        <Bot />
    </>
}

function formatDate(date) {
    let time = new Date(date)
    let str = ""
    str += mapDay(time.getDay()) + ", "
    str += mapMonth(time.getMonth()) + " "
    str += time.getDate() + " at "
    str += getHour(time.getHours()) + ":"
    str += getMinutes(time.getMinutes()) + " "
    str += getPeriod(time.getHours())
    str += " your time"
    return str
}
function formatCardDate(date) {
    let now = new Date()
    let time = new Date(date)
    let diff = now - time
    if (diff < 0) {
        diff = Math.abs(diff)
        const days = Math.floor(diff/(1000*60*60*24))
        if (days == 0) {
            return `Very soon`
        } else if (days <= 1) {
            return `In ${days} day`
        } else if (days <= 7) {
            return `In ${days} days`
        } else {
            let weeks = Math.round(days/7)
            if (weeks == 1) {
                return `In ${weeks} week`
            } else {
                return `In ${weeks} weeks`
            }
        }
    } else {
        const days = Math.floor(diff/(1000*60*60*24))
        if (days == 0) {
            return `Hours ago`
        } else if (days <= 1) {
            return `${days} day ago`
        } else if (days < 7) {
            return `${days} days ago`
        } else if (days < 30) {
            let weeks = Math.round(days/7)
            if (weeks == 1) {
                return `${weeks} week ago`
            } else {
                return `${weeks} weeks ago`
            }
        } else if (days < 120) {
            let months = Math.round(days/30)
            if (months == 1) {
                return `${months} month ago`
            } else {
                return `${months} months ago`
            }
        } else if (days < 365) {
            return "Several months ago"
        } else {
            return "Over a year ago"
        }
    }
}
function getHour(h) {
    if (h>12) {
        return h -12
    } else {
        return h
    }
}
function getMinutes(m) {
    if (m<10) {
        return "0"+m
    } else {
        return m
    }
}
function getPeriod(h) {
    if (h>12) {
        return "PM"
    } else {
        return "AM"
    }
}
function mapDay(n) {
    switch (n) {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
        default: return "Error"
    }
}
function mapMonth(n) {
    switch (n) {
        case 0: return "January"
        case 1: return "February"
        case 2: return "March"
        case 3: return "April"
        case 4: return "May"
        case 5: return "June"
        case 6: return "July"
        case 7: return "August"
        case 8: return "September"
        case 9: return "October"
        case 10: return "November"
        case 11: return "December"
        default: return "Error"
    }
}