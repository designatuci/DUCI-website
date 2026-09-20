import cn from "./Prompt.module.scss";

export default function Prompt() {
  return (
    <section id="prompt" className={`${cn.section} d25-noise`}>
      <div className={cn.wrap}>
        <h2 className={cn.title}>Prompt</h2>
        <div className={cn.block}>
          <h3 className={cn.heading}>
            Reimagining How We Interface with the World.
          </h3>
          <hr className={cn.hr} />
          <div className={cn.points}>
            <p className={cn.point}>
              We&apos;re living in a time where new technologies—AI, AR/VR,
              spatial computing—are rapidly reshaping how we live, work, and
              connect. But many of these systems are still hard to use,
              confusing, or not designed for everyone.
            </p>
            <p className={cn.point}>
              This year&apos;s challenge is to design for the unknown: create a
              solution that helps people navigate uncertainty. That could mean
              supporting new users, edge cases, or entirely new systems.
            </p>
            <p className={cn.point}>
              Start by choosing a space where tech is evolving or difficult to
              use—emergency response, elderly care, extreme environments, or
              unfamiliar digital tools. Then, identify a real user
              problem—confusion, inaccessibility, complexity—and design an
              intuitive, bold solution using any medium: AI agents, voice,
              gesture, haptics, AR, or something new.
            </p>
            <p className={cn.point}>
              Your goal is to make the future less overwhelming and more human.
              Design for what doesn&apos;t exist yet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
