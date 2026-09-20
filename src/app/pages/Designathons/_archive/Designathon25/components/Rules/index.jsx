import { Fragment, useState } from "react";
import cn from "./Rules.module.scss";

const BASE = "/designathon25/2025/landing";

const RULES = [
  <><p>All members of your team must be</p><ul><li>a current <strong>undergraduate</strong> or graduate student</li><li>with an associated institutional (.edu) email</li></ul></>,
  <><p>Teams must not exceed 4 people total.</p></>,
  <><p>Each team may only submit one (1) submission which will be submitted on behalf of all other contributors.</p></>,
  <><p>All work submitted to Beyond Our Horizons must be original work. Any submissions with plagiarized work will be disqualified.</p></>,
  <><p>You may not submit work previously designed before Beyond Our Horizons. All designs must be made between the dates of April 18 - April 20.</p></>,
  <><p>Late submissions will not be accepted.</p></>,
  <><p>If any adjustments are made after April 20 2025 at the submission deadline, your team&apos;s submission will not count towards judging.</p></>,
  <><p>Teams must be comprised of entirely online or entirely in-person participants.</p></>,
];

export default function Rules() {
  const [current, setCurrent] = useState(0);

  return (
    <section id="rules" className={`${cn.section} d25-noise`}>
      <div className={cn.wrap}>
        <h2 className={cn.title}>Rules</h2>
        <p className={cn.subtitle}>Here are the guidelines for the 2025 Design-a-thon!</p>
        <div className={cn.content}>
          <div className={cn.carousel}>
            <button
              type="button"
              className={cn.arrow}
              onClick={() => setCurrent((c) => (c === 0 ? RULES.length - 1 : c - 1))}
              aria-label="Previous rule"
            >
              ‹
            </button>
            <button
              type="button"
              className={cn.arrowRight}
              onClick={() => setCurrent((c) => (c === RULES.length - 1 ? 0 : c + 1))}
              aria-label="Next rule"
            >
              ›
            </button>
            <div className={cn.slide}>
              <span className={cn.ruleLabel}>RULE NUMBER ({current + 1} / {RULES.length})</span>
              <div className={cn.ruleText}>{RULES[current]}</div>
            </div>
            <div className={cn.dotsWrap}>
              {RULES.map((_, i) => (
                <Fragment key={i}>
                  <button
                    type="button"
                    title={`Rule ${i + 1}`}
                    className={cn.dot}
                    aria-current={current === i}
                    onClick={() => setCurrent(i)}
                  />
                  {i !== RULES.length - 1 && <span className={cn.dotLine} aria-hidden />}
                </Fragment>
              ))}
            </div>
          </div>
          <div className={cn.graphic}>
            <img src={`${BASE}/rules/rules.jpg`} alt="" className={cn.graphicImg} />
          </div>
        </div>
      </div>
    </section>
  );
}
