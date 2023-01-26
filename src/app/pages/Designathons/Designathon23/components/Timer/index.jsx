import { useEffect, useMemo, useState } from 'react';
import cn from './Timer.module.scss';

const Timer = ({ breakpoints }) => {
	const { date, text } = useMemo(
		() =>
			breakpoints.find(
				breakpoint =>
					breakpoint.date === 'end' ||
					new Date().getTime() < new Date(breakpoint.date).getTime()
			),
		[breakpoints]
	);

	const [timeLeft, setTimeLeft] = useState([]);

	useEffect(() => {
		if (date === 'end') return;

		const countdown = setInterval(() => {
			const timeBuilder = [];
			let timeDiff = new Date(date).getTime() - new Date().getTime();
			timeDiff /= 1000;
			timeBuilder.unshift({
				time: parseInt(timeDiff % 60),
				text: 'seconds',
			});
			timeDiff /= 60;
			timeBuilder.unshift({
				time: parseInt(timeDiff % 60),
				text: 'minutes',
			});
			timeDiff /= 60;
			timeBuilder.unshift({
				time: parseInt(timeDiff % 24),
				text: 'hours',
			});
			timeDiff /= 24;
			timeBuilder.unshift({ time: parseInt(timeDiff), text: 'days' });

			setTimeLeft(timeBuilder);
		}, 500);

		return () => clearImmediate(countdown);
	}, [date]);

	return (
		<div className={cn.container}>
			<div className={cn.text}>{text}</div>
			<div className={cn.row}>
				{timeLeft.map(({ time, text }) => (
					<div className={cn.block}>
						<h3>{time}</h3> <p>{text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export { Timer };
