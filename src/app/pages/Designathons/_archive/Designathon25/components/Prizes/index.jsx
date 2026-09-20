import cn from "./Prizes.module.scss";

const DOTLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none" className={cn.dotLogo}>
    <g opacity="0.7">
      <path fillRule="evenodd" clipRule="evenodd" d="M39.7787 72.4927C28.2679 72.5379 17.5242 66.2376 11.8061 56.087C10.7709 54.2489 8.46076 53.6106 6.65203 54.6623C4.84251 55.7139 4.21422 58.0598 5.24948 59.8979C12.3146 72.4387 25.5873 80.2225 39.8081 80.1661C41.8921 80.1573 43.5778 78.4319 43.5699 76.3141C43.562 74.1963 41.8627 72.4839 39.7787 72.4927ZM63.6325 18.1802L57.7486 52.9925C57.513 54.3875 56.3127 55.4013 54.9189 55.3811C54.9181 55.3811 54.9181 55.3811 54.9173 55.3811C48.2972 55.2852 42.1443 58.835 38.8339 64.6598C33.1443 66.477 20.9053 59.2984 18.9561 53.0014C22.2666 47.1766 22.2166 39.9892 18.8245 34.2128C18.8245 34.212 18.8245 34.212 18.8237 34.2112C18.1105 32.9959 18.3739 31.4334 19.4448 30.5276C25.7936 25.1662 46.5083 7.66937 52.0122 3.02117C52.8254 2.33457 53.9733 2.23465 54.8887 2.77216C54.8895 2.77216 54.8903 2.77296 54.8911 2.77296C55.5059 3.13318 55.9541 3.7271 56.1374 4.42336C56.3206 5.11882 56.2247 5.86102 55.8701 6.48475C51.9488 13.3837 40.7553 33.0789 40.7553 33.0789C38.2461 32.7235 35.6583 33.9082 34.3145 36.2726C32.5454 39.3848 33.5965 43.3706 36.6603 45.1676C39.724 46.9647 43.6477 45.8961 45.4167 42.7839C46.7606 40.4195 46.4766 37.5506 44.9185 35.5207C44.9185 35.5207 56.1128 15.8255 60.0333 8.92651C60.3887 8.30277 60.9726 7.84746 61.658 7.6605C62.3426 7.47435 63.0732 7.57186 63.6872 7.93208C63.688 7.93288 63.6888 7.93288 63.6896 7.93369C63.7206 7.95142 63.7507 7.96995 63.7809 7.98929L63.8142 7.93127C70.5057 13.1412 75.6225 20.5486 77.9714 29.4542C83.2643 49.5209 72.6404 70.1372 53.9788 77.4536C52.0336 78.216 49.8457 77.2312 49.0953 75.256C48.3448 73.2801 49.3142 71.0575 51.2594 70.2952C66.3646 64.3729 74.9593 47.6827 70.6754 31.4398C69.3324 26.3492 66.8716 21.863 63.6325 18.1802Z" fill="url(#paint0_linear_204_1528)" />
    </g>
    <defs>
      <linearGradient id="paint0_linear_204_1528" x1="-0.352578" y1="9.0741" x2="76.9834" y2="84.1476" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFCED" /><stop offset="1" stopColor="#FAC9B4" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Prizes() {
  return (
    <section id="prizes" className={`${cn.section} d25-noise`}>
      <div className="d25-container">
        <h2 className={cn.title}>Prizes</h2>
        <div className={cn.grid}>
          <div className={cn.cardFirst}>
            <div className={cn.dotLogoWrap}><DOTLogo /></div>
            <h3 className={cn.cardTitle}>1st Place</h3>
            <ul className={cn.cardList}>
              <li>POLAROID NOW CAMERA 3RD GENERATION</li>
              <li>1:1 MENTORSHIP</li>
              <li>PRIVATE GOOGLE TOUR @ IRVINE</li>
            </ul>
          </div>
          <div className={cn.cardSecond}>
            <h3 className={cn.cardTitle}>2nd</h3>
            <ul className={cn.cardList}><li>ELGATO STREAM DECK MK2</li><li>1:1 MENTORSHIP</li></ul>
          </div>
          <div className={cn.cardThird}>
            <h3 className={cn.cardTitle}>3rd</h3>
            <ul className={cn.cardList}><li>4 x $75 AMAZON GIFT CARDS</li><li>UCI DESIGNATHON STICKERS</li></ul>
          </div>
          <div className={cn.cardHonorable}>
            <h3 className={cn.cardTitle}>Honorable Mentions</h3>
            <ul className={cn.cardList}><li>4 x $50 AMAZON GIFT CARDS</li><li>UCI DESIGNATHON STICKERS</li></ul>
          </div>
          <div className={cn.cardNovel}>
            <h3 className={cn.cardTitle}>Most Novel Interface</h3>
            <ul className={cn.cardList}><li>RETRO HANDHELD GAME CONSOLES</li><li>1:1 MENTORSHIP</li></ul>
          </div>
        </div>
      </div>
    </section>
  );
}
