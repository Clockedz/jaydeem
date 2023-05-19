import React from "react";
import Mobile from "./nav/mobile";
import Desktop from "./nav/desktop";

export default function Navbar() {
	const isMobile =
		/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
		window.innerWidth <= 768;

	return isMobile ? <Mobile /> : <Desktop />;
}