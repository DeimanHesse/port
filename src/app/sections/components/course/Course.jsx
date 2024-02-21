"use client";
import * as THREE from "three";
import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import { TextureLoader } from "three";
import {
  Html,
  OrbitControls,
  Sky as SkyImpl,
  StatsGl,
  Stars,
  Environment,
  Cloud,
  Clouds,
  // Effects,
  ScrollControls,
  Scroll,
  useScroll,
  Text,
  Billboard,
  useTexture,
  Grid,
  SpotLight,
  useDepthBuffer,
  Lightformer,
} from "@react-three/drei";
import { Vector3 } from "three";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
// import glsl from "babel-plugin-glsl/macro";
// import glsl from "glslify";
import { MathUtils } from "three";

import SkyBox from "../SkyBox";

import CustomShaderMaterial from "three-custom-shader-material";

import fragmentShader from "./shaders/fragmentShader";
import vertexShader from "./shaders/vertexShader";

const Course = () => {
  //   const uniforms = useMemo(() => {
  //     return {
  //       u_time: { value: 0 },
  //       u_intensity: { value: 0.3 },
  //     };
  //   });

  // useFrame((state) => {
  //   const { clock } = state;
  //   if (mesh.current) {
  //     mesh.current.material.uniforms.u_time.value =
  //       0.4 * clock.getElapsedTime();

  //     mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
  //       mesh.current.material.uniforms.u_intensity.value,
  //       1.15,
  //       1.02
  //     );
  //   }
  // });

  return (
    <Suspense fallback={null}>
      <Canvas
        camera={{
          position: [5, 10, 25],
          fov: 75,
          near: 0.01,
          far: 4000,
        }}
        // camera={{ position: [-3, 2, 5], fov: 90 }}
        shadows
      >
        {/* <directionalLight
          position={[-30, 20, 0]}
          intensity={1}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        /> */}
        <pointLight castShadow position={[-10, 15, 5]} intensity={500} />
        {/* <spotLight position={[0, 200, 0]} intensity={10} /> */}
        <ambientLight intensity={0.1} />
        {/* <directionalLight position={[0, 200, 400]} intensity={10} /> */}
        <fog attach="fog" args={["white", 0, 40]} />
        <SkyBox color={"#0e1925"} />
        {/* <pointLight position={[10, 10, 10]} /> */}

        <TestingShaders />

        <OrbitControls onChange={(e) => orbitCange(e)} />
      </Canvas>
    </Suspense>
  );
};

export default Course;

function Scene() {
  return (
    <>
      <pointLight position={[0, 20, 10]} intensity={400} />
      <mesh rotation={[0, 10, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={"#6be092"} />
      </mesh>
    </>
  );
}

const TestingShaders = () => {
  const materialRef = useRef();
  const boxRef = useRef();

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  console.log(boxRef.current);
  useFrame((state) => {
    if (materialRef.current) {
      // materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
      // boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh ref={boxRef} castShadow receiveShadow>
        {/* <icosahedronGeometry args={[10, 2]} /> */}
        <boxGeometry args={[5, 5, 5]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        />
        {/* <meshPhongMaterial opacity={1.2} transparent color={"black"} /> */}
        {/* <meshStandardMaterial side={THREE.DoubleSide} color={"gray"} /> */}
        {/* <meshPhysicalMaterial
          color={"red"}
          side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={7.7}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          emissive={"blue"}
          roughness={0}
          metalness={0}
          transmission={1}
          reflectivity={0}
          ior={2.33}
          thickness={0.3}
        /> */}
      </mesh>
      <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        {/* <meshPhysicalMaterial
          color={"red"}
          side={THREE.DoubleSide}
          // map={colorMap2}
          // emissiveIntensity={0.1}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          emissive={"blue"}
          roughness={0}
          metalness={1}
          transmission={1}
          reflectivity={0}
          ior={2.33}
          thickness={0.3}
        /> */}
        <meshStandardMaterial side={THREE.DoubleSide} color={"gray"} />
      </mesh>
      {/* <mesh>
      <icosahedronGeometry args={[10, 5]} />
      <CustomShaderMaterial
        ref={materialRef}
        baseMaterial={THREE.MeshPhysicalMaterial}
        // vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        silent
        // uniforms={{
        //   time: {
        //     value: 0,
        //   },
        //   speed: {
        //     value: 0.324,
        //   },
        //   vPosition: {
        //     value: new THREE.Vector3(0, 1, 0),
        //   },
        // }}
        flatShading
        color={0xff00ff}
      />
    </mesh> */}
    </>
  );
};
