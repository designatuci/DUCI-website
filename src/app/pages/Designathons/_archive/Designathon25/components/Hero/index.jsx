import { useCallback, useEffect, useRef, useState } from "react";
import cn from "./Hero.module.scss";

const BASE = "/designathon25/2025/landing";
const NUM_FRAMES = 60;

function Countdown() {
  const [state, setState] = useState({ label: "Event starts in:", days: "--", hours: "--", minutes: "--", seconds: "--" });
  const startedRef = useRef(false);

  useEffect(() => {
    const startPT = new Date("2025-04-18T17:30:00-07:00");
    const endPT = new Date("2025-04-20T09:00:00-07:00");

    const tick = () => {
      const now = new Date();
      const started = now >= startPT;
      const target = started ? endPT : startPT;
      const diff = Math.max(0, Math.floor((target - now) / 1000));
      if (diff <= 0) {
        setState(s => ({ ...s, days: "00", hours: "00", minutes: "00", seconds: "00" }));
        return;
      }
      const days = Math.floor(diff / 86400);
      const hours = Math.floor((diff % 86400) / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;
      if (!startedRef.current && started) {
        startedRef.current = true;
      }
      setState({
        label: started ? "Designing ends in:" : "Event starts in:",
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={cn.countdown}>
      <span className={cn.countdownLabel}>{state.label}</span>
      <div className={cn.countdownParts}>
        <div className={cn.countdownPart}>
          <div className={cn.countdownValue}>{state.days}</div>
          <div className={cn.countdownUnit}>days</div>
        </div>
        <span className={cn.countdownColon}>:</span>
        <div className={cn.countdownPart}>
          <div className={cn.countdownValue}>{state.hours}</div>
          <div className={cn.countdownUnit}>hrs</div>
        </div>
        <span className={cn.countdownColon}>:</span>
        <div className={cn.countdownPart}>
          <div className={cn.countdownValue}>{state.minutes}</div>
          <div className={cn.countdownUnit}>mins</div>
        </div>
        <span className={cn.countdownColon}>:</span>
        <div className={cn.countdownPart}>
          <div className={cn.countdownValue}>{state.seconds}</div>
          <div className={cn.countdownUnit}>secs</div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const [cachedImages, setCachedImages] = useState([]);

  useEffect(() => {
    const loaded = [];
    const doneRef = { current: 0 };
    const failRef = { current: 0 };
    for (let i = 1; i <= NUM_FRAMES; i++) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = `${BASE}/hero/video/${i}.webp`;
      loaded.push(img);
      const checkDone = () => {
        const done = doneRef.current + failRef.current;
        if (done === NUM_FRAMES && loaded.length > 0) setCachedImages(loaded);
      };
      img.onload = () => {
        doneRef.current += 1;
        checkDone();
      };
      img.onerror = () => {
        failRef.current += 1;
        checkDone();
      };
    }
    const timeout = setTimeout(() => {
      if (loaded.length > 0 && doneRef.current > 0) setCachedImages(loaded);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const renderFrame = useCallback(
    (index) => {
      const img = cachedImages[index - 1];
      if (!canvasRef.current || !img || !img.complete || !img.naturalWidth) return;
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, 1920, 1800);
      ctx.drawImage(img, 0, 0, 1920, 1800);
    },
    [cachedImages]
  );

  useEffect(() => {
    if (cachedImages.length === 0) return;
    renderFrame(3);
  }, [cachedImages.length, renderFrame]);

  useEffect(() => {
    if (!sectionRef.current || cachedImages.length === 0) return;
    const el = sectionRef.current;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - winH * 0.5)));
      const frameIndex = Math.round(3 + progress * (NUM_FRAMES - 3));
      renderFrame(Math.min(frameIndex, NUM_FRAMES));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [cachedImages.length, renderFrame]);

  return (
    <section className={cn.section} ref={sectionRef}>
      <div className={cn.inner}>
        <div className={cn.heroContent}>
          <div className={cn.logoWrap}>
            <img
              src={`${BASE}/hero/header.gif`}
              alt="Designathon 2025: Beyond Our Horizons"
              className={cn.heroImage}
            />
            <div className={cn.dateBlock}>
              <Countdown />
              <div className={cn.meta}>
                <p>April 18 - 20, 2025</p>
                <p>UC Irvine DCE</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${cn.canvasWrap} ${cachedImages.length > 0 ? cn.canvasWrapVisible : ""}`}
          aria-hidden
        >
          <canvas
            ref={canvasRef}
            width={1920}
            height={1800}
            className={cn.canvas}
          />
        </div>
      </div>
    </section>
  );
}
