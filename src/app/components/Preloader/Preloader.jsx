"use client";
import { useEffect, useState } from "react";

import "./Preloader.scss";
const Preloader = ({ headerVisible, setHeaderState, showContent, setWall }) => {
  // useEffect(() => {
  //   return () => clearTimeout(timeout); // Очистка таймера при размонтировании
  // }, []);

  const closeWall = () => {
    setWall(true);
    console.log("rrrrrrrrrrrrrrrrrrrrrr");
  };

  useEffect(() => {
    setHeaderState(true);
    return () => closeWall(); // Очистка таймера при размонтировании
  }, []);

  return (
    <div className={showContent ? "preload" : "preload hidden"}>
      <div className="preload__inner">
        <div className="prelwrapper">
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
          <div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
