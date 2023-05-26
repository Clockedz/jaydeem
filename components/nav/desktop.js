import React, {useEffect, useRef} from "react";
import {useRouter} from "next/router";
import anime from "animejs";
import {motion} from "framer-motion";
import {triangle} from "./data";
import {filledCircle} from "./data";
import {circle} from "./data";
// import FilledCircle from "./xd";

const Desktop = () => {
	const router = useRouter();
	const [home, setHome] = React.useState(true);
	const [family, setFamily] = React.useState(false);
	const [lookbook, setLookbook] = React.useState(false);

	const circleRefs = useRef([]);
	const triRefs = useRef([]);

	const isActive = (path) => {
		return router.pathname === path ? "active" : "";
	};

	function familyClick() {
		setFamily(true);
	}

	useEffect(() => {
		const circles = circleRefs.current;
		const triangles = triRefs.current;

		circles.forEach((circleElement, index) => {
			anime({
				targets: circleElement,
				translateX: [-100, 0],
				duration: 1000,
				easing: "easeInOutCirc",
				delay: 100 * index,
			});
		});
	}, []);

	useEffect(() => {
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
	}, [router.pathname]);

	return (
		<nav
			className={`flex flex-wrap fixed text-xl bottom-0 z-10 font-text pl-4 mb-5`}
		>
			<div className="pr-2 grid grid-cols-1 gap-2">
				<div
					className={lookbook ? "visible" : "invisible"}
					ref={(eL) => (circleRefs.current[5] = eL)}
				>
					{triangle}
				</div>
				<div
					className={family ? "visible" : "invisible"}
					ref={(eL) => (circleRefs.current[4] = eL)}
				>
					{triangle}
				</div>
				<div
					className={home ? "visible" : "invisible"}
					ref={(eL) => (circleRefs.current[3] = eL)}
				>
					{triangle}
				</div>
			</div>
			<div className="grid grid-cols-1 gap-2 mb-1">
				<div ref={(el) => (circleRefs.current[2] = el)}>
					{lookbook ? filledCircle() : circle}
				</div>
				<div
					ref={(el) => (circleRefs.current[1] = el)}
					onClick={familyClick}
				>
					{family ? filledCircle() : circle}
				</div>
				<div ref={(el) => (circleRefs.current[0] = el)}>
					{home ? filledCircle() : circle}
				</div>
			</div>
		</nav>
	);
};

export default Desktop;
