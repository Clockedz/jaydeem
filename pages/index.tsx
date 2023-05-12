import Head from "next/head";
import Layout from "@components/layout";
import Image from "next/image";
import React from "react";
import {motion} from "framer-motion";

export default function Home() {
	return (
		<Layout>
			<main>
				<div className="relative h-screen w-auto overflow-hidden">
					<video
						src={require("@public/videos/video.mp4")}
						autoPlay
						loop
						muted
						className="w-full h-full object-cover z-0"
					></video>
					<div className="flex justify-center items-center absolute top-0 left-0 w-full h-full font-text flex-col text-5xl lg:text-7xl text-center sm:text-left">
						<h1 className="block">Japan's</h1>
						<h1 className="block w-100 pt-2">
							Prestigious Lineage
						</h1>
					</div>
				</div>
				<div className="font-text flex items-center w-full h-1/2 overflow-hidden pt-64 sm:pt-32">
					<section className="ml-6 lg:ml-64 inline-flex width-screen">
						<h1 className="text-4xl lg:text-5xl text-black z-10 ml-2 mt-2 lg:ml-4 lg:mt-4">
							Ori
						</h1>
						<h1 className="text-4xl lg:text-5xl mt-2 lg:mt-4">
							gin
						</h1>

						<motion.div className="w-14 h-14 bg-zinc-300 absolute rounded-md lg:w-20 lg:h-20"></motion.div>
					</section>
				</div>
				<div className="font-text w-2/3 lg:w-1/2 ml-16 lg:ml-80 pl-3 lg:pl-5 mt-5 lg:mt-10">
					<p className="">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</main>
		</Layout>
	);
}
