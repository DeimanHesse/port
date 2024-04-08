"use client";
import { useEffect, useState } from "react";

import "./Preloader.scss";
const Preloader = ({ headerVisible, setHeaderState, showContent, setWall }) => {
  const closeWall = () => {
    setWall(true);
  };

  useEffect(() => {
    setHeaderState(true);
    return () => closeWall(); // Очистка таймера при размонтировании
  }, []);

  return <div className={showContent ? "preload" : "preload hidden"}></div>;
};

export default Preloader;
