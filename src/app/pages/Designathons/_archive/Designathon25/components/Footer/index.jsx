import { useCallback, useEffect, useRef, useState } from "react";
import cn from "./Footer.module.scss";

const BASE = "/designathon25/2025/landing";
const NUM_FRAMES = 26;
const FRAME_START = 13;
const FRAME_END = 26;

const SOCIAL = [
  { href: "https://www.instagram.com/ucidesignathon/", label: "Instagram" },
  { href: "https://discord.com/invite/MBVrKe9", label: "Discord" },
  { href: "https://www.youtube.com/channel/UC3LqXqBN-R7C91ttlyXHhIQ", label: "YouTube" },
  { href: "https://www.linkedin.com/company/design-at-uci", label: "LinkedIn" },
  { href: "https://www.facebook.com/designatuci/", label: "Facebook" },
  { href: "https://www.tiktok.com/@design_at_uci", label: "TikTok" },
];

export default function Footer() {
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
      img.src = `${BASE}/footer/${i}.webp`;
      loaded.push(img);
      const checkDone = () => {
        if (doneRef.current + failRef.current === NUM_FRAMES && loaded.length > 0) {
          setCachedImages(loaded);
        }
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
      ctx.clearRect(0, 0, 1920, 2500);
      ctx.drawImage(img, 0, 0, 1920, 2500);
    },
    [cachedImages]
  );

  useEffect(() => {
    if (cachedImages.length === 0) return;
    renderFrame(FRAME_START);
  }, [cachedImages.length, renderFrame]);

  useEffect(() => {
    if (!sectionRef.current || cachedImages.length === 0) return;
    const el = sectionRef.current;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const h = rect.height;
      // Match designathon-website: offset ["20% end", "70% end"]
      // Progress 0 when viewport bottom touches section's 20% from top; 1 when it touches 70% from top
      const progress = Math.max(
        0,
        Math.min(1, (winH - rect.top - 0.2 * h) / (0.5 * h))
      );
      const frameIndex = Math.round(
        FRAME_START + progress * (FRAME_END - FRAME_START)
      );
      renderFrame(Math.min(Math.max(frameIndex, FRAME_START), FRAME_END));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [cachedImages.length, renderFrame]);

  return (
    <section className={cn.section} ref={sectionRef}>
      <div className={cn.bg}>
        <canvas
          ref={canvasRef}
          width={1920}
          height={2500}
          className={cn.canvas}
        />
      </div>
      <div className={cn.bottom}>
        <div className={cn.social}>
          {SOCIAL.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={cn.socialLink} aria-label={item.label}>
              <span className={cn.socialIcon}>◆</span>
            </a>
          ))}
        </div>
        <p className={cn.copyright}>© 2025 Design at UCI • Made with &#128149; by UCI Designathon</p>
      </div>
    </section>
  );
}
