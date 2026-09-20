import { useEffect, useRef, useState } from "react";
import cn from "./Stats.module.scss";

const ITEMS = [
  { value: 189, label: "projects", prefix: "", suffix: "" },
  { value: 300, label: "attendees", prefix: "", suffix: "+" },
  { value: 2500, label: "prizes", prefix: "$", suffix: "" },
  { value: 65000, label: "social media outreach", prefix: "", suffix: "" },
];

function StatCard({ value, label, prefix, suffix }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const end = value;
    const start = display;
    const duration = 800;
    const startTime = performance.now();
    const tick = (now) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - t) * (1 - t);
      setDisplay(Math.round(start + (end - start) * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    // display intentionally omitted: we animate from current display to value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <div className={cn.card} ref={ref}>
      <div className={cn.valueRow}>
        {prefix && <span className={cn.valueAffix}>{prefix}</span>}
        <span className={cn.valueNumber}>{display.toLocaleString()}</span>
        {suffix && <span className={cn.valueAffix}>{suffix}</span>}
      </div>
      <p className={cn.label}>{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className={cn.section}>
      <div className={cn.inner}>
        <div className={cn.grid}>
          {ITEMS.map((item) => (
            <StatCard
              key={item.label}
              value={item.value}
              label={item.label}
              prefix={item.prefix}
              suffix={item.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
