"use client";
import Image from "next/image";
import {
  Suspense,
  useRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
  useFrameLoop,
} from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Sky as SkyImpl,
  StatsGl,
  Stars,
  Environment,
  // Cloud,
  // Clouds,
  // Effects,
  ScrollControls,
  Scroll,
  useScroll,
  Text,
  Billboard,
  useTexture,
  Grid,
  Lightformer,
  Text3D,
  Gltf,
  Center,
  MapControls,
  FlyControls,
  Trail,
} from "@react-three/drei";
import "./MainSection.scss";
import { Perf } from "r3f-perf";

import { useControls } from "leva";

import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

import WaterMesh from "../components/Water/WaterMesh.jsx";
import Moon from "../components/Moon/Moon.jsx";
import { Effects2 } from "../components/Effects";
import SkyBox from "../components/SkyBox";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { BrowserView, MobileView } from "react-device-detect";

import Landscape from "../components/Landscape/Landscape";
import Pyramids from "../components/Pyramids";
import CloudsComp from "../components/Clouds/Clouds";
import CloudsComp2 from "../components/Clouds/Clouds2";

import WorkExpierence from "./Expirience/WorkExpirience";
import About from "./About/About";
import Works from "./Portfolio/Portfolio";
import Contacts from "./Contacts/Contacts";

import workExamples from "../data/WorkExamplesData";
import Popup from "../components/Popup";

const GlowingObj = ({ glowObjRef, lightRef1 }) => {
  const circleMesh = useRef(null);
  const lightRef = useRef(null);
  const tl = gsap.timeline({ repeat: -1 });
  // tl.reverse(-1);
  // tl.reversed(true);

  useEffect(() => {
    // gsap.fromTo(
    //   lightRef.current,
    //   {
    //     intensity: 1,
    //   },
    //   {
    //     intensity: 8,
    //     duration: 2,
    //     repeat: -1,
    //     delay: 1,
    //     // reversed: true,
    //     yoyo: true,
    //   }
    // );
    // tl.to(circleMesh.current.material, {
    //   emissiveIntensity: 1,
    //   // b: 1,
    //   duration: 2,
    //   // ease: "back.out(1.7)",
    // });
    // lightRef.current.intensity = 5;
    // circleMesh.current.material.emissiveIntensity = 15;
  }, []);
  // myMesh.current.material.color = "red";
  // useFrame((state) => {
  //   circleMesh.current.rotation.x += 0.001;
  //   // circleMesh.current.rotation.z += 0.01;
  //   // circleMesh.current.rotation.y += 0.0005;
  // });
  return (
    <>
      <mesh ref={glowObjRef} position={[-400, 20, -180]}>
        <torusGeometry args={[25, 2.1, 11, 70]} />
        <meshStandardMaterial
          emissive="red"
          // color={"aqua"}
          emissiveIntensity={3.7}
          toneMapped={false}
        />
      </mesh>
      <EffectComposer>
        <SelectiveBloom
          // ref={lightRef}
          // lights={[lightRef1]} // ⚠️ REQUIRED! all relevant lights
          selection={[glowObjRef]} // selection of objects that will have bloom effect
          selectionLayer={1} // selection layer
          intensity={1.5} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.01} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.0025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur
        />
      </EffectComposer>
    </>
  );
};

function Greeting({ userAgent }) {
  console.log(userAgent);
  if (userAgent && userAgent.toLowerCase().includes("mobile")) {
    console.log("NOagent");
    return;
  } else {
    console.log("agent");
    console.log(userAgent);
    return (
      <>
        <WaterMesh />;
        <mesh position={[0, -13, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[2000, 2000]} />
          <meshPhongMaterial opacity={1.2} transparent color={"black"} />
          {/* <meshPhongMaterial opacity={0.5} transparent color={"blue"} /> */}
        </mesh>
      </>
    );
  }
}

const ScrollText = () => {
  const scrollTextCounterRef = useRef(0);
  const scrollTextRef = useRef(null);
  useFrame((state) => {
    // scrollTextCounterRef.current += 0.1;
    // if (scrollTextCounterRef.current < 1) {
    //   scrollTextRef.current.rotation.y += 0.01;
    // } else if (scrollTextCounterRef.current > 1) {
    //   scrollTextRef.current.rotation.y -= 0.01;
    // }
  });

  useEffect(() => {
    // console.log(scrollTextRef.current);
    // gsap.to(
    //   scrollTextRef.current.rotation,
    //   {
    //     y: 10,
    //     duration: 4,
    //   },
    //   "<"
    // );
  }, []);

  return (
    <Text3D
      ref={scrollTextRef}
      rotation={[-0.5, -0.25, 0]}
      position={[-7, 6, 435]}
      letterSpacing={0.2}
      lineHeight={0.6}
      size={3.3}
      font="/Inter_Bold.json"
      // smooth={4}
      curveSegments={32}
      bevelEnabled
      bevelSize={0.04}
      bevelThickness={1.1}
    >
      {/* {`hello\nworld`} */}
      {`scroll\ndown`}
      {/* <meshStandardMaterial /> */}
      <meshPhysicalMaterial
        // color={"#0077ff"}
        side={THREE.DoubleSide}
        // map={colorMap2}
        emissiveIntensity={0.1}
        // emissiveMap={colorMap2}
        // emissiveIntensity={2}
        // alphaMap={colorMap2}
        emissive={"blue"}
        roughness={0.2}
        metalness={1}
        transmission={1}
        reflectivity={1.1}
        ior={2.33}
        thickness={0.3}
      />
    </Text3D>
  );
};

const CameraSearch = ({ cameraRef }) => {
  return (
    <OrbitControls
      target={[0, 0, -330]}
      ref={cameraRef}
      // onChange={(e) => orbChange(e)}
      enableZoom={false}
      enableRotate={false}
    />
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
        tl.eventCallback("onComplete", null);
      } else {
        tl.to(cameraRef.current.position0, {
          x: 0,
          y: 65,
          z: 520,
          duration: 2,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.target0,
          {
            x: 0,
            y: 0,
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
        // tl.to(
        //   "canvas",
        //   {
        //     filter: "blur(0px) grayscale(0) contrast(1)",
        //     duration: 1,
        //   },
        //   "<"
        // );
        // tl.fromTo(
        //   dTextref.current.position,
        //   {
        //     x: -500,
        //   },
        //   {
        //     // background: "linear-gradient(#031730 15%, #000002 45%)",
        //     x: 0,
        //     duration: 0.4,
        //   }
        // );
        // tl.to(dTextref.current.position, {
        //   // background: "linear-gradient(#031730 15%, #000002 45%)",
        //   y: 0,
        //   duration: 0.4,
        // });
        // tl.to(
        //   skyBoxMatRef.current.color,
        //   {
        //     // color: "#0e1925",
        //     r: 0.014,
        //     g: 0.025,
        //     b: 0.037,
        //     duration: 4,
        //   },
        //   "<"
        // );

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
            x: -200,
            z: -1000,
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
          ".rabout-card22",
          {
            translateX: "0",
            translateY: "50%",
            opacity: 0,
          },
          {
            opacity: 1,
            translateY: "0",
            // translateX: "100%",
            duration: 0.5,
            ease: "back.out(1.7)",
            // pointerEvents: "none",
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
        // tl.to(
        //   ".about__text",
        //   {
        //     // backgroundColor: "#ffffff69",
        //     // backgroundColor: "#0d2c4f91",
        //     // filter: "blur(0px)",
        //     duration: 1,
        //   },
        //   "<"
        // );

        // tl.to(".about__text", {
        //   // backgroundColor: "#ffffff69",
        //   // filter: "blur(0px)",
        //   opacity: 1,
        //   duration: 0.3,
        // });

        tl.eventCallback("onComplete", null);
      } else {
        // tl.to("canvas", {
        //   filter: "blur(0px) grayscale(0) contrast(1)",
        //   // filter: "grayscale(1) contrast(1.1)",
        //   duration: 0.1,
        // });

        tl.to(".rabout-card22", {
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
        tl.to(".work-expirience__line-inner", {
          height: "100%",
          duration: 0.6,
          ease: "back.out(2)",
        });
        tl.fromTo(
          ".work-expirience__card-date",
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)",
            // repeat: -1,
            // delay: 1,
            // // reversed: true,
            // yoyo: true,
          },
          "+=1"
        );
        tl.fromTo(
          ".work-expirience__card",
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.8,
            ease: "back.out(2)",
            // repeat: -1,
            // delay: 1,
            // // reversed: true,
            // yoyo: true,
          }
        );

        // tl.eventCallback("onComplete", null);
      } else {
        tl.to(".work-expirience__card", {
          scale: 0,

          duration: 1.3,
          ease: "back.out(2)",
          // repeat: -1,
          // delay: 1,
          // // reversed: true,
          // yoyo: true,
        });
        tl.to(thirdSectionRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
        });
        tl.to(".work-expirience__line-inner", {
          height: "0%",
          duration: 0.3,
          ease: "back.out(2)",
        });
        tl.eventCallback("onComplete", null);
      }
    },
    function four(direction) {
      if (direction) {
        tl.to(cameraRef.current.position0, {
          x: 310,
          y: 30,
          z: 60,
          duration: 1,
          ease: "power1.out",
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(".blur", {
          opacity: 1,
          duration: 0.4,
        });
        // tl.to(
        //   cameraRef.current.position0,
        //   {
        //     // x: -210,
        //     // y: 30,
        //     z: -200,
        //     duration: 1,
        //     ease: "power1.out",
        //     onUpdate: () => {
        //       cameraRef.current.reset();
        //     },
        //   },
        //   "<"
        // );

        // tl.to("canvas", {
        //   filter: "blur(6px) grayscale(1) contrast(1.1)",
        //   // filter: "grayscale(1) contrast(1.1)",
        //   duration: 1,
        // });
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
          x: cameraRef.current.position0.x,
          z: cameraRef.current.position0.z,
          y: 500,
          duration: 1,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.position0,
          {
            x: cameraRef.current.position0.x,
            y: 100,
            z: cameraRef.current.position0.z,
            duration: 2,
            ease: "power1.out",
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );

        tl.to(fiveSectionRef.current, {
          opacity: 1,
          pointerEvents: "all",
          duration: 2,
        });
        tl.eventCallback("onComplete", null);
      } else {
        tl.to(fiveSectionRef.current, {
          opacity: 0,
          pointerEvents: "none",
          duration: 0.3,
        });
        // tl.to("canvas", {
        //   filter: "blur(0px) grayscale(0) contrast(1)",
        //   // filter: "grayscale(1) contrast(1.1)",
        //   duration: 1,
        // });
        tl.eventCallback("onComplete", null);
      }
    },
  ];

  const setStage = (targetStage, currentStage) => {
    // console.log("currentStage", currentStage);
    // console.log("targetStage", targetStage);

    animArr[currentStage - 1](false);
    animArr[targetStage - 1](true);
  };

  const weelHandler = async (e) => {
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
  };

  const headerHandler = async (e, id) => {
    e.preventDefault();
    let targetStage;
    targetStage = Number(e.target.id);
    setStage(targetStage, currentStageRef.current);
    currentStageRef.current = targetStage;
  };

  const orbChange = (e) => {
    console.log(e.target);
  };

  return (
    <div ref={domnodeRef} className="mainSection">
      <header className="header">
        <nav className="navigation">
          <ul>
            <li>
              <a onClick={(e) => headerHandler(e)} id="1" href="/">
                Главная
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="2" href="/about">
                Обо мне
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="3" href="/expirience">
                Опыт работы
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="4" href="/works">
                Портфолио
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="5" href="/contacts">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </header>
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

      <Suspense fallback={<h1>loading</h1>}>
        <div
          ref={canvasRef}
          // onWheel={(e) => weelHandler(e)}
          id="canvas-container"
          className={popup ? "canvas-container blured" : "canvas-container"}
        >
          <Canvas
            frameloop="demand"
            opacity={0}
            ref={canvasRef}
            camera={{
              position: [0, 65, 520],
              fov: 75,
              near: 0.01,
              far: 4000,
            }}
          >
            <pointLight position={[0, 300, 0]} intensity={50} />
            <spotLight position={[0, 200, 0]} color={"green"} intensity={100} />
            <ambientLight ref={ambientLightRef} intensity={5} />
            <Text3D
              position={[-110, 110.8, 420]}
              // position={[-120, 110.8, 460]}
              letterSpacing={0.2}
              lineHeight={0.6}
              size={7.3}
              font="/Inter_Bold.json"
              // smooth={4}
              curveSegments={32}
              bevelEnabled
              bevelSize={0.04}
              bevelThickness={1.1}
              ref={dTextref}
            >
              {`Hello, I'm \n frontend-developer`}
              <meshPhysicalMaterial
                // color={"#0077ff"}
                side={THREE.DoubleSide}
                // map={colorMap2}
                emissiveIntensity={0.1}
                // emissiveMap={colorMap2}
                // emissiveIntensity={2}
                // alphaMap={colorMap2}
                emissive={"red"}
                // emissive={"#003153"}
                roughness={0.2}
                metalness={0.7}
                transmission={1}
                reflectivity={0.1}
                ior={2.33}
                thickness={0.3}
              />
            </Text3D>
            <ScrollText />
            <Moon referens={moonRef} position={[0, 210, -2500]} />
            <Pyramids />
            {/* <Landscape /> */}
            <SkyBox
              color={"#0e1925"}
              skyBoxMatRef={skyBoxMatRef}
              skyBoxRef={skyBoxRef}
            />
            <CloudsComp userAgent={userAgent} />
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
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
};

export default MainSection;
