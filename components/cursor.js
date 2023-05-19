import {useState, useEffect} from "react";

export default function Cursor() {
	const [cursorPos, setCursorPos] = useState({x: -100, y: -100});

	useEffect(() => {
		const onMouseMove = (e) => {
			setCursorPos({x: e.clientX, y: e.clientY});
		};
		document.addEventListener("mousemove", onMouseMove);

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<div
			className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full cursor-none pointer-events-none z-50"
			style={{
				transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
			}}
		/>
	);
}
