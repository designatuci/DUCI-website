import cn from "./Prizes.module.scss";
import clsx from "clsx";

import trophy from "../../assets/graphics/prizes/trophy.svg";
import lines from "../../assets/graphics/prizes/lines.svg";

import GridBackground from "../Backgrounds/GridBackground";

const Prizes = () => {
	return (
		<div id="s-prizes">
			<div className={cn.container}>
				<GridBackground
					positions={[
						{ top: 0, left: 0 },
						{ bottom: 0, right: 0 },
					]}
					isLight={true}
				/>

				<img src={lines} alt="" className={clsx(cn.lines, cn.tr)} />
				<img src={lines} alt="" className={clsx(cn.lines, cn.bl)} />

				<div className={cn.content}>
					<h2 className={cn.heading}>Prizes</h2>

					<div className={cn.prizeSectionContainer}>
						<h3 className={cn.prizeSectionHeading}>Top 3</h3>

						<div className={clsx(cn.prizeContainer, cn.first)}>
							<img src={trophy} alt="" className={cn.trophy} />

							<h6 className={cn.prizeHeader}>1st Place</h6>

							<div className={cn.prizes}>
								<p>2nd Gen Airpods</p>
								<p>
									1:1 Mentorship/Career Discussion with judge
									of your choice
								</p>
								<p>
									Feature on Design at UCI Website & Design at
									UCI Instagram
								</p>
							</div>
						</div>

						<div className={cn.secondThirdContainer}>
							<div
								className={clsx(
									cn.prizeContainer,
									cn.secondThird,
								)}
							>
								<h6 className={cn.prizeHeader}>2nd Place</h6>

								<div className={cn.prizes}>
									<p>Wireless Keyboard</p>
									<p>
										1:1 Mentorship/Career Discussion with
										judge of your choice
									</p>
									<p>
										Feature on Design at UCI Website &
										Design at UCI Instagram
									</p>
								</div>
							</div>
							<div
								className={clsx(
									cn.prizeContainer,
									cn.secondThird,
								)}
							>
								<h6 className={cn.prizeHeader}>3rd Place</h6>
								<div className={cn.prizes}>
									<p>Light-up Cat Lamp</p>
									<p>
										1:1 Mentorship/Career Discussion with
										judge of your choice
									</p>
									<p>
										Feature on Design at UCI Website &
										Design at UCI Instagram
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className={cn.prizeSectionContainer}>
						<h3 className={cn.prizeSectionHeading}>
							In-Person Prizes
						</h3>

						<div className={cn.inpersonContainer}>
							<div
								className={clsx(cn.prizeContainer, cn.inperson)}
							>
								<div>
									<h6 className={cn.prizeHeader}>
										People's Choice
									</h6>
									<p className={cn.prizeDetails}>
										Voted by in-person participants.
									</p>
								</div>

								<div className={cn.prizes}>
									<p>Lego Sets</p>
									<p>Figma Pins</p>
									<p>Design at UCI Stickers</p>
								</div>
							</div>
							<div
								className={clsx(cn.prizeContainer, cn.inperson)}
							>
								<div>
									<h6 className={cn.prizeHeader}>
										Honorable Mentions
									</h6>
									<p className={cn.prizeDetails}>
										Voted by Design at UCI Board.
									</p>
								</div>

								<div className={cn.prizes}>
									<p>Lego Sets</p>
									<p>Figma Pins</p>
									<p>Design at UCI Stickers</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Prizes };
