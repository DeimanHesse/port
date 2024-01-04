"use client";

import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
} from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Sky,
  Stars,
  Environment,
  Cloud,
  Clouds,
  Effects,
  ScrollControls,
  Scroll,
  useScroll,
  Text,
  Billboard,
  useTexture,
} from "@react-three/drei";
import "./MainSection.scss";

import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

import WaterMesh from "./components/Water/WaterMesh.jsx";
import Moon from "./components/Moon/Moon.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { Tween } from "react-gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { Water } from "three-stdlib";

// extend({ Water });

// console.log(ScrollTrigger);

import { BrowserView, MobileView } from "react-device-detect";

const ControlsForScroll = () => {
  const moonRef = useRef();
  const textRef = useRef();
  const pigMesh = useRef();

  const data = useScroll();
  useFrame(() => {
    // console.log(data);
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened

    // Will be 0 when the scrollbar is at the starting position,
    // then increase to 1 until 1 / 3 of the scroll distance is reached
    const firstSection = data.range(0, 1 / 5);
    // Will start increasing when 1 / 3 of the scroll distance is reached,
    // and reach 1 when it reaches 2 / 3rds.
    const secondSection = data.range(0, 1 / 5);
    const thirdSection = data.range(0, 1 / 5);
    // Same as above but with a margin of 0.1 on both ends
    const c = data.range(1 / 3, 1 / 3, 0.1);
    // Will move between 0-1-0 for the selected range
    const d = data.curve(1 / 3, 1 / 3);
    // Same as above, but with a margin of 0.1 on both ends
    const e = data.curve(1 / 3, 2 / 3, 0.1);
    // Returns true if the offset is in range and false if it isn't
    const f = data.visible(2 / 3, 1 / 3);
    // The visible function can also receive a margin
    const g = data.visible(2 / 3, 1 / 3, 0.1);
    const fullRange = data.range(0, 1);

    // ref.current.position.x = fullRange * 100;
    // moonRef.current.position.y = 60 + -firstSection * 300;
    moonRef.current.position.z = 100 - firstSection * 3000;
    // textRef.current.position.z = firstSection * -1350;
    // pigMesh.current.position.x = b * 150.5;
    pigMesh.current.position.x = -220 + secondSection * 750;
    // pigMesh.current.position.x = -310;
    // pigMesh.current.position.x = 190;
    if (secondSection > 0) {
      // console.log("secondSection", secondSection);
    }

    // pigMesh.current.position.x = -310 + secondSection * 370;

    // pigMesh.current.position.y = -0 + secondSection * 40;
    // pigMesh.current.position.z = -0 + secondSection * 300;

    // pigMesh.current.position.x = fullRange / 3 - 220;
    if (pigMesh.current.position.x < 0) {
    }
    // ref.current.position.x += 0.01;
    // console.log(pigMesh.current.position.x + b * 0);
  });

  let position = [0, 70, 100];

  const [photoMap] = useLoader(TextureLoader, ["images/about/aboutPhoto.jpg"]);

  return (
    <>
      <Moon referens={moonRef} position={position} />;
      {/* <Text
        ref={textRef}
        color={"white"}
        fontSize={34}
        position={[150, 40, 250]}
        maxWidth={600}
        rotateZ={90}
      >
        Hello, I m frontend-developer
      </Text> */}
      <mesh ref={pigMesh} position={[-220, 60, 200]}>
        <boxGeometry args={[70, 70, 4]} />
        <meshPhysicalMaterial
          // color={"red"}
          // side={THREE.DoubleSide}
          map={photoMap}
          emissiveIntensity={4}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          roughness={0.1}
          metalness={0.5}
          transmission={0.8}
          reflectivity={0.1}
          thickness={0.6}
        />
      </mesh>
    </>
  );
};

const HtmlSections = () => {
  const line = useRef();
  const container = useRef();
  const card = useRef();
  const data = useScroll();

  useGSAP(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(card.current, {
    //   backgroundColor: "yellow",
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: container.current,
    //     markers: true,
    //     start: "center center",
    //     scrub: true,
    //   },
    // });
  });

  // console.log(data.range);
  useFrame(() => {
    //   // console.log(tl.current);
    //   // const firstSection = data.range(0, 1 / 5);
    // const secondSection = data.range(2 / 5, 3 / 5);
    //   const fullRange = data.range(0, 1);
    //   console.log(fullRange);
    //   // moonRef.current.position.z = 100 - firstSection * 3000;
    //   // // textRef.current.position.z = firstSection * -1350;
    // //   // // pigMesh.current.position.x = b * 150.5;
    // //   // pigMesh.current.position.x = -220 + secondSection * 750;
    // gsap.to(line.current, {
    //   height: `${secondSection * 100}%`,
    //   // duration: 2,
    // });
    //   if (secondSection * 100 > 70) {
    //     gsap.to(card.current, {
    //       backgroundColor: "yellow",
    //       duration: 2,
    //     });
    //   }
  });

  useGSAP(
    () => {
      // tl.current = gsap.timeline().to(".work-expirience__line-inner", {
      //   rotate: 360,
      //   scrollTrigger: {
      //     trigger: container.current,
      //     markers: false,
      //     start: "center bottom",
      //     scrub: false,
      //     onUpdate: () => {
      //       console.log("ggggg");
      //     },
      //   },
      // });
      // gsap.to(tl.current, {
      //   height: "100%",
      //   duration: 4,
      //   scrollTrigger: {
      //     trigger: container.current,
      //     markers: true,
      //     start: "center bottom",
      //     // scrub: false,
      //     // onUpdate: () => {
      //     //   console.log("ggggg");
      //     // },
      //   },
      // });
      // const fullRange = data.range(0, 1);
      // gsap.to(tl.current, {
      //   height: `${fullRange + 100}%`,
      //   // duration: 2,
      // });
    },
    { scope: container }
  );
  return (
    <>
      <section style={{ height: "100vh", color: "white" }}>
        <h1>Banner</h1>
      </section>
      <section style={{ height: "100vh", color: "white" }}>
        <h1>About</h1>
        <p className="about-text">
          You can also call me a product designer, experience designer,
          interaction, UI, UX or by any other market defined function-title. I'm
          also a multi-disciplinary maker with over 10 years of experiences in
          wide range of design disciplines, manager, advisor, entrepreneur,
          front-end developer, music enthusiast, traveler, photographer and
          more.
        </p>
      </section>
      <section ref={container} style={{ height: "100vh", color: "white" }}>
        <h1>Work Expirience</h1>
        <div className="work-expirience">
          <div className="work-expirience__cards">
            <div ref={card} className="work-expirience__card">
              <h2 className="work-expirience__card-title">
                Frontend-разработчик
              </h2>
              <h4 className="work-expirience__card-subtitle">GoodFellaz</h4>
              <p className="work-expirience__card-text">
                You can also call me a product designer, experience designer,
                interaction, UI, UX or by any other market defined
                function-title. I'm also a multi-disciplinary maker with over 10
                years of experiences in wide range of design disciplines,
                manager, advisor, entrepreneur, front-end developer, music
                enthusiast, traveler, photographer and more.
              </p>
            </div>
            <div className="work-expirience__card">
              <h2 className="work-expirience__card-title">
                Frontend-разработчик
              </h2>
              <h4 className="work-expirience__card-subtitle">GoodFellaz</h4>
              <p className="work-expirience__card-text">
                You can also call me a product designer, experience designer,
                interaction, UI, UX or by any other market defined
                function-title. I'm also a multi-disciplinary maker with over 10
                years of experiences in wide range of design disciplines,
                manager, advisor, entrepreneur, front-end developer, music
                enthusiast, traveler, photographer and more.
              </p>
            </div>
            <div className="work-expirience__card">
              <h2 className="work-expirience__card-title">
                Frontend-разработчик
              </h2>
              <h4 className="work-expirience__card-subtitle">GoodFellaz</h4>
              <p className="work-expirience__card-text">
                You can also call me a product designer, experience designer,
                interaction, UI, UX or by any other market defined
                function-title. I'm also a multi-disciplinary maker with over 10
                years of experiences in wide range of design disciplines,
                manager, advisor, entrepreneur, front-end developer, music
                enthusiast, traveler, photographer and more.
              </p>
            </div>
          </div>
          <div className="work-expirience__line">
            <div ref={line} className="work-expirience__line-inner"></div>
          </div>
        </div>
      </section>
      <section style={{ height: "100vh", color: "white" }}>
        <h1>Works</h1>
        <div className="works__cards">
          <div className="works__card">
            <h1>Zao</h1>
          </div>
          <div className="works__card">
            <h1>Hermes</h1>
          </div>
          <div className="works__card">
            <h1>Ebis</h1>
          </div>
          <div className="works__card">
            <h1>T-Club</h1>
          </div>
          <div className="works__card">
            <h1>Техноград</h1>
          </div>
        </div>
      </section>
      <section style={{ height: "100vh", color: "white" }}>
        <h1>Contacts</h1>
      </section>
    </>
  );
};

const PageComponent = () => {
  return (
    <ScrollControls pages={5}>
      <Scroll html>
        <HtmlSections />
      </Scroll>

      <ControlsForScroll />
      {/* <Moon position={position} /> */}
      {/* </ControlsForScroll> */}
      {/* <Moon position={[-50, 150, -100]} /> */}

      {/* <GlowingObj /> */}
      {/* <Glow /> */}
      <WaterMesh />
    </ScrollControls>
  );
};

const CameraControls = ({ position, target, move, z }) => {
  //Initialize camera controls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const ref = useRef(null);

  if (move) {
    gsap.to(camera.position, { z: z, duration: 2 });
    // gsap.to(camera.l, { z: 100, duration: 2 });
  }
  // Determines camera up Axis
  // camera.up = new Vector3(0, 1, 0);

  // return the controls object
  return (
    <OrbitControls
      ref={ref}
      args={[camera, domElement]}
      panSpeed={1}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

const SkyBox = ({ skyBoxRef }) => {
  const skyTexture = useTexture("/images/sky/sky.jpg");
  const skyTexture2 = useTexture("/images/sky/sky2.jpg");
  const skyTexture3 = useTexture("/images/sky/sky3.jpg");
  const skyTexture4 = useTexture("/images/sky/sky4.jpg");

  return (
    <mesh ref={skyBoxRef} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <sphereGeometry args={[900, 64, 32]} />
      {/* <boxGeometry args={[1200, 1200, 1200]} /> */}
      {/* <meshStandardMaterial
        // map={skyTexture}
        // emissiveMap={skyTexture}
        // side={THREE.DoubleSide}
        emissiveIntensity={0.7}
        em
        emissive={1.7}
        // opacity={0.1}
        // transparent
        // color={"green"}
        // flatShading
      /> */}
      <meshPhysicalMaterial
        color={"#0b1a25"}
        // color={"#060e14"}
        // color={"#052d4c"}
        // color={"#898989"}
        side={THREE.BackSide}
        // side={THREE.FrontSide}
        // map={skyTexture4}
        emissiveIntensity={0}
        // flatShading
        emissiveMap={skyTexture3}
        // alphaMap={skyTexture}
        emissive={"white"}
        roughness={0.2}
        metalness={0.2}
        // transmission={0.8}
        // reflectivity={0.1}
        // thickness={0.9}
      />
    </mesh>
  );
};

function Ocean() {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(
    THREE.TextureLoader,
    "/images/waternormals.jpeg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3([0, -1000, 0]),
      sunColor: 0x000000,
      // waterColor: 0x001e0f,
      waterColor: 0x0d051e,
      distortionScale: 5.7,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta / 2)
  );
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />;
}

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
    return <WaterMesh />;
  }
}

const MainSection = ({ userAgent }) => {
  const textRef = useRef();
  // const data = useScroll();
  const domnodeRef = useRef();
  const htmlRef = useRef();
  const testMesh = useRef();
  const testMesh2 = useRef();
  const planeMesh = useRef();
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

  useEffect(() => {
    console.log(canvasRef.current);
  }, []);

  let tl = gsap.timeline();

  const [position, setPosition] = useState({ x: 10, y: 10, z: 10 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });
  const [move, setMove] = useState(false);
  const z = 150;
  const cPosRef = useRef(true);

  const cameraPos = () => {
    let tl = gsap.timeline();
    if (cPosRef.current) {
      cPosRef.current = !cPosRef.current;
      tl.to(cameraRef.current.position0, {
        y: 5,
        duration: 2,
        onUpdate: () => {
          cameraRef.current.reset();
        },
      });
      tl.to(cameraRef.current.position0, {
        z: 60,
        duration: 2,
        onUpdate: () => {
          cameraRef.current.reset();
        },
      });
      tl.to(
        cameraRef.current.target0,
        {
          x: -30,
          y: 5,
          z: 50,
          duration: 2,
        },
        "<"
      );
      console.log(cPosRef.current);
    } else {
      cPosRef.current = !cPosRef.current;
      // tl.reverse();
      tl.to(cameraRef.current.position0, {
        y: 50,
        duration: 2,
        onUpdate: () => {
          cameraRef.current.reset();
        },
      });
      tl.to(cameraRef.current.position0, {
        z: 360,
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
          z: 0,
          duration: 2,
        },
        "<"
      );
      console.log(cPosRef.current);
    }
    // setMove(true);

    console.log(cameraRef.current);
  };

  const animArr = [
    function one(direction) {
      console.log("dfgfdfgdgfd");
      if (!direction) {
        tl.to(moonRef.current.position, { z: -1800, duration: 1 });
        tl.to(moonRef.current.position, { y: -30, duration: 1 }, "<");

        // tl.to(canvasRef.current, {
        //   // background: "linear-gradient(#031730 15%, #000002 45%)",
        //   background: "#08082f",
        //   duration: 1,
        // });

        tl.eventCallback("onComplete", null);
      } else {
        tl.to(cameraRef.current.position0, {
          x: 0,
          z: 370,
          y: 70,
          duration: 1,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.target0,
          {
            x: 0,
            y: 0,
            z: 0,
            duration: 1,
          },
          "<"
        );
        // tl.to(skyBoxRef.current.material, {
        //   emissiveIntensity: 0,
        //   duration: 2,
        // });
        // tl.to(cameraRef.current.position0, {
        //   y: 50,
        //   duration: 2,
        //   onUpdate: () => {
        //     cameraRef.current.reset();
        //   },
        // });
        // tl.to(
        //   cameraRef.current.position0,
        //   {
        //     z: 360,
        //     duration: 2,
        //     onUpdate: () => {
        //       cameraRef.current.reset();
        //     },
        //   },
        //   "<"
        // );
        // tl.to(
        //   cameraRef.current.target0,
        //   {
        //     x: 0,
        //     y: 0,
        //     z: 0,
        //     duration: 2,
        //   },
        //   "<"
        // );
        // tl.to(textRef.current.position, { y: 40, duration: 2 });
        // let tl = gsap.timeline();
        // tl.to(canvasRef.current, {
        //   background: "#030313",
        //   // background: "linear-gradient(#031730 15%, #000002 45%)",
        //   duration: 2,
        // });
        tl.to(moonRef.current.position, { y: 50, duration: 1 }, "<");
        tl.to(moonRef.current.position, { z: 0, duration: 1 }, "<");
        tl.eventCallback("onComplete", null);
      }
    },
    function two(direction) {
      console.log("two");
      if (direction) {
        console.log(skyBoxRef.current.material);
        tl.to(cameraRef.current.position0, {
          y: 5,

          duration: 1,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(cameraRef.current.position0, {
          x: -20,
          //  y: 70,
          z: 20,
          duration: 1,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          cameraRef.current.target0,
          {
            x: -110,
            y: 10,
            z: 20,
            duration: 1,
          },
          "<"
        );

        // tl.to(testMesh2.current.position, { y: 10, duration: 2 });
        // tl.to(testMesh2.current.material, { opacity: 1, duration: 2 }, "<");
        tl.to(secondSectionRef.current, { opacity: 1, duration: 2 });
        tl.eventCallback("onComplete", null);
      } else {
        // tl.to(skyBoxRef.current.material, {
        //   emissiveIntensity: 0,
        //   duration: 2,
        // });
        tl.to(testMesh2.current.position, { y: -90, duration: 2 });
        // tl.to(
        //   testMesh2.current.material,
        //   {
        //     opacity: 0,
        //     duration: 2,
        //   },
        //   "<"
        // );
        tl.to(secondSectionRef.current, {
          opacity: 0,
          duration: 2,
          onUpdate: () => {
            // secondSectionRef.current.reset();
          },
        });
        tl.eventCallback("onComplete", null);
      }
    },
    function three(direction) {
      if (direction) {
        // tl.to(skyBoxRef.current.material, {
        //   emissiveIntensity: 4,
        //   duration: 2,
        // });
        tl.to(cameraRef.current.position0, {
          x: -350,
          y: 5,
          z: -180,
          duration: 2,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });
        tl.to(
          // [-400, 20, -180]
          cameraRef.current.target0,
          {
            x: -400,
            y: 10,
            z: -180,
            duration: 2,
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );
        tl.to(glowObjRef.current.rotation, {
          y: 60,
          duration: 3,
          ease: "back.inOut(1.7)",
        });
        tl.to(thirdSectionRef.current, { opacity: 1, duration: 2 });
        tl.eventCallback("onComplete", null);
      } else {
        tl.to(thirdSectionRef.current, { opacity: 0, duration: 2 });
        tl.eventCallback("onComplete", null);
      }
    },
    function four(direction) {
      if (direction) {
        tl.to(
          // [-400, 20, -180]
          cameraRef.current.position0,
          {
            y: 5,

            duration: 1,
            onUpdate: () => {
              cameraRef.current.reset();
            },
          }
        );
        tl.to(
          // [-400, 20, -180]
          cameraRef.current.target0,
          {
            x: 310,
            // y: 5,
            z: -300,
            duration: 2,
            onUpdate: () => {
              cameraRef.current.reset();
            },
          },
          "<"
        );
        // 310, 10, -200
        tl.to(cameraRef.current.position0, {
          x: 220,
          y: 1,
          z: -300,
          duration: 2,
          onUpdate: () => {
            cameraRef.current.reset();
          },
        });

        tl.to(fourSectionRef.current, { opacity: 1, duration: 2 });
        tl.eventCallback("onComplete", null);
      } else {
        tl.to(fourSectionRef.current, { opacity: 0, duration: 2 });
        tl.eventCallback("onComplete", null);
      }
    },
    function five(direction) {
      if (direction) {
        tl.to(fiveSectionRef.current, { opacity: 1, duration: 2 });
        tl.eventCallback("onComplete", null);
      } else {
        tl.to(fiveSectionRef.current, { opacity: 0, duration: 2 });
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

  return (
    <div ref={domnodeRef} className="mainSection">
      <header style={{ position: "absolute" }} className="header">
        <nav className="navigation">
          <ul>
            <li>
              <a onClick={(e) => headerHandler(e)} id="1" href="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="2" href="/about">
                About
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="3" href="/expirience">
                Expirience
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="4" href="/works">
                Works
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="5" href="/contacts">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {/* <button
        style={{
          margin: "0 auto",
          display: "block",
          zIndex: 100,
          position: "relative",
          fontSize: 20,
          backgroundColor: "transparent",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => console.log(cameraRef.current)}
      >
        Stage
      </button>
      <button
        style={{
          margin: "0 auto",
          display: "block",
          zIndex: 100,
          position: "relative",
          fontSize: 20,
          backgroundColor: "transparent",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => cameraPos()}
      >
        CameraPos
      </button> */}
      <Suspense fallback={null}>
        <div
          ref={canvasRef}
          onWheel={(e) => weelHandler(e)}
          id="canvas-container"
        >
          <div
            ref={secondSectionRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
              opacity: 0,
              width: "100%",
            }}
            className=""
          >
            <section style={{ height: "100vh", color: "white" }}>
              <div className="wrapper">
                <h1>About</h1>
                <p className="about-text">
                  You can also call me a product designer, experience designer,
                  interaction, UI, UX or by any other market defined
                  function-title. I'm also a multi-disciplinary maker with over
                  10 years of experiences in wide range of design disciplines,
                  manager, advisor, entrepreneur, front-end developer, music
                  enthusiast, traveler, photographer and more.
                </p>
              </div>
            </section>
          </div>
          <div
            ref={thirdSectionRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
              opacity: 0,
              width: "100%",
            }}
            className=""
          >
            <section
              className="works"
              style={{ height: "100vh", color: "white" }}
            >
              <div className="wrapper">
                <h1>Work Expirience</h1>
                <div className="work-expirience">
                  <div className="work-expirience__cards">
                    <div className="work-expirience__card">
                      <h2 className="work-expirience__card-title">
                        Frontend-разработчик
                      </h2>
                      <h4 className="work-expirience__card-subtitle">
                        GoodFellaz
                      </h4>
                      <p className="work-expirience__card-text">
                        You can also call me a product designer, experience
                        designer, interaction, UI, UX or by any other market
                        defined function-title. I'm also a multi-disciplinary
                        maker with over 10 years of experiences in wide range of
                        design disciplines, manager, advisor, entrepreneur,
                        front-end developer, music enthusiast, traveler,
                        photographer and more.
                      </p>
                    </div>
                    <div className="work-expirience__card">
                      <h2 className="work-expirience__card-title">
                        Frontend-разработчик
                      </h2>
                      <h4 className="work-expirience__card-subtitle">
                        GoodFellaz
                      </h4>
                      <p className="work-expirience__card-text">
                        You can also call me a product designer, experience
                        designer, interaction, UI, UX or by any other market
                        defined function-title. I'm also a multi-disciplinary
                        maker with over 10 years of experiences in wide range of
                        design disciplines, manager, advisor, entrepreneur,
                        front-end developer, music enthusiast, traveler,
                        photographer and more.
                      </p>
                    </div>
                    <div className="work-expirience__card">
                      <h2 className="work-expirience__card-title">
                        Frontend-разработчик
                      </h2>
                      <h4 className="work-expirience__card-subtitle">
                        GoodFellaz
                      </h4>
                      <p className="work-expirience__card-text">
                        You can also call me a product designer, experience
                        designer, interaction, UI, UX or by any other market
                        defined function-title. I'm also a multi-disciplinary
                        maker with over 10 years of experiences in wide range of
                        design disciplines, manager, advisor, entrepreneur,
                        front-end developer, music enthusiast, traveler,
                        photographer and more.
                      </p>
                    </div>
                  </div>
                  <div className="work-expirience__line">
                    <div className="work-expirience__line-inner"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            ref={fourSectionRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
              opacity: 0,
              width: "100%",
            }}
            className=""
          >
            <section
              className="works"
              style={{ height: "100vh", color: "white" }}
            >
              <div className="wrapper">
                <h1>Works</h1>
                <div className="works__cards">
                  <div className="works__card">
                    <h1>Zao</h1>
                  </div>
                  <div className="works__card">
                    <h1>Hermes</h1>
                  </div>
                  <div className="works__card">
                    <h1>Ebis</h1>
                  </div>
                  <div className="works__card">
                    <h1>T-Club</h1>
                  </div>
                  <div className="works__card">
                    <h1>Техноград</h1>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            ref={fiveSectionRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 10,
              opacity: 0,
              width: "100%",
            }}
            className=""
          >
            <section
              className="works"
              style={{ height: "100vh", color: "white" }}
            >
              <div className="wrapper">
                <h1>Contacts</h1>
                <div className="contacts__inner">
                  <div className="contacts__form"></div>
                </div>
              </div>
            </section>
          </div>
          <Canvas
            opacity={0}
            ref={canvasRef}
            camera={{ position: [0, 70, 370], fov: 75, near: 0.01, far: 4000 }}
          >
            {/* <color  attach={"background"} args={["#161656"]} /> */}
            {/* <color
              ref={canvasRef}
              attach={"background"}
              args={["linear-gradient(#031730 15%, #000002 45%)"]}
            /> */}
            {/* <color
              attach={"background"}
              args={["linear-gradient(#e66465, #9198e5)"]}
            /> */}
            {/* <pointLight position={[0, 100, 0]} intensity={10} /> */}
            {}

            <ambientLight ref={lightRef1} intensity={3} />

            {/* <PageComponent /> */}
            {/* <gridHelper args={[100, 100]} position={[0, -5, 0]} /> */}
            <GlowingObj glowObjRef={glowObjRef} lightRef1={lightRef1} />

            <Stars
              radius={400}
              depth={60}
              count={5000}
              factor={4}
              saturation={3.2}
              fade
              speed={1}
            />
            {/* <Ocean /> */}
            <Greeting userAgent={userAgent} />
            {/*  */}
            <mesh
              ref={planeMesh}
              position={[0, -13, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[2000, 10000]} />
              <meshPhongMaterial opacity={1.2} transparent color={"black"} />
            </mesh>
            {/* <mesh
              position={[0, -50, -800]}
              // rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[10000, 10000]} />
              <meshPhongMaterial opacity={0.1} transparent color={"red"} />
            </mesh> */}
            <group
              ref={testMesh2}
              rotation={[0, Math.PI / 2, 0]}
              position={[-110, 10, 20]}
            >
              <mesh>
                <boxGeometry args={[70, 70, 70]} />
                <meshStandardMaterial
                  transparent
                  opacity={1}
                  color={"#008e8e"}
                />
              </mesh>
            </group>
            <mesh position={[310, 10, -300]}>
              <boxGeometry args={[70, 70, 70]} />
              <meshStandardMaterial transparent opacity={1} color={"#1b791e"} />
            </mesh>
            <SkyBox skyBoxRef={skyBoxRef} />
            {/* <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1000, 1000, 1000]} />
              <meshStandardMaterial transparent opacity={1} color={"#008e8e"} />
            </mesh> */}

            <Text
              ref={textRef}
              color={"red"}
              fontSize={34}
              position={[160, 170, 50]}
              maxWidth={600}
              rotateZ={90}
            >
              Hello, I m frontend-developer
            </Text>
            <Moon referens={moonRef} position={[0, 50, 0]} />

            {/* <CameraControls
              position={position}
              target={target}
              move={move}
              z={z}
            /> */}

            <OrbitControls
              ref={cameraRef}
              enableZoom={true}
              enableRotate={true}
            />
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
};

export default MainSection;
