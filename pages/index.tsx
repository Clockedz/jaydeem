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
            <p className="block">Japan's</p>
            <p className="block w-100 pt-2">Prestigious Lineage</p>
          </div>
        </div>
        <section className="font-text mx-auto my-10vw">
          <p className="font-text text-3xl absolute mt-12">Origin</p>
        </section>
      </main>
    </Layout>
  );
}
