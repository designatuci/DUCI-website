import React, { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import { Section,Text,Space,Icon,LoadingD } from '../Symbols.js'

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
            <title>Project Teams – Design at UCI</title>
        </Helmet>
        <Section className="center page short">
            <Icon  className="wait dx scale" w="96" h="96" src="pt.svg"/>
            <Text size="XXL" className="wait dx scale">Project Teams</Text>
            <Space h="16"/>
            <div className="flex left textAlignLeft slim spaceChildrenSmall">
                <Text className="color gray">A multi-week program where you work on a team to design or re-design a prototype product. Open for all experience levels! Teams present at the end and get the chance to recieve prizes. This is an opportunity that will give you more work to display in your portoflio and learn more about the UX/UI design process with help.</Text>
                <Text className="color gray">Project Teams usually begins in the first weeks of the academic quarter.</Text>
                <Text className="color gray">To get involved, <Link to="/join/" className="link">join us</Link> to get notifications about when the next applications come out!</Text>
            </div>
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