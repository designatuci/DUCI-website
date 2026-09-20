import { useEffect, useRef, useState } from "react";
import judgesData from "../../assets/data/judges.json";
import workshopHostsData from "../../assets/data/workshop-hosts.json";
import cn from "./Judges.module.scss";

const BASE = "/designathon25/2025/landing";

function ProfileCard({ profile, index, isInView }) {
  const { name, photo } = profile;
  const position = profile.position || profile.role;
  const linkedInURL = profile.linkedInURL || profile.link;
  return (
    <div
      className={cn.card}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(2.5rem)",
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div className={cn.avatarWrap}>
        <img
          src={photo.startsWith("http") ? photo : `${BASE}/${photo}`}
          alt={name}
          className={cn.avatar}
        />
      </div>
      <div className={cn.body}>
        <h3 className={cn.name} style={{ wordSpacing: "100vw" }}>
          {name}
        </h3>
        {position && <p className={cn.position}>{position}</p>}
        {linkedInURL && (
          <a
            href={linkedInURL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn.linkedin}
            aria-label={`${name} on LinkedIn`}
          >
            <LinkedInIcon />
          </a>
        )}
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function JudgeSection({ title, profiles }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: "0px 0px -300px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const list = profiles.map((p) => ({
    ...p,
    photo: p.photo || p.imageURL,
    link: p.linkedInURL || p.link,
  }));

  return (
    <div className={cn.sectionBlock} ref={ref}>
      <h2 className={cn.sectionTitle}>{title}</h2>
      <div className={cn.grid}>
        {list.map((profile, index) => (
          <ProfileCard
            key={profile.name + index}
            profile={profile}
            index={index}
            isInView={inView}
          />
        ))}
      </div>
    </div>
  );
}

export default function Judges() {
  const speakers = [
    judgesData[0],
    ...workshopHostsData.filter((w) => w.name !== judgesData[0]?.name).slice(0, 4),
  ];
  const judges = judgesData.slice(1);

  return (
    <section className={`${cn.section} d25-noise`}>
      <JudgeSection title="Keynote Speakers" profiles={speakers} />
      <JudgeSection title="Judges" profiles={judges} />
    </section>
  );
}
