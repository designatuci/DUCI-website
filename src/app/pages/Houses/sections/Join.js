import { forwardRef } from "react";

import clsx from "clsx";

import { Text } from "app/components";

import cn from "./Join.module.scss";

const HOUSES_SORTING_FORM = "https://forms.gle/6aj3nKe3S5QttYqp8";

function Join(props, ref) {
	return (
		<section className={cn.join} id="join" ref={ref}>
			{new Date() <
			new Date("Fri Oct 06 2023 17:00:0 GMT-0700 (Pacific Daylight Time)") ? (
				<>
					<Text size="XXL" className={cn.title}>
						Sign Up and Get Sorted!
					</Text>
					<Text color="gray" className={cn.description}>
						form open until <Text color="red">Friday at 5pm</Text>
					</Text>
					<div className={clsx("wait show drop d10 l2", cn.button)}>
						<a href={HOUSES_SORTING_FORM} className="button L fill blue">
							<Text size="L" color="white" icon="right">
								Sign up
							</Text>
						</a>
					</div>
				</>
			) : (
				<>
					<Text size="XL" className={cn.title}>
						Didn’t get to Join a House? Send Us an Email
					</Text>
					<Text color="gray" className={cn.description}>
						To get sorted into a house, please email us or talk to a board
						member at any meeting!
					</Text>
					<div className={clsx("wait show drop d10 l2", cn.button)}>
						<a
							href="mailto:designatuci@gmail.com"
							target="_blank"
							rel="noreferrer noopener"
							className="button L fill blue"
						>
							<Text size="L" color="white" icon="right">
								Contact us
							</Text>
						</a>
					</div>
				</>
			)}
		</section>
	);
}

export default forwardRef(Join);
