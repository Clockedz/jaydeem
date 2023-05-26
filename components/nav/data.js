import React, {useEffect, useRef} from "react";
import anime from "animejs";

export const triangle = (
	<svg
		width="12"
		height="28"
		viewBox="0 0 12 28"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12 14L0.75 27.8564V0.143594L12 14Z" fill="white" />
	</svg>
);

export const filledCircle = () => {
	const circleRef = useRef([]);

	useEffect(() => {
		anime({
			targets: circleRef.current,
			r: 16,
			duration: 1000,
			easing: "easeOutExpo",
		});
	}, []);

	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle ref={circleRef} cx="16" cy="16" r="3" fill="white" />
		</svg>
	);
};

export const circle = (
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
