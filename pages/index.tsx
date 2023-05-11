import Head from "next/head";
import Layout from "@components/layout";
import Image from "next/image";

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
					reverse
					<div className="flex justify-center items-center absolute top-0 left-0 w-full h-full font-text flex-col text-5xl text-center sm:text-left">
						<h1 className="block">Japan's</h1>
						<h1 className="block w-100 pt-2">
							Prestigious Lineage
						</h1>
					</div>
				</div>
				<div className="font-text flex justify-center items-center w-full h-1/2 overflow-hidden pt-32 sm:pt-16">
					<section>
						<h1 className="font-text text-4xl mr-56 lg:mr-96">
							Origin
						</h1>
					</section>
				</div>
			</main>
		</Layout>
	);
}