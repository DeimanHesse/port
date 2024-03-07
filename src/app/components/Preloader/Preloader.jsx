"use client";
import { useEffect } from "react";
import "./Preloader.scss";
const Preloader = ({ headerVisible, setHeaderState, showContent }) => {
  useEffect(() => {
    return () => {
      // headerVisible.current = true;
      // console.log(headerVisible.current);
      setHeaderState(true);
    };
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
