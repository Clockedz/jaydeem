import React from "react";
import Image from "next/image";

export default function Thumbnail() {
	return (
		<div className="w-screen h-screen bg-white relative">
			<Image
				src={"/images/integra.png"}
				width={500}
				height={500}
				alt=""
				className="w-full h-full object-cover"
			></Image>
			<h1></h1>
		</div>
	);
}
