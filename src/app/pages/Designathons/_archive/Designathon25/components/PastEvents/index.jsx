import cn from "./PastEvents.module.scss";

export default function PastEvents() {
  return (
    <section id="past-events" className={`${cn.section} d25-noise`}>
      <div className="d25-container">
        <h2 className={cn.title}>Past Events</h2>
        <p className={cn.text}>
          More info about past events can be found on the{" "}
          <a href="https://designatuci.com/designathon" className={cn.linkInline}>Design at UCI website</a>.
        </p>
      </div>
    </section>
  );
}
