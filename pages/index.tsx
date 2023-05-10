import Head from "next/head";
import Layout from "@components/layout";
import Image from "next/image";

export default function Home() {
	return (
		<Layout>
			<main>
				<div className="relative h-screen w-auto overflow-x-hidden">
					<video
						src={require("@public/videos/video.mp4")}
						autoPlay
						loop
						muted
						className="w-full h-full object-cover z-0"
					></video>
					<div className="flex justify-center items-center absolute top-0 left-0 w-full h-full font-text flex-col">
						<p className="text-5xl block">Japan's</p>
						<p className="text-5xl block mt-4">
							Prestigious Lineage
						</p>
					</div>
				</div>
				<div className="w-full">origin</div>
			</main>
		</Layout>
	);
}
