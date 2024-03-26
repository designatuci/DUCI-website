import clsx from "clsx";
import { useState, useEffect } from "react";

const Icon = (props) => {
	let style = {
		width: props.w + "px",
		height: props.h + "px",
		backgroundImage: `url(/static/icon/${props.src})`,
		...props.style,
	};
	return (
		<div
			id={props.id}
			className={clsx("icon", props.hoverable && "hoverable", props.className)}
			style={style}
		>
			{props.children}
		</div>
	);
};

const Photo = (props) => {
	const [photoData, setphotoData] = useState(null);
	let style = {
		backgroundImage: photoData,
		...props.style,
	};

	useEffect(() => {
		setTimeout(
			() => {
				setphotoData(`url(/static/photo/${props.src})`);
			},
			props?.lazy ? 500 : 0,
		);
	}, [props.lazy, props.src]);

	return (
		<div className={`photo ${props.className}`} style={style} id={props.id}>
			{props.children}
		</div>
	);
};

const Section = ({ children, className, wrapperClass, ...props }) => (
	<div className={clsx("section ", className)} {...props}>
		<div className={clsx("wrapper ", wrapperClass)}>{children}</div>
	</div>
);

export { Icon, Photo, Section };

export function Space({ block, ...props }) {
	let style = {
		width: props.w + "px",
		height: props.h + "px",
		...props.style,
	};
	if (block) {
		style.display = "block";
	}
	return (
		<div className={"space " + props.className} {...props} style={style}></div>
	);
}

export function LoadingD(props) {
	return (
		<div>
			<svg
				id="anim-load"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
				fillRule="evenodd"
				clipRule="evenodd"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit={1.5}
				{...props}
			>
				<path
					d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
					fill="none"
					strokeWidth="4"
					stroke="var(--yellow)"
				/>
				<path
					d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
					fill="none"
					strokeWidth="4.1"
					stroke="var(--orange)"
				/>
				<path
					d="M50 19c17.109 0 31 13.891 31 31S67.109 81 50 81H19V19h31z"
					fill="none"
					strokeWidth="4.2"
					stroke="var(--blue)"
				/>
			</svg>
			<style>{`
            #anim-load {
                will-change: contents;
                opacity: 0;
                animation: anim-load-fadein 0.2s 0.2s linear forwards;
            }
            #anim-load path {
                stroke-dasharray: 30px 191px;
                transform-origin: center;
                animation: anim-load 3.0s cubic-bezier(.2,.76,.83,.45) infinite;
            }
            #anim-load path:nth-child(2) { animation-delay: -0.3s; }
            #anim-load path:nth-child(3) { animation-delay: -0.6s; }
            @keyframes anim-load {
                0% { stroke-dashoffset: 662px; }
                60% { stroke-dasharray: 60px 161px; }
                100% { stroke-dashoffset: 0px; }
            }
            @keyframes anim-load-fadein {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }
        `}</style>
		</div>
	);
}

export function PageIcon(props) {
	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
			strokeLinejoin="round"
			strokeMiterlimit={2}
			{...props}
			className={"icon " + props.className}
		>
			<path
				d="M10.617 5H9a4 4 0 00-4 4v6a4 4 0 004 4h6a4 4 0 004-4v-1.617a1 1 0 00-2 0V15a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h1.617a1 1 0 000-2zm6.969 0l-7.137 7.136a1.002 1.002 0 000 1.415c.391.39 1.024.39 1.415 0L19 6.414v3.642a1 1 0 002 0V4a1 1 0 00-1-1h-6.056a1 1 0 000 2h3.642z"
				fill={props.color}
			/>
		</svg>
	);
}

export const CheckIcon = ({ check, ...props }) => (
	<svg
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		fillRule="evenodd"
		clipRule="evenodd"
		strokeLinejoin="round"
		strokeMiterlimit={2}
		fill={props.color}
		width={props.r}
		height={props.r}
		{...props}
	>
		{check ? (
			<path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM6.99 13.768l2.828 2.828a1.5 1.5 0 002.121 0l7.071-7.071a1.5 1.5 0 10-2.121-2.121l-6.01 6.01-1.768-1.768a1.501 1.501 0 00-2.121 2.122z" />
		) : (
			<path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zm0 3c4.967 0 9 4.033 9 9s-4.033 9-9 9-9-4.033-9-9 4.033-9 9-9z" />
		)}
	</svg>
);
