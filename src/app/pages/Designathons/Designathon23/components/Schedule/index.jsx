import { Section } from "app/Symbols";
import clsx from "clsx";
import cn from "./Schedule.module.scss";

function Schedule() {
  return (
    <div className={cn.container} id="s-schedule">
      <Section>
        <h1 className={cn.title}>Schedule</h1>
        <h2>Friday - Feb. 24, 2023</h2>
        <div class={cn.list}>
          <div class={cn.event}>
            <div class={cn.time}>
              5:30 pm
              <span>↓</span>
            </div>
            <div class={clsx(cn.title, cn.special)}>Opening</div>
            <div class={cn.description}>
              Join us on our{" "}
              <a href="https://uci.zoom.us/j/93490306811" target="noreferrer">
                Zoom.
              </a>
              <br />
              Led by Design at UCI’s Designathon Director, Hannah.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              5:35 pm
              <span>↓</span>
            </div>
            <div class={cn.title}>Judges Introduction</div>
            <div class={cn.description}>
              Judges share their design background and journey. Introducing our
              judges: Minjun Chen, Jeremy Marusek, Antonio Flamenco, Mosope
              Adebowale, and Yiming Wang.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              6:00 pm
              <span>↓</span>
            </div>
            <div class={cn.title}>Keynote speech</div>
            <div class={cn.description}>
              Led by Keynote Speaker: Harrison Wheeler
              <br />
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              6:35 pm
              <span>↓</span>
            </div>
            <div class={clsx(cn.title, cn.highlight)}>
              Challenge Brief and Q&A
            </div>
            <div class={cn.description}>
              Announcing Challenge Brief and opening Q&A.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              7:00 pm
              <span>↓</span>
            </div>
            <div class={cn.title}>Mentor Office Hours</div>
            <div class={cn.description}>
              Need help or advice? Come speak with our mentors in the
              #mentor-office-hours channel on Discord! Ping the channel with
              your questions or requests. Mentors in the server will respond to
              your message and hop on a voice chat with you. Location:{" "}
              <a
                href="https://discord.com/invite/jumJqhBy4Y"
                target="noreferrer"
              >
                Discord
              </a>
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              7:30 pm
              <span>↓</span>
              8:15 pm
            </div>
            <div class={cn.title}>Workshop</div>
            <div class={cn.description}>
              Led by WICS (Duong Vu & Amanda Hausmann) Topic: Design for Gender
              Inclusivity Location:{" "}
              <a href="https://uci.zoom.us/j/92626479110" target="noreferrer">
                Zoom
              </a>
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              8:45 pm
              <span>↓</span>
              9:30 pm
            </div>
            <div class={cn.title}>Workshop</div>
            <div class={cn.description}>
              Led by Victoria Wu Topic: Intro to Figma Location:{" "}
              <a href="https://uci.zoom.us/j/92626479110" target="noreferrer">
                Zoom
              </a>
            </div>
          </div>
        </div>

        <h2>Saturday - Feb. 25, 2023</h2>
        <div class={cn.list}>
          <div class={cn.event}>
            <div class={cn.time}>
              10:00 am<span>↓</span>10:45 am
            </div>
            <div class={cn.title}>Workshop</div>
            <div class={cn.description}>
              <p style={{marginBottom: 20}}>Led by Mosope Adebowale</p> 
              <p style={{marginBottom: 20}}>Topic: Designing for Diversity</p>
              <p style={{marginBottom: 20}}>Location:{" "}
              <a href="https://uci.zoom.us/j/92626479110" target="noreferrer">
                Zoom
              </a>
              </p>
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              12:00 pm<span>↓</span>12:45 pm
            </div>
            <div class={cn.title}>Workshop</div>
            <div class={cn.description}>
              Led by Joe Cahill Topic: Be F#$%ing Authentic Location:{" "}
              <a href="https://uci.zoom.us/j/92626479110" target="noreferrer">
                Zoom
              </a>
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              1:15 pm<span>↓</span>2:00 pm
            </div>
            <div class={cn.title}>Workshop</div>
            <div class={cn.description}>
              Led by Ximena Osorio Topic: UX Research 101 Location:{" "}
              <a href="https://uci.zoom.us/j/92626479110" target="noreferrer">
                Zoom
              </a>
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              3:00 pm<span>↓</span>3:45 pm
            </div>
            <div class={cn.title}>Workshop</div>
            <div class={cn.description}>
              Led by CTC (Alexandria(Alex) Wang & Meghna Kaligotla) Topic:
              Creating UX Case Studies Location:{" "}
              <a href="https://uci.zoom.us/j/92626479110" target="noreferrer">
                Zoom
              </a>
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              5:00 pm<span>↓</span>5:45 pm
            </div>
            <div class={cn.title}>Workshop</div>
            <div class={cn.description}>
              Led by Antonio Flamenco Topic: Leveraging Accessibility in Design
              Location:{" "}
              <a href="https://uci.zoom.us/j/92626479110" target="noreferrer">
                Zoom
              </a>
            </div>
          </div>
        </div>

        <h2>Sunday - Feb. 26, 2023</h2>
        <div class={cn.list}>
          <div class={cn.event}>
            <div class={cn.time}>8:00 am</div>
            <div class={clsx(cn.title, cn.highlight)}>Submission Deadline</div>
            <div class={cn.description}>
              Submit your working prototype through our{" "}
              <a
                target="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdxz0MG3HYpgR10XUw1IKHywhe2YuzboB3ZwzlqfsI9F_BNhQ/closedform"
              >
                Submission Form
              </a>
              .
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>1:10 pm</div>
            <div class={cn.title}>Announcing 10 finalists</div>
            <div class={cn.description}>
              Our team will reach out to the email provided in the Submission
              Form to let the team know. Make sure to check your spam! These
              teams will move forward to and present their case study during the
              final round of the judging panel.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              1:10 pm
              <span>↓</span>
              4:00 pm
            </div>
            <div class={cn.title}>Work on Case Study</div>
            <div class={cn.description}>
              For all the 10 finalists, make sure to prepare your presentation
              so that it clearly elaborates your target user base, user
              research, and decision making process. Please refer to the rubric
              or ask questions on our{" "}
              <a
                href="/https://discord.com/invite/jumJqhBy4Y/"
                target="noreferrer"
              >
                Discord
              </a>{" "}
              channel for more information and clarification.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              4:00 pm
              <span>↓</span>
              5:30 pm
            </div>
            <div class={clsx(cn.title, cn.special)}>Presentations</div>
            <div class={cn.description}>
              Join us on our{" "}
              <a href="https://uci.zoom.us/j/93490306811" target="noreferrer">
                Zoom
              </a>
              . Each finalist team—there will be 10 in total—will have 8 minutes
              to present their case study. Anyone can attend.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              5:30 pm
              <span>↓</span>
              6:15 pm
            </div>
            <div class={clsx(cn.title, cn.special)}>Judging Panel</div>
            <div class={cn.description}>
              Judges decide the Top 3 teams, as well as the winners for these
              additional awards:
              <ul>
                <li>&#x2022; Best presentation & story-telling</li>
                <li>&#x2022; Most creative & innovative</li>
                <li>&#x2022; Honorable mention</li>
              </ul>
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              7:00 pm
              <span>↓</span>
              7:40 pm
            </div>
            <div class={clsx(cn.title, cn.special)}>Closing Ceremony</div>
            <div class={cn.description}>
              Join us on our{" "}
              <a href="https://uci.zoom.us/j/93490306811" target="noreferrer">
                Zoom
              </a>
              . Designathon Director, Hannah, announces the winners and asks
              them to share their experience.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              7:40 pm
              <span>↓</span>
              7:50 pm
            </div>
            <div class={clsx(cn.title, cn.special)}>
              Raffle Draw and Closing
            </div>
            <div class={cn.description}>
              Led by Design-a-thon Director, Hannah. Raffle winners will be
              chosen. Will give final thanks and acknowledgments, then close out
              the event.
            </div>
          </div>
          <div class={cn.event}>
            <div class={cn.time}>
              7:50 pm
              <span>↓</span>
              8:00 pm
            </div>
            <div class={clsx(cn.title, cn.special)}>Q&A</div>
            <div class={cn.description}>
              During the final Q&A session, attendees can ask anything related
              to the event.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Schedule;
