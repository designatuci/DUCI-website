import cn from "./Prizes.module.scss";
import clsx from "clsx";

import trophy from "../../assets/graphics/prizes/trophy.svg";

import GridBackground from "../Backgrounds/GridBackground";

const Prizes = ({ list }) => {
	return (
		<div id="s-prizes">
			<div className={cn.container}>
				<GridBackground
					positions={[{ top: 0, left: 0 }]}
					isLight={true}
				/>

				<div className={cn.content}>
					<h2 className={cn.heading}>Prizes</h2>

					<h3 className={cn.prizeSectionHeading}>Top 3</h3>

					<div className={clsx(cn.prizeContainer, cn.first)}>
						<h6 className={cn.prizeHeader}>1st Place</h6>

						<div className={cn.prizes}>
							<p>$100 Visa Card</p>
							<p>
								1:1 Mentorship/Career Discussion with judge of
								your choice
							</p>
							<p>
								Feature on Design at UCI Website & Design at UCI
								Instagram
							</p>
						</div>

						<img src={trophy} alt="" className={cn.trophy} />
					</div>

					<div className={cn.secondThirdContainer}>
						<div
							className={clsx(cn.prizeContainer, cn.secondThird)}
						>
							<h6 className={cn.prizeHeader}>2nd Place</h6>

							<div className={cn.prizes}>
								<p>$50 Visa Card</p>
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

						<div
							className={clsx(cn.prizeContainer, cn.secondThird)}
						>
							<h6 className={cn.prizeHeader}>3rd Place</h6>

							<div className={cn.prizes}>
								<p>$25 Visa Card</p>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export { Prizes };
