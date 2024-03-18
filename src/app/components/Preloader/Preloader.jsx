"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.scss";
const Preloader = ({ headerVisible, setHeaderState, showContent }) => {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     // Код, который должен выполниться перед размонтированием компонента
  //   }, 4000); // Задержка в 2 секунды

  //   return () => clearTimeout(timeout); // Очистка таймера при размонтировании
  // }, []);

  useEffect(() => {
    setHeaderState(true);
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
    // <AnimatePresence mode="sync">
    //   <motion.div
    //     // transition={{ duration: 16 }}
    //     transition={{ duration: 10.2 }}
    //     className="loading-exit"
    //     key="modal"
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     exit={{ color: "red" }}
    //   >
    //     1111111111
    //   </motion.div>
    // </AnimatePresence>
  );
};

export default Preloader;
