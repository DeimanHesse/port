"use client";
import Image from "next/image";
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
} from "@react-three/drei";
import "./MainSection.scss";

import { useControls } from "leva";

import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

import WaterMesh from "./components/Water/WaterMesh.jsx";
import Moon from "./components/Moon/Moon.jsx";
import { Effects2 } from "./components/Effects";
import SkyBox from "./components/SkyBox";
import TestShadersScene from "./components/TestShadersScene";
// import Points from "./components/Fog/App";
// import App from "./components/Fog/App";
import MovingPlane from "./components/MovingPlane/MovingPlane";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { BrowserView, MobileView } from "react-device-detect";

import Stack from "./components/Stack/Stack";
import Landscape from "./components/Landscape/Landscape";
import Pyramids from "./components/Pyramids";
import CloudsComp from "./components/Clouds/Clouds";

import WorkExpierence from "./WorkExpirience";
import About from "./About";
import Works from "./Works";
import Contacts from "./Contacts";

import workExamples from "../data/WorkExamplesData";
import Popup from "./components/Popup";

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

// const Pyramids = () => {
//   const pyramidRef = useRef();
//   const gRef = useRef();
//   const pyramidRefOuter = useRef();
//   const roadRef1 = useRef();
//   const roadRef2 = useRef();
//   const texture = useTexture("/grid.png");
//   const texture2 = useTexture("/displacementmap.png");
//   useFrame(({ clock, camera }) => {
//     // pyramidRef.current.rotation.y = clock.getElapsedTime();
//     // gRef.current.rotation.y = clock.getElapsedTime();
//     // gRef.current.rotation.y += 0.005;
//     // camera.lookAt(100, 100, 4);
//   });
//   return (
//     <>
//       <mesh
//         ref={pyramidRef}
//         rotation={[0, -Math.PI / 4, 0]}
//         position={[340, 55, -300]}
//       >
//         <coneGeometry args={[100, 100, 4]} />
//         {/* <boxGeometry args={[3, 10, 700]} /> */}
//         {/* <meshStandardMaterial
//       // transparent
//       opacity={1}
//       color={"#008e8e"}
//       // emissiveIntensity={5}
//       emissiveMap={pyramidMap}

//     /> */}
//         <meshPhysicalMaterial
//           // color={"red"}
//           side={THREE.DoubleSide}
//           // map={colorMap2}
//           emissiveIntensity={0.1}
//           // emissiveMap={colorMap2}
//           // emissiveIntensity={2}
//           // alphaMap={colorMap2}
//           // emissive={"blue"}
//           roughness={0}
//           metalness={0}
//           transmission={1}
//           reflectivity={0}
//           ior={2.33}
//           thickness={0.3}
//         />
//         {/* <meshStandardMaterial color={"blue"} /> */}
//       </mesh>
//       {/* <Text3D
//         ref={gRef}
//         position={[-40, 10.8, 10]}
//         letterSpacing={0.2}
//         size={50.3}
//         font="/Inter_Bold.json"
//         smooth={4}
//       >
//         JS
//         <meshStandardMaterial color="white" />
//       </Text3D> */}
//       <Gltf
//         ref={gRef}
//         scale={110}
//         position={[0, 40, 0]}
//         src="/react.glb"
//         receiveShadow
//         castShadow
//       />
//       <mesh rotation={[0, -Math.PI / 4, 0]} position={[-200, 30, 350]}>
//         <coneGeometry args={[50, 50, 4]} />
//         {/* <boxGeometry args={[3, 10, 700]} /> */}
//         <meshPhysicalMaterial
//           // color={"red"}
//           // side={THREE.DoubleSide}
//           // map={colorMap2}
//           emissiveIntensity={0.5}
//           // emissiveMap={colorMap2}
//           // emissiveIntensity={2}
//           // alphaMap={colorMap2}
//           emissive={"black"}
//           roughness={0}
//           metalness={0}
//           transmission={1}
//           reflectivity={5.1}
//           ior={2.33}
//           thickness={1.3}
//         />
//       </mesh>
//       <mesh rotation={[0, -Math.PI / 4, 0]} position={[0, 75, 0]}>
//         <coneGeometry args={[150, 150, 4]} />
//         {/* <boxGeometry args={[3, 10, 700]} /> */}
//         <meshPhysicalMaterial
//           // color={"red"}
//           side={THREE.DoubleSide}
//           // map={colorMap2}
//           emissiveIntensity={0.5}
//           // emissiveMap={colorMap2}
//           // emissiveIntensity={2}
//           // alphaMap={colorMap2}
//           // envMap={hdrEq}
//           emissive={"black"}
//           roughness={0}
//           metalness={0}
//           transmission={1}
//           reflectivity={1}
//           ior={2.33}
//           thickness={0.3}
//         />
//         {/* <meshPhongMaterial shininess={30} color={"red"} /> */}
//         {/* <meshLambertMaterial /> */}
//       </mesh>

//       <mesh position={[0, -13, 0]} rotation={[-Math.PI / 2, 0, 0]}>
//         <planeGeometry args={[2000, 2000]} />
//         <meshPhysicalMaterial
//           // color={"black"}
//           side={THREE.DoubleSide}
//           // map={colorMap2}
//           emissiveIntensity={0.5}
//           // emissiveMap={colorMap2}
//           // emissiveIntensity={2}
//           // alphaMap={colorMap2}
//           // envMap={hdrEq}
//           emissive={"black"}
//           roughness={0.8}
//           metalness={0.8}
//           transmission={0.1}
//           reflectivity={0.3}
//           ior={2.33}
//           thickness={0}
//           displacementMap={texture2}
//           map={texture}
//           displacementScale={7}
//         />
//       </mesh>
//       <group
//         // scale={0.4}
//         // ref={testMesh2}
//         rotation={[0, Math.PI / 2, 0]}
//         position={[60, 6, -305]}
//         // rotation={[0, -Math.PI / 2, 0]}
//       >
//         <mesh rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[20, 500]} />
//           <meshPhysicalMaterial
//             // color={"red"}
//             // side={THREE.DoubleSide}
//             // map={colorMap2}
//             emissiveIntensity={0.5}
//             // emissiveMap={colorMap2}
//             // emissiveIntensity={2}
//             // alphaMap={colorMap2}
//             emissive={"black"}
//             roughness={0}
//             metalness={0}
//             transmission={1}
//             reflectivity={6.1}
//             ior={2.33}
//             thickness={1.3}
//           />
//         </mesh>
//         <mesh ref={roadRef2} position={[-10, 2, 0]}>
//           <boxGeometry args={[2, 5, 470]} />
//           <meshPhysicalMaterial
//             // color={"red"}
//             side={THREE.DoubleSide}
//             // map={colorMap2}
//             emissiveIntensity={0.5}
//             // emissiveMap={colorMap2}
//             // emissiveIntensity={2}
//             // alphaMap={colorMap2}
//             emissive={"black"}
//             roughness={0}
//             metalness={0}
//             transmission={1}
//             reflectivity={6.1}
//             ior={2.33}
//             thickness={1.3}
//           />
//         </mesh>
//         <mesh ref={roadRef1} position={[10, 2, 25]}>
//           <boxGeometry args={[2, 5, 600]} />
//           <meshPhysicalMaterial
//             // color={"red"}
//             side={THREE.DoubleSide}
//             // map={colorMap2}
//             emissiveIntensity={0.5}
//             // emissiveMap={colorMap2}
//             // emissiveIntensity={2}
//             // alphaMap={colorMap2}
//             emissive={"black"}
//             roughness={0}
//             metalness={0}
//             transmission={1}
//             reflectivity={6.1}
//             ior={2.33}
//             thickness={1.3}
//           />
//         </mesh>
//       </group>
//       <group
//         // scale={0.4}
//         // ref={testMesh2}
//         // rotation={[0, Math.PI / 2, 0]}
//         position={[-200, 6, 10]}
//         // rotation={[0, -Math.PI / 2, 0]}
//       >
//         <mesh rotation={[-Math.PI / 2, 0, 0]}>
//           <planeGeometry args={[20, 650]} />
//           <meshPhysicalMaterial
//             // color={"red"}
//             side={THREE.DoubleSide}
//             // map={colorMap2}
//             emissiveIntensity={0.5}
//             // emissiveMap={colorMap2}
//             // emissiveIntensity={2}
//             // alphaMap={colorMap2}
//             emissive={"black"}
//             roughness={0}
//             metalness={0}
//             transmission={1}
//             reflectivity={6.1}
//             ior={2.33}
//             thickness={1.3}
//           />
//         </mesh>
//         <mesh ref={roadRef2} position={[-10, 2, 5]}>
//           <boxGeometry args={[2, 5, 650]} />
//           <meshPhysicalMaterial
//             // color={"red"}
//             side={THREE.DoubleSide}
//             // map={colorMap2}
//             emissiveIntensity={0.5}
//             // emissiveMap={colorMap2}
//             // emissiveIntensity={2}
//             // alphaMap={colorMap2}
//             emissive={"black"}
//             roughness={0}
//             metalness={0}
//             transmission={1}
//             reflectivity={6.1}
//             ior={2.33}
//             thickness={1.3}
//           />
//         </mesh>
//         <mesh ref={roadRef1} position={[10, 2, 25]}>
//           <boxGeometry args={[2, 5, 650]} />
//           <meshPhysicalMaterial
//             // color={"red"}
//             side={THREE.DoubleSide}
//             // map={colorMap2}
//             emissiveIntensity={0.5}
//             // emissiveMap={colorMap2}
//             // emissiveIntensity={2}
//             // alphaMap={colorMap2}
//             emissive={"black"}
//             roughness={0}
//             metalness={0}
//             transmission={1}
//             reflectivity={6.1}
//             ior={2.33}
//             thickness={1.3}
//           />
//         </mesh>
//       </group>
//       <Environment background resolution={512}>
//         {/* Ceiling */}
//         <Lightformer
//           intensity={2}
//           rotation-x={Math.PI / 2}
//           position={[0, 4, -9]}
//           scale={[10, 1, 1]}
//         />
//         <Lightformer
//           intensity={10}
//           rotation-x={Math.PI / 2}
//           position={[0, 4, -6]}
//           scale={[10, 1, 1]}
//           color={"red"}
//         />
//         <Lightformer
//           intensity={2}
//           rotation-x={Math.PI / 2}
//           position={[0, 4, -3]}
//           scale={[10, 1, 1]}
//         />
//         <Lightformer
//           intensity={2}
//           rotation-x={Math.PI / 2}
//           position={[0, 4, 0]}
//           scale={[10, 1, 1]}
//         />
//         <Lightformer
//           intensity={2}
//           rotation-x={Math.PI / 2}
//           position={[0, 4, 3]}
//           scale={[10, 1, 1]}
//         />
//         <Lightformer
//           intensity={2}
//           rotation-x={Math.PI / 2}
//           position={[0, 4, 6]}
//           scale={[10, 1, 1]}
//           color={"blue"}
//         />
//         <Lightformer
//           intensity={2}
//           rotation-x={Math.PI / 2}
//           position={[0, 4, 9]}
//           scale={[10, 1, 1]}
//         />
//         {/* Sides */}
//         <Lightformer
//           intensity={2}
//           rotation-y={Math.PI / 2}
//           position={[-50, 2, 0]}
//           scale={[100, 2, 1]}
//         />
//         <Lightformer
//           intensity={2}
//           rotation-y={-Math.PI / 2}
//           position={[50, 2, 0]}
//           scale={[100, 2, 1]}
//         />
//         {/* Key */}
//         <Lightformer
//           form="ring"
//           color="red"
//           intensity={10}
//           scale={2}
//           position={[10, 5, 10]}
//           onUpdate={(self) => self.lookAt(0, 0, 0)}
//         />
//       </Environment>
//     </>
//   );
// };

function CloudsSky() {
  const ref = useRef();
  const cloud0 = useRef();
  const { color, x, y, z, range, ...config } = useControls({
    seed: { value: 1, min: 1, max: 100, step: 1 },
    segments: { value: 20, min: 1, max: 80, step: 1 },
    volume: { value: 6, min: 0, max: 100, step: 0.1 },
    opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
    fade: { value: 10, min: 0, max: 400, step: 1 },
    growth: { value: 4, min: 0, max: 20, step: 1 },
    speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
    x: { value: 6, min: 0, max: 100, step: 1 },
    y: { value: 1, min: 0, max: 100, step: 1 },
    z: { value: 1, min: 0, max: 100, step: 1 },
    color: "white",
  });
  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2;
    cloud0.current.rotation.y -= delta;
  });
  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400} range={range}>
          <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} />
          <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#eed0d0"
            seed={2}
            position={[15, 0, 0]}
          />
          <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#d0e0d0"
            seed={3}
            position={[-15, 0, 0]}
          />
          <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#a0b0d0"
            seed={4}
            position={[0, 0, -12]}
          />
          <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#c0c0dd"
            seed={5}
            position={[0, 0, 12]}
          />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#ffccdd"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </Clouds>
      </group>
    </>
  );
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
  // const {
  //   gl, // WebGL renderer
  //   scene, // Default scene
  //   camera, // Default camera

  //   setDefaultCamera, // Sets the default camera
  // } = useThree();
  // console.log(camera);
  // const orbChange = (e) => {
  //   console.log(camera.position);
  // };
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
      console.log("hhhh");
      setPopupData(workExamples[index]);
    }
    workExampleRef.current?.blur();
    setPopup(!popup);
    // console.log(popupData);
  };

  let tl = gsap.timeline();
  const cPosRef = useRef(true);
  const dTextref = useRef();

  // const [pyramidMap] = useLoader(TextureLoader, ["images/pyramid.jpg"]);

  const animArr = [
    function one(direction) {
      if (!direction) {
        // tl.to(moonRef.current.position, { z: -1800, duration: 1 });
        // tl.to(moonRef.current.position, { y: -30, duration: 1 }, "<");

        // tl.to(canvasRef.current, {
        //   // background: "linear-gradient(#031730 15%, #000002 45%)",
        //   background: "#08082f",
        //   duration: 1,
        // });

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
          "canvas",
          {
            filter: "blur(0px) grayscale(0) contrast(1)",
            duration: 1,
          },
          "<"
        );
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
      console.log("two", skyBoxMatRef.current);
      if (direction) {
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
        tl.to("canvas", {
          filter: "blur(3px) grayscale(1) contrast(1.1)",
          // filter: "grayscale(1) contrast(1.1)",
          duration: 0.3,
        });
        tl.to(secondSectionRef.current, {
          opacity: 1,
          duration: 2,
          pointerEvents: "all",
        });
        tl.to(
          ".about__text",
          {
            // backgroundColor: "#ffffff69",
            backgroundColor: "#0d2c4f91",
            // filter: "blur(0px)",
            duration: 1,
          },
          "<"
        );
        tl.to(".about__text", {
          // backgroundColor: "#ffffff69",
          // filter: "blur(0px)",
          opacity: 1,
          duration: 0.3,
        });

        tl.eventCallback("onComplete", null);
      } else {
        // tl.to("canvas", {
        //   filter: "blur(0px) grayscale(0) contrast(1)",
        //   // filter: "grayscale(1) contrast(1.1)",
        //   duration: 0.1,
        // });
        tl.to(secondSectionRef.current, {
          opacity: 0,
          duration: 0.3,
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

        tl.to(
          "canvas",
          {
            filter: "blur(3px) grayscale(1) contrast(1.1)",
            // filter: "grayscale(1) contrast(1.1)",
            duration: 0.2,
          },
          "<"
        );
        // // ПОЯВЛЕНИЕ HTML
        tl.to(thirdSectionRef.current, {
          opacity: 1,
          duration: 0.3,
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

        tl.to("canvas", {
          filter: "blur(6px) grayscale(1) contrast(1.1)",
          // filter: "grayscale(1) contrast(1.1)",
          duration: 1,
        });
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
        tl.to("canvas", {
          filter: "blur(0px) grayscale(0) contrast(1)",
          // filter: "grayscale(1) contrast(1.1)",
          duration: 0.3,
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
        tl.to("canvas", {
          filter: "blur(0px) grayscale(0) contrast(1)",
          // filter: "grayscale(1) contrast(1.1)",
          duration: 1,
        });
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
                Опыт
              </a>
            </li>
            <li>
              <a onClick={(e) => headerHandler(e)} id="4" href="/works">
                Работы
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
            opacity={0}
            ref={canvasRef}
            camera={{
              position: [0, 65, 520],
              fov: 75,
              near: 0.01,
              far: 4000,
            }}
            // camera={{
            //   position: [100, 110, 350],
            //   fov: 75,
            //   near: 0.01,
            //   far: 4000,
            // }}
          >
            {/* <fog attach="fog" args={["white", 1500, 6000]} /> */}
            {/* <MapControls
              enableDamping={true}
              dampingFactor={0.05}
              screenSpacePanning={false}
              minDistance={100}
              maxDistance={500}
              maxPolarAngle={Math.PI / 2}
            /> */}
            <color attach={"background"} args={["black"]} />
            {/* <color
              ref={canvasRef}
              attach={"background"}
              args={["linear-gradient(#031730 15%, #000002 45%)"]}
            /> */}
            <pointLight position={[0, 300, 0]} intensity={50} />
            <spotLight position={[0, 200, 0]} color={"green"} intensity={100} />
            <ambientLight ref={ambientLightRef} intensity={5} />
            {/* <directionalLight
              color={"white"}
              position={[0, -200, 1700]}
              intensity={5}
            /> */}
            {/* <directionalLight position={[0, -200, 400]} intensity={10} /> */}

            {/* <Environment
              background
              preset="night"
              resolution={512}
            ></Environment> */}
            {/* <MovingPlane /> */}
            {/* <Center top left> */}
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
              {/* {`hello\nworld`} */}
              {`Hello, I'm \n frontend-developer`}
              {/* <meshStandardMaterial /> */}
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
            {/* <EffectComposer>
              <SelectiveBloom
                // ref={lightRef}
                // lights={[lightRef1, lightRef2]} // ⚠️ REQUIRED! all relevant lights
                selection={[dTextref]} // selection of objects that will have bloom effect
                selectionLayer={1} // selection layer
                intensity={0.9} // The bloom intensity.
                //   blurPass={undefined} // A blur pass.
                //   width={Resizer.AUTO_SIZE} // render width
                //   height={Resizer.AUTO_SIZE} // render height
                kernelSize={KernelSize.LARGE} // blur kernel size
                luminanceThreshold={0.01} // luminance threshold. Raise this value to mask out darker elements in the scene.
                luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                mipmapBlur
              />
            </EffectComposer> */}
            <ScrollText />

            <Pyramids />
            {/* <Stack /> */}
            {/* <Landscape /> */}
            {/* <TestShadersScene /> */}
            <SkyBox
              color={"#0e1925"}
              skyBoxMatRef={skyBoxMatRef}
              skyBoxRef={skyBoxRef}
            />
            <CloudsComp />

            <Stars
              radius={600}
              depth={60}
              count={15000}
              factor={10}
              saturation={3.2}
              fade
              speed={1}
            />

            <Moon referens={moonRef} position={[0, 210, -2500]} />
            {/* <Greeting userAgent={userAgent} /> */}
            {/* <OrbitControls
              target={[0, 0, -330]}
              ref={cameraRef}
              onChange={(e) => orbChange(e)}
              // enableZoom={false}
              // enableRotate={false}
            /> */}
            <CameraSearch cameraRef={cameraRef} />
          </Canvas>
        </div>
      </Suspense>
    </div>
  );
};

export default MainSection;
