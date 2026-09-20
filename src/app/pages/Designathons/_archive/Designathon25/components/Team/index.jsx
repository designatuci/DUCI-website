import { useState, useMemo } from "react";
import CURRENT_BOARD from "assets/data/currentBoard.json";
import cn from "./Team.module.scss";

const TABS = [
  "Directors",
  "Design",
  "Operations",
  "Corporate",
  "Finance",
  "Marketing",
];

function positionToTab(position) {
  if (!position) return "Directors";
  const p = position.toLowerCase();
  if (p.includes("president") || p.includes("vice president")) return "Directors";
  if (p.includes("project teams director") || p.includes("workshops director")) return "Directors";
  if (p.includes("creative") || p.includes("graphic") || p.includes("designer")) return "Design";
  if (p.includes("project teams") || p.includes("workshop")) return "Operations";
  if (p.includes("corporate") || p.includes("webmaster")) return "Corporate";
  if (p.includes("finance")) return "Finance";
  if (p.includes("marketing")) return "Marketing";
  return "Directors";
}

function getPhotoSrc(photo) {
  if (!photo) return "";
  if (photo.startsWith("http")) return photo;
  try {
    return require("assets/images/board/current/" + photo);
  } catch {
    return "";
  }
}

function TeamCard({ name, position, photo, links }) {
  const linkedIn = links?.find((l) => l.type === "linkedin");
  const href = linkedIn?.href?.startsWith("http") ? linkedIn.href : linkedIn?.href ? `https://${linkedIn.href}` : null;
  return (
    <div className={cn.card}>
      <div className={cn.avatarWrap}>
        <img
          src={getPhotoSrc(photo)}
          alt={name}
          className={cn.avatar}
        />
      </div>
      <h3 className={cn.name}>{name}</h3>
      <p className={cn.role}>{position}</p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn.linkedin}
          aria-label={`${name} on LinkedIn`}
        >
          <LinkedInIcon />
        </a>
      )}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Team() {
  const [activeTab, setActiveTab] = useState("Directors");
  const board = useMemo(() => Array.isArray(CURRENT_BOARD) ? CURRENT_BOARD : [], []);
  const filtered = useMemo(
    () => board.filter((m) => positionToTab(m.position) === activeTab),
    [board, activeTab]
  );

  return (
    <section id="team" className={`${cn.section} d25-noise`}>
      <div className={cn.wrap}>
        <h2 className={cn.title}>Meet the Team</h2>
        <p className={cn.subtitle}>
          Introducing the 2025 Design-a-thon Team!
        </p>
        <div className={cn.tabs} role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={cn.tab}
              data-active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={cn.grid}>
          {filtered.length > 0
            ? filtered.map((member) => (
                <TeamCard
                  key={member.name + member.position}
                  name={member.name}
                  position={member.position}
                  photo={member.photo}
                  links={member.links}
                />
              ))
            : (
                <div className={cn.ctaBlock}>
                  <a href="https://designatuci.com/about" className={cn.link}>
                    Meet the Design at UCI Board →
                  </a>
                </div>
              )}
        </div>
      </div>
    </section>
  );
}
