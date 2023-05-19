import React from "react";
import {useRouter} from "next/router";

const Desktop = () => {
	const router = useRouter();
	const [home, setHome] = React.useState(true);
	const [family, setFamily] = React.useState(false);
	const [lookbook, setLookbook] = React.useState(false);

	const isActive = (path) => {
		return router.pathname === path ? "active" : "";
	};

	const filledCircle = (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="16" cy="16" r="16" fill="white" />
		</svg>
	);

	if (isActive("/")) {
		if (!home) {
			setHome(true);
			setFamily(false);
			setLookbook(false);
		}
	}

	if (isActive("/family")) {
		if (!family) {
			setHome(false);
			setFamily(true);
			setLookbook(false);
		}
	}

	if (isActive("/lookbook")) {
		setHome(false);
		setFamily(false);
		setLookbook(true);
	}

	const circle = (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="16" cy="16" r="14.5" stroke="white" strokeWidth="3" />
		</svg>
	);

	console.log(isActive);

	return (
		<nav className="flex flex-col justify-center fixed text-xl bottom-0 z-10 font-text pl-5 mb-5">
			<div>{lookbook ? filledCircle : circle}</div>
			<div>{family ? filledCircle : circle}</div>
			<div>{home ? filledCircle : circle}</div>
		</nav>
	);
};

export default Desktop;
