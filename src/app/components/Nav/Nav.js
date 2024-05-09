import { useState, memo } from "react";
import { Link, useLocation } from "react-router-dom";

import { Text } from "app/components";
import { Space, Icon } from "app/Symbols";
import socials from "assets/data/socials.json";

import "./Nav.scss";

const Nav = () => {
	const { pathname } = useLocation();
	const [mobileExpand, setMobileExpand] = useState(false);
	const toggleMobileExpand = () => {
		setMobileExpand(!mobileExpand);
	};
	if (pathname === "/designathon22/" || pathname === "/designathon22")
		return <></>;

	// Catches paths with text after designathon/ or designathons/
	const isDesignathon = /designathons?\/\w+/.test(pathname);

	return (
		<nav className={isDesignathon ? null : "stickyNav"}>
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
						<Link to="/resources" className="item center">
							<Text>Resources</Text>
						</Link>
						<Link to="/houses" className="item center">
							<Text>Houses</Text>
						</Link>
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
						{[
							{ label: "Events", url: "/events" },
							{ label: "Resources", url: "/resources" },
							{ label: "About", url: "/about" },
							{ label: "Contact", url: "/contact" },
							{ label: "Houses", url: "/houses" },
						].map(({ label, url }) => (
							<Link key={url} to={url} className="item center">
								<Text size="L">{label}</Text>
							</Link>
						))}
						<Link
							to="/join"
							className="item center button fill sky"
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
