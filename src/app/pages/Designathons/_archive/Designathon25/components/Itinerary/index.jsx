import { Fragment, useState } from "react";
import cn from "./Itinerary.module.scss";

const DAYS = [
  { id: "fri", label: "FRI", title: "Friday - April 18th, 2025" },
  { id: "sat", label: "SAT", title: "Saturday - April 19th, 2025" },
  { id: "sun", label: "SUN", title: "Sunday - April 20th, 2025" },
];

// Full itinerary from designathon-website reference (itinerary-dates.tsx)
const ITINERARY = {
  fri: [
    { type: "time-mark", time: "3:30 PM", title: "Check-In Starts" },
    {
      type: "event",
      title: "Check-In",
      location: "DCE Courtyard (In-Person)",
      timeStart: "3:30 PM",
      timeEnd: "5:00 PM",
      description: "Please check in to confirm your attendance at DAUCI Designathon! If you are an in-person participant, check in at the DCE entrance. Please bring your government or student ID. You will be given a badge you must wear to each day of the event.",
    },
    {
      type: "event",
      title: "Opening Ceremony and Keynote Speaker + Panel",
      location: "DCE, Yosemite ABC (In-Person) + Zoom (Online)",
      timeStart: "4:30 PM",
      timeEnd: "5:30 PM",
      description: "Join us for the Opening Ceremony and official kickoff of the 2025 DAUCI Designathon and hear our opening keynote from Robyn Young, the Founder of Young & Co. Following this, we will have a keynote speaker panel made up of Alex Park (UX Design Manager at Riot Games), Tyler Vickers (Senior TPM at Amazon), and Miles Seiden (Founder of Miles Seiden Creative). Led by the DAUCI Designathon Directors Jasmine Wu and Laila Wafaie.",
      zoomURL: "https://uci.zoom.us/s/92513036552",
    },
    {
      type: "event",
      title: "Dinner & Team Formation",
      location: "DCE Courtyard (In-Person)",
      timeStart: "5:30 PM",
      timeEnd: "6:30 PM",
      description: "Enjoy Panda Express (chow mein and fried rice) for dinner alongside some pocky and chips. Mingle, network, and meet fellow designers over dinner! Start forming teams and brainstorming your project ideas.",
    },
    { type: "time-mark", time: "6:30 PM", title: "Designing Begins" },
    {
      type: "event",
      title: "Workshop: Basics of Figma & Prototyping with Commit the Change",
      location: "Yosemite ABC (In-Person) + Zoom (Online)",
      timeStart: "7:00 PM",
      timeEnd: "7:30 PM",
      description: "Learn about how to set up basic frames with a guide on the core tools and best practices when using Figma. We'll be going over how to organize your Figma workspace, useful plugins, and simple prototyping tips to get any beginner designer a head start on Figma's software. Hosted by Commit the Change.",
      zoomURL: "https://uci.zoom.us/s/96116679159",
    },
    { type: "time-mark", time: "7:30 PM", title: "Venue Closes" },
  ],
  sat: [
    { type: "time-mark", time: "8:00 AM", title: "Check-In Starts" },
    {
      type: "event",
      title: "Check-In & Breakfast",
      location: "DCE Courtyard (In-Person)",
      timeStart: "8:00 AM",
      timeEnd: "9:30 AM",
      description: "In person: Check in and grab a light breakfast of muffins and bagels to kick off your morning before a focused day of designing! Remember to bring your Badges.",
      boldPrefix: "In person:",
    },
    {
      type: "event",
      title: "Hiking Social",
      location: "Aldrich Park (In-Person)",
      timeStart: "10:00 AM",
      timeEnd: "11:00 AM",
      description: "Start your day with a hike around a beautiful nature scene in Aldrich Park! Led by Director Jerry Nguyen",
    },
    {
      type: "event",
      title: "Workshop: Notion for Building Design Portfolios",
      location: "DCE, 3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "11:00 AM",
      timeEnd: "12:00 PM",
      description: "Join us for a hands-on workshop designed to help you turn your design work into a compelling, professional story. Hosted by Ella Chung, Notion Campus Ambassador",
      zoomURL: "https://uci.zoom.us/s/94897604899",
    },
    {
      type: "event",
      title: "Lunch (with Notion)",
      location: "DCE Courtyard (In-Person)",
      timeStart: "12:00 PM",
      timeEnd: "1:30 PM",
      description: "Enjoy Mendicino sandwiches and In-N-Out Burgers with Notion and take a well-deserved design break! Mingle with other designers or continue working on your project with the team.",
    },
    {
      type: "event",
      title: "Workshop: AI by Design: An Approach to Strategic, Human-Centered AI",
      location: "DCE, 3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "1:30 PM",
      timeEnd: "2:15 PM",
      description: "As designers and product owners, we have a choice—when, where, how, and at what cost AI shows up in our work and lives. This \"AI By Design\" session explores foundational AI concepts and enhanced design processes to create AI initiatives that truly add value—and keep you in the conversation. Led by Erin from FourbyNorth",
      zoomURL: "https://uci.zoom.us/s/92750957032",
    },
    {
      type: "event",
      title: "Workshop: UX Principles",
      location: "DCE, 3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "2:15 PM",
      timeEnd: "3:15 PM",
      description: "Whether you're new to design or looking to refresh your fundamentals, this interactive session will walk you through the core principles of user experience design. Learn how to create intuitive, accessible, and user-centered products by applying key concepts like usability, hierarchy, feedback, and consistency.",
      zoomURL: "https://uci.zoom.us/j/3018853834",
    },
    {
      type: "event",
      title: "Workshop: Project Pitching with TEDxUCIrvine",
      location: "DCE, 3070 & 3080 (In-Person) + Zoom (Online)",
      timeStart: "3:15 PM",
      timeEnd: "4:15 PM",
      description: "You've built something great—now it's time to tell the story. In this workshop, learn how to pitch your project with clarity, confidence, and impact. We'll cover how to frame your problem, highlight user insights, and communicate your solution in a way that resonates with judges and stakeholders. Led by Tristan Rallos from TEDxUCIrvine",
      zoomURL: "https://uci.zoom.us/j/3018853834",
    },
    {
      type: "event",
      title: "Mentoring Hours",
      location: "DCE + Zoom (Online)",
      timeStart: "4:30 PM",
      timeEnd: "5:30 PM",
      description: "Need a second opinion? Want help refining your idea or feedback on your prototype? During this hour, mentors from a range of design backgrounds will be available to chat.",
      zoomURL: "https://uci.zoom.us/s/95918899660",
    },
    {
      type: "event",
      title: "Dinner",
      location: "DCE Courtyard (In-Person)",
      timeStart: "6:00 PM",
      timeEnd: "7:30 PM",
      description: "Fuel up for the last stretch with a hearty pizza dinner and take a breather with your team.",
    },
    {
      type: "event",
      title: "Karaoke",
      location: "DCE, Yosemite ABC (In-Person)",
      timeStart: "7:30 PM",
      timeEnd: "8:30 PM",
      description: "Wind down with karaoke with 2020s bangers! Hosted by Designathon Directors Jerry Nguyen and John Daniel Norombaba.",
    },
    { type: "time-mark", time: "8:30 PM", title: "Venue Closes" },
  ],
  sun: [
    { type: "time-mark", time: "8:00 AM", title: "Check-In Starts" },
    {
      type: "event",
      title: "Check-In and Breakfast",
      location: "ISEB Patio (In-Person)",
      timeStart: "8:00 AM",
      timeEnd: "9:00 AM",
      description: "In-person: Einstein Bagels will be served at the ISEB patio. Please have your badges ready to check off!",
      boldPrefix: "In-person:",
    },
    {
      type: "event",
      title: "Final Submissions Due on Devpost",
      location: "Devpost (Online)",
      timeStart: "9:00 AM",
      timeEnd: "9:00 AM",
      description: "All teams must submit their project to Devpost by this time and follow the instructions. This includes submitting the Figma Prototype, indication of online/in-person, writeup, team member names, and optionally a video submission. We will not accept any submissions after this time.",
    },
    {
      type: "event",
      title: "Judging Fair",
      location: "ISEB Patio (In-Person) + Devpost (Online)",
      timeStart: "10:00 AM",
      timeEnd: "12:00 PM",
      description: "In-person: Present your work science-fair style at assigned tables to our judges from IBM, Anduril, and Google. Online: Judges will review your Devpost asynchronously and evaluate based on rubric criteria. Make sure you submit a high quality video beforehand!",
      boldPrefix: "In-person:",
    },
    {
      type: "event",
      title: "Top 10 Finalist Pitches on Stage",
      location: "Antrepreneur Center (In-Person) + Zoom (Online)",
      timeStart: "2:30 PM",
      timeEnd: "3:15 PM",
      description: "Each top 10 team will give a 2-3 minute pitch of their product to a live panel of judges. Online teams will present to the judges on zoom at allotted times.",
      zoomURL: "https://uci.zoom.us/s/98256770100",
    },
    {
      type: "event",
      title: "Fireside Chat with Lawrence Ntim (ex. Founding Designer @ DropBox AI)",
      location: "Antrepreneur Center (In-Person) + Zoom (Online)",
      timeStart: "3:15 PM",
      timeEnd: "3:45 PM",
      description: "Join us for a Fireside Chat with Lawrence Ntim (ex. Founding Designer @ DropBox AI) as he shares insights from his journey in the design world, building products at the intersection of AI and user experience. Learn about his approach to innovation, storytelling through design, and navigating careers in tech.",
      zoomURL: "https://uci.zoom.us/s/98256770100",
    },
    {
      type: "event",
      title: "Closing Ceremony & Winners Announced",
      location: "Antrepreneur Center (In-Person) + Zoom (Online)",
      timeStart: "3:45 PM",
      timeEnd: "4:30 PM",
      description: "Prizes will be announced for all participants. Led by Directors Jasmine Wu and Laila Wafaie",
      zoomURL: "https://uci.zoom.us/s/98256770100",
    },
    {
      type: "time-mark",
      time: "4:30 PM",
      title: "Design-a-thon Ends",
      note: "We will ship prizes to online winners through an online form.",
    },
  ],
};

function EventDescription({ description, boldPrefix }) {
  if (!boldPrefix || !description.startsWith(boldPrefix)) {
    return <p>{description}</p>;
  }
  const rest = description.slice(boldPrefix.length).trimStart();
  return (
    <p>
      <strong>{boldPrefix}</strong> {rest}
    </p>
  );
}

export default function Itinerary() {
  const [active, setActive] = useState("fri");
  const items = ITINERARY[active];
  const dayTitle = DAYS.find((d) => d.id === active)?.title;

  return (
    <section id="itinerary" className={`${cn.section} d25-noise`}>
      <div className={cn.wrap}>
        <h2 className={cn.title}>Itinerary</h2>
        <div className={cn.tabs}>
          {DAYS.map((day) => (
            <button
              key={day.id}
              type="button"
              className={cn.tab}
              data-active={active === day.id}
              onClick={() => setActive(day.id)}
            >
              {day.label}
            </button>
          ))}
        </div>
        <div className={cn.panel}>
          <p className={cn.pst}>All times are in PST.</p>
          <h3 className={cn.panelTitle}>{dayTitle}</h3>
          <div className={cn.list}>
            {items.map((item, i) => (
              <Fragment key={i}>
                {item.type === "time-mark" ? (
                  <div>
                    <div className={cn.timeMark}>
                      <span>{item.time}</span>
                      <span className={cn.timeMarkSep}>|</span>
                      <span>{item.title}</span>
                    </div>
                    {item.note && (
                      <p className={cn.timeMarkNote}>Note: {item.note}</p>
                    )}
                  </div>
                ) : (
                  <div className={cn.eventCard}>
                    <div className={cn.eventMeta}>
                      <span className={cn.eventTitle}>{item.title}</span>
                      <span className={cn.eventLocation}>{item.location}</span>
                      {item.zoomURL && (
                        <a
                          href={item.zoomURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn.zoomLink}
                        >
                          <ZoomIcon />
                          Zoom Link
                        </a>
                      )}
                      <span className={cn.eventTime}>
                        {item.timeStart} → {item.timeEnd}
                      </span>
                    </div>
                    <div className={cn.eventDesc}>
                      <EventDescription
                        description={item.description}
                        boldPrefix={item.boldPrefix}
                      />
                    </div>
                  </div>
                )}
                {i !== items.length - 1 && (
                  <hr className={cn.divider} aria-hidden />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ZoomIcon() {
  return (
    <svg
      className={cn.zoomIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <path d="M2 8v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    </svg>
  );
}
