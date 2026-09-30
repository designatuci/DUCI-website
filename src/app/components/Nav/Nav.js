import { useState, memo, useCallback, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { Text } from "app/components";
import { Space, Icon } from "app/Symbols";
import socials from "assets/data/socials.json";

import "./Nav.scss";

const APPS_TIP_KEY = "duci-apps-open-tip-dismissed";

const ProgramsLink = ({ onNavigate, size }) => {
	const [open, setOpen] = useState(false);
	const [showBadge, setShowBadge] = useState(false);
	const wrapRef = useRef(null);

	useEffect(() => {
		try {
			setShowBadge(localStorage.getItem(APPS_TIP_KEY) !== "1");
		} catch {
			setShowBadge(true);
		}
	}, []);

	useEffect(() => {
		if (!open) return undefined;
		const onDoc = (e) => {
			if (wrapRef.current && !wrapRef.current.contains(e.target)) {
				setOpen(false);
			}
		};
		const onKey = (e) => {
			if (e.key === "Escape") setOpen(false);
		};
		document.addEventListener("mousedown", onDoc);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onDoc);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);

	const dismiss = useCallback(() => {
		setOpen(false);
		setShowBadge(false);
		try {
			localStorage.setItem(APPS_TIP_KEY, "1");
		} catch {
			/* ignore */
		}
	}, []);

	const toggleTip = useCallback((e) => {
		e.preventDefault();
		e.stopPropagation();
		setOpen((v) => !v);
	}, []);

	return (
		<div className="programsNav" ref={wrapRef}>
			<Link
				to="/programs"
				className="item center"
				onClick={onNavigate}
			>
				{size ? <Text size={size}>Programs</Text> : <Text>Programs</Text>}
			</Link>
			{showBadge ? (
				<>
					<button
						type="button"
						className="appsBadge"
						aria-label="Applications are open"
						aria-expanded={open}
						aria-controls="apps-open-tip"
						onClick={toggleTip}
					>
						<span className="appsBadgeDot" aria-hidden="true" />
					</button>
					{open ? (
						<div
							id="apps-open-tip"
							className="appsPopover"
							role="dialog"
							aria-label="Program applications"
						>
							<p className="appsPopoverTitle">Applications open</p>
							<p className="appsPopoverBody">
								Mentorship, Design-a-thon, Project Teams, and more
								are accepting applications — click to find out
								more.
							</p>
							<div className="appsPopoverActions">
								<Link
									to="/programs"
									className="appsPopoverCta"
									onClick={() => {
										dismiss();
										onNavigate?.();
									}}
								>
									View Programs
								</Link>
								<button
									type="button"
									className="appsPopoverDismiss"
									onClick={dismiss}
								>
									Dismiss
								</button>
							</div>
						</div>
					) : null}
				</>
			) : null}
		</div>
	);
};

const Nav = () => {
	const { pathname } = useLocation();
	const [mobileExpand, setMobileExpand] = useState(false);

	const toggleMobileExpand = useCallback(() => {
		setMobileExpand(!mobileExpand);
	}, [mobileExpand]);

	const closeMobile = useCallback(() => {
		setMobileExpand(false);
	}, []);

	if (pathname === "/designathon22/" || pathname === "/designathon22")
		return <></>;

	return (
		<nav>
			<div id="nav" mobile-expand={mobileExpand ? "true" : "false"}>
				<div className="wrapper center wide">
					<div className="center row group left">
						{pathname === "/" ? (
							<>
								<Space w="8" />
								{socials.map(({ name, icons, link }) => (
									<a
										key={name}
										target="_blank"
										rel="noreferrer noopener"
										href={link}
										className="item social center"
									>
										<Icon
											w="24"
											h="24"
											hoverable
											src={icons.nav}
										/>
									</a>
								))}
							</>
						) : (
							<Link to="/" className="logo item center brand">
								<Icon w="24" h="24" src="logo.svg" />
								<Space w="16" />
								<Text>Design at UCI</Text>
							</Link>
						)}
					</div>
					<div className="center row group">
						<Link to="/join" className="item center">
							<Text>Join</Text>
						</Link>
						<Link to="/events" className="item center">
							<Text>Events</Text>
						</Link>
						<ProgramsLink />
					</div>
					<div className="center row group right">
						<Link to="/about" className="item center">
							<Text>About</Text>
						</Link>
						<Link to="/contact" className="item center">
							<Text>Contact</Text>
						</Link>
					</div>
				</div>
				<div className="wrapper center mobile">
					<div className="center row group left">
						{pathname === "/" ? (
							<>
								<Space w="8" />
								{socials.map(({ name, icons, link }) => (
									<a
										key={name}
										href={link}
										className="item social center"
									>
										<Icon
											w="24"
											h="24"
											hoverable
											src={icons.nav}
										/>
									</a>
								))}
							</>
						) : (
							<Link to="/" className="item center brand">
								<Icon w="24" h="24" src="logo.svg" />
								<Space w="24" />
								<Text>Design at UCI</Text>
							</Link>
						)}
					</div>
					<div className="center row group right">
						<button
							className="item center"
							id="navToggle"
							onClick={toggleMobileExpand}
							style={{
								border: "none",
								display: "inline-block",
								padding: "16px",
							}}
						>
							<Icon w="24" h="24" src="nav-menu.svg" />
						</button>
					</div>
					<div className="links spaceChildren">
						<Link
							to="/events"
							className="item center"
							onClick={closeMobile}
						>
							<Text size="L">Events</Text>
						</Link>
						<div className="item center programsMobileItem">
							<ProgramsLink onNavigate={closeMobile} size="L" />
						</div>
						{[
							{ label: "About", url: "/about" },
							{ label: "Contact", url: "/contact" },
						].map(({ label, url }) => (
							<Link
								key={url}
								to={url}
								className="item center"
								onClick={closeMobile}
							>
								<Text size="L">{label}</Text>
							</Link>
						))}
						<Link
							to="/join"
							className="item center button fill sky"
							onClick={closeMobile}
						>
							<Text size="L">Join</Text>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default memo(Nav);
