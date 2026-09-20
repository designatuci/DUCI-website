import { useEffect, useRef, useState } from "react";
import cn from "./About.module.scss";

const BASE = "/designathon25/2025/landing";

const ABOUT_COPY =
  "We hope that this experience can help you acquire and grow both your soft and hard skills in empathizing with your users, defining a set of goals and needs, developing your product, and improving your confidence and creativity as a human-centric designer.";

// Match designathon-website: offset ["0% 170%", "0% 100%"] — progress 0 when target top at 170vh, 1 when at 100vh
function useRevealProgress(targetRef) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const winH = window.innerHeight;
        const start = winH * 1.7;
        const end = winH * 1;
        const p = (start - rect.top) / (start - end);
        const raw = Math.max(0, Math.min(1, p));
        setProgress(raw * 100);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [targetRef]);

  return progress;
}

export default function About() {
  const contentRef = useRef(null);
  const revealProgress = useRevealProgress(contentRef);

  return (
    <section id="about" className={`${cn.section} d25-noise`}>
      <div className={cn.wrap}>
        <div className={cn.gradient} />
        <img
          src={`${BASE}/about/about-background.gif`}
          alt=""
          className={cn.bg}
        />
        <div className={cn.content} ref={contentRef}>
          <h2 className={cn.title}>About</h2>
          <div className={cn.text}>
            <span
              className={cn.revealText}
              style={{ backgroundSize: `${revealProgress}% 100%` }}
            >
              {ABOUT_COPY}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
