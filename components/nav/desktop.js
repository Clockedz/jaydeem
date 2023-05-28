import React, {useEffect, useRef} from "react";
import {useRouter} from "next/router";
import anime from "animejs";
import {motion, AnimatePresence} from "framer-motion";
import {triangle} from "./data";
import {filledCircle} from "./data";
import {circle} from "./data";
import {FamilyCircle} from "./familyCircle";

const Desktop = () => {
	const router = useRouter();
	const [home, setHome] = React.useState(true);
	const [family, setFamily] = React.useState(false);
	const [lookbook, setLookbook] = React.useState(false);
	const [isLookbookHovered, setIsLookbookHovered] = React.useState(false);
	const [isFamilyHovered, setIsFamilyHovered] = React.useState(false);
	const [isHomeHovered, setIsHomeHovered] = React.useState(false);

	const circleRefs = useRef([]);
	const triRefs = useRef([]);
	const hover =
		"transition-transform duration-500 ease-in-out hover:translate-x-5";

	const isActive = (path) => {
		return router.pathname === path ? "active" : "";
	};

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
			<div className="grid grid-cols-1 gap-2">
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
			<div className="grid grid-cols-1 mb-2">
				<div
					className={`${lookbook ? "" : hover} p-1 pr-2 pl-2 circle`}
					onMouseEnter={() => setIsLookbookHovered(true)}
					onMouseLeave={() => setIsLookbookHovered(false)}
				>
					{lookbook ? filledCircle : circle}
				</div>
				<div
					className={`${
						family ? "" : hover
					} p-1 pr-2 pl-2 min-h-fit ${
						setIsFamilyHovered ? "flex flex-row" : ""
					} circle`}
					onMouseEnter={() => setIsFamilyHovered(true)}
					onMouseLeave={() => setIsFamilyHovered(false)}
				>
					{isFamilyHovered ? filledCircle : circle}
					<AnimatePresence>
						{isFamilyHovered && <FamilyCircle />}
					</AnimatePresence>
				</div>
				<div
					className={`${home ? "" : hover} p-1 pr-2 pl-2 cirle`}
					onMouseEnter={() => setIsHomeHovered(true)}
					onMouseLeave={() => setIsHomeHovered(false)}
				>
					{home ? filledCircle : circle}
				</div>
			</div>
		</nav>
	);
};

export default Desktop;
