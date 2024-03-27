"use client";
import {
  Suspense,
  useRef,
  useState,
  useEffect,
  useTransition,
  useLayoutEffect,
} from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Sky as SkyImpl, Stars } from "@react-three/drei";
import gsap from "gsap";

import "./MainSection.scss";

import Moon from "../components/Moon/Moon.jsx";
import SkyBox from "../components/SkyBox";

import Pyramids from "../components/Pyramids";
import CloudsComp from "../components/Clouds/Clouds";
import CloudsComp2 from "../components/Clouds/Clouds2";

import WorkExpierence from "./Expirience/Expirience";
import About from "./About/About";
import Works from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";

import workExamples from "../data/WorkExamplesData";
import Popup from "../components/Popup/Popup";
import Preloader from "../components/Preloader/Preloader";

import dynamic from "next/dynamic";
import { Perf } from "r3f-perf";
// Client Components:
import Header from "../layout/Header/Header";

const CameraSearch = ({ cameraRef }) => {
  return (
    <OrbitControls
      target={[0, 150, -330]}
      ref={cameraRef}
      enableZoom={false}
      enableRotate={false}
    />
  );
};

const MainSecText = ({ headerState }) => {
  if (!headerState) {
    return;
  }
  return (
    <>
      <div className="front-text">
        <div className="front-text__title">
          <span>Dmitry</span>
          <span>Sinikov</span>
        </div>
        <div className="front-text__subtitle">Web-Development</div>
      </div>
      <div className="scroll-text">
        <div className="scroll-text__dots">
          <div className="scroll-text__dot"></div>
          <div className="scroll-text__dot"></div>
          <div className="scroll-text__dot"></div>
        </div>
        <div className="scroll-text__content">Scroll down</div>
      </div>
    </>
  );
};

const MainSection = ({ userAgent }) => {
  const textRef = useRef();
  const domnodeRef = useRef();
  const moonRef = useRef();
  const canvasRef = useRef();
  const cameraRef = useRef();

  const secondSectionRef = useRef();
  const thirdSectionRef = useRef();
  const fourSectionRef = useRef();
  const fiveSectionRef = useRef();

  const stopFlagRef = useRef(true);
  const currentStageRef = useRef(1);
  const targetStageRef = useRef(0);
  const lightRef1 = useRef(0);
  const glowObjRef = useRef(0);

  const skyBoxRef = useRef();
  const skyBoxMatRef = useRef();

  const ambientLightRef = useRef();
  const workExampleRef = useRef();
  const pointLightRef = useRef();

  const [popup, setPopup] = useState(false);

  const [popupData, setPopupData] = useState({
    title: "",
    text: "",
    picture: "/",
  });

  const popupCall = (index) => {
    if (!popup) {
      workExampleRef.current?.focus();
      setPopupData(workExamples[index]);
    }
    workExampleRef.current?.blur();
    setPopup(!popup);
  };

  let tl = gsap.timeline();
  const cPosRef = useRef(true);
  const dTextref = useRef();

  const animArr = [
    function one(direction) {
      if (!direction) {
        tl.to(".scroll-text", {
          opacity: 0,
          duration: 1,
        });
        tl.to(
          ".front-text",
          {
            opacity: 0,
            duration: 1,
          },
          "<"
        );
        tl.eventCallback("onComplete", null);
      } else {
        tl.to(cameraRef.current.position0, {
          x: 0,
          y: 80,
          z: 520,
          duration: 1,
          ease: "sine.out",
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.target0,
          {
            x: 0,
            y: 150,
            z: -330,
            duration: 1,
          },
          "<"
        );
        tl.to(
          ".blur",
          {
            opacity: 0,
            duration: 0.5,
          },
          "<"
        );
        tl.to(".scroll-text", {
          opacity: 1,
          duration: 1,
        });
        tl.to(
          ".front-text",
          {
            opacity: 1,
            duration: 1,
          },
          "<"
        );
        tl.to(
          pointLightRef.current,
          {
            intensity: 0.9,
            duration: 0.5,
            ease: "power1.out",
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );

        tl.eventCallback("onComplete", null);
      }
    },
    function two(direction) {
      if (direction) {
        tl.to(".blur", {
          opacity: 1,
          duration: 0.4,
        });
        tl.to(cameraRef.current.position0, {
          y: 23,
          duration: 0.5,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.position0,
          {
            z: 296,
            duration: 0.5,
            ease: "power1.out",
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );
        tl.to(
          cameraRef.current.position0,
          {
            x: -210,
            y: 30,
            z: 200,
            duration: 1,
            ease: "back.out(2)",
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );
        tl.to(
          cameraRef.current.target0,
          {
            z: -330,
            x: -200,
            y: -150,
            duration: 1,
            ease: "power1.out",
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );
        tl.to(
          cameraRef.current.target0,
          {
            x: 200,
            z: -300,
            duration: 1,
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );

        tl.to(secondSectionRef.current, {
          opacity: 1,
          duration: 0.5,
          pointerEvents: "all",
        });
        tl.fromTo(
          ".about__text",
          {
            translateX: "0",
            translateY: "50%",
            opacity: 0,
          },
          {
            opacity: 1,
            translateY: "0",
            duration: 0.5,
            ease: "back.out(3)",
            onUpdate: () => {
              // secondSectionRef.current.reset();
            },
          }
        );
        tl.fromTo(
          ".about__image",
          { translateX: "0", translateY: "-50%", opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            translateY: "0",
            pointerEvents: "none",
            ease: "back.out(1.7)",
            onUpdate: () => {
              // secondSectionRef.current.reset();
            },
          },
          "<"
        );

        tl.eventCallback("onComplete", null);
      } else {
        // tl.to("canvas", {
        //   filter: "blur(0px) grayscale(0) contrast(1)",
        //   // filter: "grayscale(1) contrast(1.1)",
        //   duration: 0.1,
        // });

        tl.to(".about__text", {
          opacity: 0,
          translateX: "100%",
          duration: 0.5,
          pointerEvents: "none",
          onUpdate: () => {
            // secondSectionRef.current.reset();
          },
        });
        tl.to(
          ".about__image",
          {
            opacity: 0,
            duration: 0.5,
            translateX: "-100%",
            pointerEvents: "none",
            onUpdate: () => {
              // secondSectionRef.current.reset();
            },
          },
          "<"
        );
        tl.to(secondSectionRef.current, {
          opacity: 0,
          duration: 0.5,
          pointerEvents: "none",
          onUpdate: () => {
            // secondSectionRef.current.reset();
          },
        });
        tl.eventCallback("onComplete", null);
      }
    },
    function three(direction) {
      if (direction) {
        tl.to(cameraRef.current.target0, {
          x: 20,
          z: -300,
          y: 200,
          duration: 1,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.position0,
          {
            x: -210,
            y: 30,
            z: -200,
            duration: 1,
            ease: "power1.out",
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );
        tl.to(
          pointLightRef.current,
          {
            intensity: 0,
            duration: 1,
            ease: "power1.out",
            // onUpdate: () => {
            //   cameraRef.current.reset();
            // },
          },
          "<"
        );
        tl.to(".blur", {
          opacity: 1,
          duration: 0.4,
        });

        // tl.to(
        //   "canvas",
        //   {
        //     filter: "blur(3px) grayscale(1) contrast(1.1)",
        //     // filter: "grayscale(1) contrast(1.1)",
        //     duration: 0.2,
        //   },
        //   "<"
        // );
        // // ПОЯВЛЕНИЕ HTML
        tl.to(thirdSectionRef.current, {
          opacity: 1,
          duration: 1.3,
          pointerEvents: "all",
        });

        // tl.fromTo(
        //   ".work-expirience__card-date",
        //   {
        //     scale: 0,
        //   },
        //   {
        //     scale: 1,
        //     duration: 0.5,
        //     ease: "back.out(2)",
        //     // repeat: -1,
        //     // delay: 1,
        //     // // reversed: true,
        //     // yoyo: true,
        //   },
        //   "+=1"
        // );
        tl.fromTo(
          ".work-expirience__card",
          {
            translateY: "-50px",
            opacity: 0,
          },
          {
            opacity: 1,
            translateY: "0px",
            duration: 0.8,
            ease: "back.out(2)",
            // repeat: -1,
            // delay: 1,
            // // reversed: true,
            // yoyo: true,
            onComplete: () => {
              setTimeout(() => {
                document
                  .querySelector(".work-expirience__cards-inner")
                  .classList.add("active");
              }, 300);
            },
          }
        );
        // tl.add(".work-expirience__cards-inner", { className: "active" });

        // tl.eventCallback("onComplete", null);
      } else {
        // tl.to(".work-expirience__card", {
        //   scale: 0,

        //   duration: 1.3,
        //   ease: "back.out(2)",
        //   // repeat: -1,
        //   // delay: 1,
        //   // // reversed: true,
        //   // yoyo: true,
        // });
        tl.to(thirdSectionRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
          onComplete: () => {
            setTimeout(() => {
              document
                .querySelector(".work-expirience__cards-inner")
                .classList.add("active");
            }, 300);
          },
        });

        tl.eventCallback("onComplete", null);
      }
    },
    function four(direction) {
      tl.to(".blur", {
        opacity: 1,
        duration: 0.4,
      });
      if (direction) {
        tl.to(cameraRef.current.position0, {
          x: 310,
          y: 30,
          z: 60,
          duration: 1,
          ease: "back.out(1)",
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });

        tl.to(
          cameraRef.current.target0,
          {
            x: 20,
            z: -300,
            y: 200,
            duration: 1,
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );
        // ПОЯВЛЕНИЕ HTML
        tl.to(fourSectionRef.current, {
          opacity: 1,
          pointerEvents: "all",
          duration: 2,
        });
        tl.eventCallback("onComplete", null);
      } else {
        tl.to(fourSectionRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
        });
        tl.eventCallback("onComplete", null);
      }
    },
    function five(direction) {
      if (direction) {
        tl.to(".blur", {
          opacity: 0,
          duration: 0.4,
        });
        tl.to(cameraRef.current.target0, {
          x: 0,
          z: 520,
          y: 500,
          duration: 1,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.position0,
          {
            x: 0,
            y: 80,
            z: 520,
            duration: 2,
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );

        tl.to(fiveSectionRef.current, {
          opacity: 1,
          pointerEvents: "all",
          duration: 1,
        });
        tl.to(pointLightRef.current, {
          intensity: 0.9,
          duration: 1,
          ease: "power1.out",
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });

        tl.eventCallback("onComplete", null);
      } else {
        tl.to(pointLightRef.current, {
          intensity: 0,
          duration: 1,
          ease: "power1.out",
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(fiveSectionRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
        });
        tl.to(
          ".front-text",
          {
            opacity: 0,
            duration: 1,
          },
          "<"
        );
        tl.eventCallback("onComplete", null);
      }
    },
  ];

  const setStage = (targetStage, currentStage) => {
    animArr[currentStage - 1](false);
    animArr[targetStage - 1](true);
  };

  const weelHandler = async (e) => {
    console.log("ffffffffdfd");
    console.log(userAgent);
    if (userAgent && !userAgent.toLowerCase().includes("mobile")) {
      console.log(userAgent);
      if (stopFlagRef.current) {
        console.log("call");
        stopFlagRef.current = false;
        let targetStage;
        if (e.deltaY > 0 && currentStageRef.current + 1 < 6) {
          targetStage = currentStageRef.current + 1;
          setStage(targetStage, currentStageRef.current);
          currentStageRef.current = currentStageRef.current + 1;
        } else if (e.deltaY < 0 && currentStageRef.current - 1 > 0) {
          targetStage = currentStageRef.current - 1;
          setStage(targetStage, currentStageRef.current);
          currentStageRef.current = currentStageRef.current - 1;
        }
        setTimeout(() => {
          stopFlagRef.current = true;
        }, 2000);
      }
    }
  };

  const [headerState, setHeaderStete] = useState(false);

  const headerVisible = useRef(false);

  const [showContent, setShowContent] = useState(true);

  const [burgerActive, setBurgerActive] = useState(false);

  const burgerHandler = () => {
    setBurgerActive(!burgerActive);
  };

  const headerHandler = async (e, id) => {
    e.preventDefault();
    if (burgerActive) {
      console.log(burgerActive);
      setBurgerActive(false);
    }
    let targetStage;
    targetStage = Number(e.target.id);

    if (targetStage === currentStageRef.current) return;
    setStage(targetStage, currentStageRef.current);
    currentStageRef.current = targetStage;
  };

  console.log(skyBoxRef.current);

  const red = new THREE.MeshPhysicalMaterial({
    side: THREE.DoubleSide,
    emissiveIntensity: 0.1,
    emissive: "black",
    roughness: 0.05,
    metalness: 0.5,
    transmission: 1,
    reflectivity: 0.2,
    ior: 2.33,
    thickness: 0.3,
  });

  useEffect(() => {
    // const wrap = document.querySelector("html");
    // window.addEventListener("weel", (e) => weelHandler(e));
  }, []);

  const [wall, setWall] = useState(false);
  useLayoutEffect(() => {
    console.log("mounted");
    console.log(wall);

    // setShowContent(true);
  }, []);

  return (
    <div
      ref={domnodeRef}
      onWheel={(e) => weelHandler(e)}
      className="mainSection"
    >
      <div className={wall ? "layoutWall" : "layoutWall active"}>
        <div className="layoutWall__inner">
          <div className={!wall ? "preload" : "preload hidden"}>
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
          <div className="layoutWall__top"></div>
          <div className="layoutWall__bottom"></div>
        </div>
      </div>
      <Header
        headerState={headerState}
        headerVisible={headerVisible}
        headerHandler={headerHandler}
        burgerActive={burgerActive}
        burgerHandler={burgerHandler}
      />
      <MainSecText headerState={headerState} />
      <div className="blur"></div>
      <div className={popup ? "wrapper blured" : "wrapper"}>
        <div className="app-inner">
          <About secondSectionRef={secondSectionRef} />
          <WorkExpierence thirdSectionRef={thirdSectionRef} />
          <Works
            popup={popup}
            popupCall={popupCall}
            setPopup={setPopup}
            fourSectionRef={fourSectionRef}
            workExamples={workExamples}
          />
          <Contacts fiveSectionRef={fiveSectionRef} />
        </div>
      </div>
      <Popup popup={popup} popupData={popupData} popupCall={popupCall} />

      <div
        ref={canvasRef}
        id="canvas-container"
        className={popup ? "canvas-container blured" : "canvas-container"}
      >
        <Suspense
          fallback={
            <Preloader
              headerVisible={headerVisible}
              setHeaderState={setHeaderStete}
              showContent={showContent}
              setWall={setWall}
            />
          }
        >
          {showContent && (
            <>
              <Canvas
                frameloop="demand"
                // opacity={0}
                // resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
                ref={canvasRef}
                camera={{
                  position: [0, 80, 520],
                  fov: 75,
                  near: 0.01,
                  far: 4000,
                }}
              >
                <pointLight
                  color={"white"}
                  position={[0, 600, 280]}
                  intensity={0.9}
                  decay={0.01}
                  ref={pointLightRef}
                  // power={0.7}
                />

                <ambientLight ref={ambientLightRef} intensity={2} />

                <Moon referens={moonRef} position={[0, 210, -2500]} />
                <Pyramids red={red} />

                <SkyBox
                  color={"#00040d"}
                  skyBoxMatRef={skyBoxMatRef}
                  skyBoxRef={skyBoxRef}
                />
                <CloudsComp />
                {/* <CloudsComp2 userAgent={userAgent} /> */}
                <Stars
                  radius={600}
                  depth={60}
                  count={15000}
                  factor={10}
                  saturation={3.2}
                  fade
                  speed={1}
                />
                <CameraSearch cameraRef={cameraRef} />
                {/* <Perf /> */}
              </Canvas>
            </>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default MainSection;
