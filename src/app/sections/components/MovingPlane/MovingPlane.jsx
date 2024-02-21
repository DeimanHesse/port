"use client";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { Color, TextureLoader, Fog } from "three";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
const MovingPlane = () => {
  // const stone = useLoader(TextureLoader, "stone.jpg");
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color("#FFE486") },
      u_colorB: { value: new Color("#FEB3D9") },
    }),
    []
  );

  // тут происходит анимация
  useFrame((state) => {
    const { clock } = state;
    // mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[100, 100, 16, 16]} />
      {/* <boxGeometry args={[50, 50, 50]} /> */}
      {/* <sphereGeometry args={[30, 1024, 512]} /> */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        // wireframe={false}
        // wireframe
      />

      {/* <meshStandardMaterial /> */}
    </mesh>
  );
};

export default MovingPlane;
