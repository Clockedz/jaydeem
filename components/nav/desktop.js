import React from "react";
import {useRouter} from "next/router";
import { triangle } from "./data";
import { filledCircle } from "./data";
import { circle } from "./data";

const Desktop = () => {
  const router = useRouter();
  const [home, setHome] = React.useState(true);
  const [family, setFamily] = React.useState(false);
  const [lookbook, setLookbook] = React.useState(false);
  const [visibility, setVisibiity] = React.useState();

  const isActive = (path) => {
    return router.pathname === path ? "active" : "";
  };

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

  return (
    <nav className="flex flex-wrap fixed text-xl bottom-0 z-10 font-text pl-4 mb-5 min-h-fit">
      <div className="mt-1 pr-0.5 grid grid-cols-1 gap-1">
        <div>{triangle}</div>
        <div>{triangle}</div>
        <div>{triangle}</div>
      </div>
      <div className="grid grid-cols-1 gap-1">
        <div>{lookbook ? filledCircle : circle}</div>
        <div>{family ? filledCircle : circle}</div>
        <div>{home ? filledCircle : circle}</div>
      </div>
    </nav>
  );
};

export default Desktop;
