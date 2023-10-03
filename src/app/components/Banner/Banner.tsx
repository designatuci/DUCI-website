import cn from "./Banner.module.scss";

const APPLICATION_FORM = "https://forms.gle/e8zAUSGniWopQDNP9";

export function Banner() {
  return (
    <div className={`fill black ${cn.banner}`}>
      <p>
        Interested in becoming part of Design at UCI&apos;s Board? Submit a{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="color blue"
          href={APPLICATION_FORM}
        >
          board application
        </a>{" "}
        by May 7th.
      </p>
    </div>
  );
}
