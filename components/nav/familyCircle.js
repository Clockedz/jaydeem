import {motion} from "framer-motion";
import {circle} from "./data";
import React from "react";

export const FamilyCircle = () => {
	return (
		<>
			<motion.div
				initial={{x: -32}}
				animate={{x: 10}}
				transition={{
					duration: 0.5,
					delay: 0.3,
					exit: {
						duration: 0.5,
						delay: 0.3,
						when: "beforeChildren", // Add this line to animate the exit at once
					},
				}}
				exit={{x: 60}}
			>
				{circle}
			</motion.div>
			<motion.div
				initial={{x: -64}}
				animate={{x: 20}}
				transition={{
					duration: 0.5,
					delay: 0.2,
					exit: {
						duration: 0.5,
						delay: 0.2,
						when: "beforeChildren", // Add this line to animate the exit at once
					},
				}}
				exit={{x: 70}}
			>
				{circle}
			</motion.div>
			<motion.div
				initial={{x: -96}}
				animate={{x: 30}}
				transition={{
					duration: 0.5,
					delay: 0.1,
					exit: {
						duration: 0.5,
						delay: 0.1,
						when: "beforeChildren", // Add this line to animate the exit at once
					},
				}}
				exit={{x: 80}}
			>
				{circle}
			</motion.div>
		</>
	);
};
