import { useState } from "react";
import AnimateHeight from "react-animate-height";
import cn from "./FAQ.module.scss";

const SIGNUP_URL = "https://forms.gle/BNWnN8dSJR9kqwjC8";

const ITEMS = [
  { question: "Why should I join?", answer: "Creating an aesthetically pleasing, functional product is not only what a designer does; it is to listen to what our world needs, empathize people's gain and pain points, and produce a solution that specifically targets what our world is lacking. We hope that this event can be a platform where you can practice your design thinking — a process of ideation, research, analysis, developing, and testing — to provide a better means to our world." },
  { question: "Who can attend?", answer: <>Any undergraduate OR graduate student within the United States, with an associated institutional (.edu) email is able to <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={cn.link}>sign up</a> and attend. If you do not qualify, you will not be allowed to participate in the event.</> },
  { question: "How do I sign up?", answer: <>Apply through our <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className={cn.link}>Participant Sign-up Form.</a></> },
  { question: "I don't have prior knowledge in design. Can I still participate?", answer: "Of course! Design is all around us. We will provide opportunities and resources for beginners to get started, such as workshops, mentor office hours, and more." },
  { question: "How much does it cost?", answer: "Beyond Our Horizons requires no cost to participate. All you need is a working device with Zoom, Discord, and an open mind." },
  { question: "When is the registration deadline?", answer: "April 9th, 2025 11:59 PM" },
  { question: "How do I prepare?", answer: "During the event, we will be hosting workshops for anyone new to design thinking or the design process. We highly encourage getting the hang of Figma, Sketch, Adobe XD, or the prototyping tool of your choice. You are also free to look through our Design at UCI Resources page for extra information." },
  { question: "How do teams work?", answer: "You have the option to (1) go solo, or (2) form a team of up to 4 people total. We will consider your final team members to be the ones indicated when submitting your project." },
  { question: "Where is the event located?", answer: "Beyond Our Horizons will be mainly held in-person at the Division of Continuing Education (DCE). We can also accommodate online participants if necessary. More info will be coming soon, so be sure to check your email for updates!" },
  { question: "What if I don't have a team?", answer: "We will be hosting a team finding event in person during Check-Ins! You can also find a team on our Discord. Solo participants are also allowed." },
  { question: "Where do I submit my project?", answer: "You will submit your final, working prototype to the Devpost (opens during the event). Only ONE (1) person on your team should submit a form, which will be on behalf of all contributors." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className={`${cn.section} d25-noise`}>
      <div className="d25-container">
        <h2 className={cn.title}>FAQ</h2>
        <div className={cn.list}>
          {ITEMS.map((item, index) => (
            <div key={index} className={cn.item}>
              <button
                type="button"
                className={cn.trigger}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span className={cn.icon}>{openIndex === index ? "−" : "+"}</span>
              </button>
              <AnimateHeight height={openIndex === index ? "auto" : 0} duration={300} easing="ease-in-out">
                <div className={cn.answer}>{item.answer}</div>
              </AnimateHeight>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
