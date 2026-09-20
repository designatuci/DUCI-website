import cn from "./Sponsors.module.scss";

const BASE = "/designathon25/2025/landing";

// Match original: alternating sponsor + empty slot for rollercoaster spacing
const SPONSORS = [
  { id: "m1-1", content: { imageURL: `${BASE}/sponsors/logos/notion.png`, name: "Notion", rotation: -5 } },
  { id: "m1-2" },
  { id: "m1-3", content: { imageURL: `${BASE}/sponsors/logos/odit.png`, name: "UCI ODIT", rotation: -3 } },
  { id: "m1-4" },
  { id: "m1-5", content: { imageURL: `${BASE}/sponsors/logos/designliLogo.webp`, name: "Designli", rotation: 3 } },
  { id: "m1-6" },
  { id: "m1-7", content: { imageURL: `${BASE}/sponsors/logos/antrepreneurshipCenter.jpg`, name: "ANTpreneur Center", rotation: 3 } },
  { id: "m1-8" },
  { id: "m1-9", content: { imageURL: `${BASE}/sponsors/logos/poppi.jpg`, name: "poppi", rotation: 3 } },
  { id: "m1-10" },
];

export default function Sponsors() {
  const list = [...SPONSORS, ...SPONSORS];
  return (
    <section id="sponsors" className={`${cn.section} d25-noise`}>
      <div className={cn.wrap}>
        <h2 className={cn.title}>Partners</h2>
        <div className={cn.marqueeWrap}>
          <img src={`${BASE}/sponsors/train-tracks.png`} alt="" className={cn.tracks} aria-hidden />
          <div className={cn.starsRow} aria-hidden />
          <div className={cn.marqueeTrack}>
            <ul className={`${cn.marquee} d25-marquee`}>
            {list.map((s, i) => (
              <li key={`${s.id}-${i}`} className={cn.cart}>
                <img src={`${BASE}/sponsors/cart-back_bxbecl.png`} alt="" className={cn.cartBack} />
                {s.content && (
                  <div
                    className={cn.logoWrap}
                    style={{ "--item-rotation": `${s.content.rotation}deg` }}
                  >
                    <span className={cn.cartLabel} aria-hidden>{s.content.name}</span>
                    <img src={s.content.imageURL} alt={s.content.name} className={cn.logo} />
                  </div>
                )}
                <img src={`${BASE}/sponsors/cart-front_kbhw3p.png`} alt="" className={cn.cartFront} />
              </li>
            ))}
            </ul>
          </div>
        </div>
        <div className={cn.clouds}>
          <img src={`${BASE}/sponsors/clouds-right_atevno.png`} alt="" className={cn.cloudImg} aria-hidden />
        </div>
      </div>
    </section>
  );
}
