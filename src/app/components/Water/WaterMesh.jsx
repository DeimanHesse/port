"use client";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useLoader, useFrame, extend } from "@react-three/fiber";
import { Color, TextureLoader, Fog } from "three";

import { Water } from "./Water2";
extend({ Water });

const WaterMesh = () => {
  // const stone = useLoader(TextureLoader, "stone.jpg");
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const geom = useMemo(() => new THREE.PlaneGeometry(2000, 2000), []);
  const config = useMemo(
    () => ({
      scale: 9.5,
      textureWidth: 512,
      textureHeight: 512,
      flowSpeed: 0.005,
      reflectivity: 0.4,
      alpha: 1,
      // fog: true,
      // color: "blue",
      // color: "#1800a328",

      // flowMap: flowMap,
    }),
    []
  );
  // тут происходит анимация
  useFrame((state) => {
    const { clock } = state;
    // mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <water
      ref={mesh}
      args={[geom, config]}
      position={[0, -10, 0]}
      rotation-x={-Math.PI / 2}
      // flatShading
    />
  );
};

export default WaterMesh;
