import {Helmet} from "react-helmet";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Section,Text,Space,LoadingD,PageIcon } from '../Symbols.js'

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
            <title>Event Archive – Design at UCI</title>
        </Helmet>
        {/* <Section className="path bare">
            <div className="flex row top">
                <Link to="/events/" style={{alignSelf:"flex-start"}}>
                    <Text>Events</Text>
                </Link>
                <Text className="div">/</Text>
                <Link to="/events/all/" style={{alignSelf:"flex-start"}}>
                    <Text>All</Text>
                </Link>
            </div>
        </Section> */}
        <Section className="center short">
            <Text size="XL">All Events</Text>
        </Section>
        <Section className="center short fill gray">
                {(eventData==null)
                // Loading animation
                    ? (<LoadingD width="128" style={{marginBottom:"256px"}}/>)
                // Large next event card
                    : <div className="splitEventCard maxWidth textAlignLeft">
                        {eventData.map((event,i)=>{
                            let future = (new Date()) < (new Date(event.time))
                            return <div className={`fill ${future?"blue":"white"} card flex left spaceChildrenSmall`}>
                                <Text className={`color ${future?"sky":"gray"}`}>{event.type}</Text>
                                <Text size="L">{event.title}</Text>
                                {(event.links) && event.links.map((item,i)=>{
                                    if (item.label=="Recording")
                                        return <a target="noreferer"  className="button S fill blue" href={item.link}><Text>{item.label}<PageIcon color="var(--sky)" style={{width:"24px",marginLeft:"4px"}}/></Text></a>
                                    else if (item.label=="Zoom Link" || item.label=="Discord Link")
                                        return <></>
                                    else return <a target="noreferer" className="button S fill gray" href={item.link}><Text>{item.label}<PageIcon color="var(--gray)" style={{width:"24px",marginLeft:"4px"}}/></Text></a>
                                })}
                                <Text className={`color ${future?"sky":"gray"}`} style={{marginTop:"auto"}}>{formatRelativeDate(event.time)}</Text>
                            </div>
                        })}
                    </div>
                }
        </Section>
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
function formatRelativeDate(date) {
    let now = new Date()
    let time = new Date(date)
    let diff = now - time
    if (diff < 0) {
        diff = Math.abs(diff)
        const days = Math.round(diff/(1000*60*60*24))
        if (days == 0) {
            return `Today`
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