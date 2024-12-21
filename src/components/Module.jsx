import React from "react";
import VideoPlayer from "./VideoPlayer";

const Module = ({ moduleId, srcMod }) => {
  return (
    <div className="modules" id={moduleId}>
      <VideoPlayer urlSrc={srcMod} />
    </div>
  );
};

export default Module;
