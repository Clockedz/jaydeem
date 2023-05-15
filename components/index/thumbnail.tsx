import React from "react";
import Integra from "./hero/heroIntegra";
import Supra from "./hero/heroSupra";
import GTR from "./hero/heroGTR";
import RX7 from "./hero/heroRX7";
import Evo from "./hero/heroEvo";
import WRX from "./hero/heroWRX";

export default function Thumbnail() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="flex flex-wrap">
        <Integra />
        <Supra />
        <RX7 />
        <GTR />
        <Evo />
        <WRX />
      </div>
      <h1></h1>
      <div className="h-full w-full bg-white absolute"></div>
    </div>
  );
}
