"use client";
import {
  Suspense,
  useRef,
  useMemo,
  useState,
  useEffect,
  useLayoutEffect,
  lazy,
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

import Pyramids from "../Pyramids";
import CloudsComp from "../Clouds/Clouds";
import CloudsComp2 from "../Clouds/Clouds2";
import ScrollText from "../../sections/MainSection";
import CameraSearch from "../../sections/MainSection";
import Moon from "../Moon/Moon";
import SkyBox from "../SkyBox";
import Preloader from "../Preloader/Preloader";

const MainScene = ({
  canvasRef,
  moonRef,
  skyBoxMatRef,
  skyBoxRef,
  cameraRef,
  popup,
  ambientLightRef,
  dTextref,
  userAgent,
}) => {
  return (
    // <div
    //   ref={canvasRef}
    //   // onWheel={(e) => weelHandler(e)}
    //   id="canvas-container"
    //   className={popup ? "canvas-container blured" : "canvas-container"}
    // >
    //   <Suspense fallback={<Preloader />}>
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
      {/* <spotLight position={[0, 200, 0]} color={"green"} intensity={100} /> */}
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
      <CloudsComp2 userAgent={userAgent} />
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
    //   </Suspense>
    // </div>
  );
};

export default MainScene;
