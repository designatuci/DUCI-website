import {Helmet} from "react-helmet";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav,Bot,Section,Text,Space,Icon,LoadingD,PageIcon } from '../Symbols.js'

// import testData from "./temp.json"

export default (props)=>{
    const [eventData,setEventData] = useState(null)
    useEffect(() => {
        let recursiveUpdate
        let nextCheck
        recursiveUpdate = ()=>{
            fetch(`https://raw.githubusercontent.com/designatuci/data/main/events.json?%uniquetime=${Math.round((new Date()).getTime()/120000)}`)
            .then((res) => res.json())
            .then((data) => {
                let eventData = {
                    upcoming:[],
                    past:[],
                    next:null
                }
                let now = new Date()
                for (let event of data.events) {
                // for (let event of data.events) {
                    let time = new Date((new Date(event.time)).getTime() + event.duration*60000)
                    if (now < time) {
                        eventData.next = event
                        eventData.upcoming.push(event)
                    } else {
                        eventData.past.push(event)
                    }
                }
                eventData.upcoming.pop()
                setEventData(eventData)
                // update in 60 seconds
                if (eventData.next != null) {
                    clearTimeout(nextCheck)
                    nextCheck = setTimeout(() => {
                        recursiveUpdate()
                    }, 60000);
                }
            })
        }
        recursiveUpdate()

    }, []);
    return <>
        <Helmet>
            <title>Event – Design at UCI</title>
        </Helmet>
        <div id="nav">
            <div className="wrapper center" style={{height:"88px",gridTemplateColumns:"1fr 1fr"}}>
                <div className="center row group left">
                    { (props.brand=="socials")?(<><Space w="8"/>
                        <a target="noreferer" href="https://discord.com/invite/MBVrKe9" className="item social center"><Icon w="24" h="24" hoverable src="nav-discord.svg" /></a>
                        <a target="noreferer" href="https://www.linkedin.com/company/design-at-uci" className="item social center"><Icon w="24" h="24" hoverable src="nav-linkedin.svg" /></a>
                        <a target="noreferer" href="https://www.instagram.com/designatuci/" className="item social center"><Icon w="24" h="24" hoverable src="nav-instagram.svg" /></a>
                        <a target="noreferer" href="https://www.facebook.com/designatuci/" className="item social center"><Icon w="24" h="24" hoverable src="nav-facebook.svg" /></a>
                    </>):(
                        <Link to="/" className="item center brand">
                            <Icon w="24" h="24" src="logo.svg" />
                            <Space w="16"/>
                            <Text>Design at UCI</Text>
                        </Link>
                    ) }
                </div>
                <div className="flex row bottom">
                        <Link to="/join/" className="button S fill blue"><Text>Join</Text></Link>
                </div>
            </div>
        </div>
        <Section className="center short page">
        {(eventData==null)
        // Loading animation
            ? (<LoadingD width="128"/>)
        // Large next event card
            : (eventData.next == null)
                ?(<div className="flex spaceChildrenSmall">
                    <Space h="64"/>
                    <Text size="XXL" className="wait show scale bold color blue">Stay Tuned</Text>
                    <Text className="wait show subtle color blue">There are currently no upcoming events.</Text>
                    <Space h="32"/>
                    <Text className="wait show subtle color gray">Be sure to <Link to="/join/" className="link">join us</Link> for notifications.</Text>
                </div>)
                :( (new Date(eventData.next.time)) > new Date() )
                    ?(<>
                        <div className="wait show flex row">
                            <Icon w="32" h="32" src="next-event.svg"/>
                            <Space w="16"/>
                            <Text size="L" className="color blue">Upcoming Event</Text>
                        </div>
                        <Text className="color blue wait show subtle d05">{formatRelativeDate(eventData.next.time)}</Text>
                        <LargeEvent event={eventData.next}/>
                    </>)
                    :(<>
                        <div className="wait show flex row">
                            <Icon w="32" h="32" src="live-event.svg"/>
                            <Space w="16"/>
                            <Text size="L" className="bold color red">Live Now</Text>
                        </div>
                        <LargeEvent event={eventData.next} live="true"/>
                    </>)
        }
        </Section>
        
        <Section className="center bare fill dusk" style={{height:"88px",display:"flex"}}>
            <div className="flex row">
                <Link to="/events/" className="color white">
                    <Text size="L" className="pagelink white">More events</Text>
                </Link>
                <Space h="32" w="64"/>
                <Link to="/events/all/" className="color white">
                    <Text size="L" className="pagelink white">View event archive</Text>
                </Link>
            </div>
        </Section>

        <Bot />
    </>
}

function LargeEvent(props) {
    return (
        <div className="slim flex left textAlignLeft spaceChildren largeEvent">
            <Text size="XL" className="bold">{props.event.title}</Text>
            <div className="split2 info">
                <div className="flex top row">
                    <Icon w="24" h="24" src="time-blue.svg"/>
                    <Space w="8"/>
                    <Text className="color blue">{formatDate(props.event.time)}</Text>
                </div>
                <div className="split2">
                    <div className="flex top row">
                        <Icon w="24" h="24" src="type-blue.svg"/>
                        <Space w="8"/>
                        <Text className="color blue">{props.event.type}</Text>
                    </div>
                    <div className="flex top row">
                        <Icon w="24" h="24" src="place-blue.svg"/>
                        <Space w="8"/>
                        <Text className="color blue">{props.event.place}</Text>
                    </div>
                </div>
            </div>
            {props.event.links != null && <div>
                {props.event.links.map((item,i)=>{
                    if (item.label=="Zoom Link")
                        if (props.live) return <a className="button S fill red" href={item.link}><Text>{item.label}<PageIcon color="var(--sky)" style={{width:"24px",marginLeft:"4px"}}/></Text></a>
                        else return <a className="button S fill blue" href={item.link}><Text>{item.label}<PageIcon color="var(--sky)" style={{width:"24px",marginLeft:"4px"}}/></Text></a>
                    else return <a className="button S fill gray" href={item.link}><Text>{item.label}<PageIcon color="var(--gray)" style={{width:"24px",marginLeft:"4px"}}/></Text></a>
                })}
            </div>}
            <Text className="color gray">{props.event.desc}</Text>
        </div>
    )
}

function typeIcon(type) {
    switch (type) {
        case "Workshop": return <Icon w="24" h="24" src="type-workshop.svg"/>
        default: return <></>
    }
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
function formatRelativeDate(date) {
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
        case 0: return "Jan"
        case 1: return "Feb"
        case 2: return "Mar"
        case 3: return "Apr"
        case 4: return "May"
        case 5: return "Jun"
        case 6: return "Jul"
        case 7: return "Aug"
        case 8: return "Sep"
        case 9: return "Oct"
        case 10: return "Nov"
        case 11: return "Dec"
        default: return "Error"
    }
}