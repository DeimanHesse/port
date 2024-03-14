"use client";
import { useRef, useState } from "react";
import * as THREE from "three";

import {
  Sky as SkyImpl,
  Environment,
  useTexture,
  Lightformer,
  Gltf,
  useCursor,
} from "@react-three/drei";

const Pyramids = ({ red }) => {
  const pyramidRef = useRef();
  const gRef = useRef();

  const roadRef1 = useRef();
  const roadRef2 = useRef();

  const displace = useTexture("/displacementmap.png");

  const distRef = useRef();
  const [hovered, hover] = useState(false);
  useCursor(hovered);

  return (
    <>
      {/* ПИРАМИДЫ */}
      <mesh
        ref={pyramidRef}
        rotation={[0, -Math.PI / 4, 0]}
        position={[340, 55, -300]}
        // receiveShadow
        material={red}
      >
        <coneGeometry args={[100, 100, 4]} />
      </mesh>
      <Gltf
        ref={gRef}
        scale={110}
        position={[0, 40, 0]}
        src="/react.glb"
        // receiveShadow
        // castShadow
      />
      <mesh
        // receiveShadow
        rotation={[0, -Math.PI / 4, 0]}
        position={[-200, 30, 350]}
        material={red}
      >
        <coneGeometry args={[50, 50, 4]} />
      </mesh>
      <mesh
        material={red}
        rotation={[0, -Math.PI / 4, 0]}
        position={[0, 75, 0]}
      >
        <coneGeometry args={[150, 150, 4]} />
      </mesh>

      {/* ГОРОД */}
      <mesh
        position={[0, -10, -600]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
      >
        <planeGeometry args={[300, 1400, 100, 175]} />
        <meshPhysicalMaterial
          color={"black"}
          side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={0.7}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          // envMap={hdrEq}
          emissive={"black"}
          roughness={0.3}
          metalness={0.1}
          transmission={0.1}
          reflectivity={1.3}
          ior={1.33}
          // emissiveMap={texture}
          thickness={0}
          displacementMap={displace}
          //   map={texture}
          //   map={ground2}
          displacementScale={290}
        />
      </mesh>
      {/* ДОРОЖКИ */}
      <group
        // scale={0.4}
        // ref={testMesh2}
        rotation={[0, Math.PI / 2, 0]}
        position={[60, 6, -305]}
        // rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 500]} />
          <meshPhysicalMaterial
            // color={"red"}
            // side={THREE.DoubleSide}
            // map={colorMap2}
            emissiveIntensity={0.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"black"}
            roughness={0.2}
            metalness={0.2}
            transmission={1}
            reflectivity={6.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        <mesh ref={roadRef2} position={[-10, 2, 0]}>
          <boxGeometry args={[2, 5, 470]} />
          <meshPhysicalMaterial
            // color={"red"}
            side={THREE.DoubleSide}
            // map={colorMap2}
            emissiveIntensity={0.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"black"}
            roughness={0.2}
            metalness={0.2}
            transmission={1}
            reflectivity={6.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        <mesh ref={roadRef1} position={[10, 2, 25]}>
          <boxGeometry args={[2, 5, 600]} />
          <meshPhysicalMaterial
            // color={"red"}
            side={THREE.DoubleSide}
            // map={colorMap2}
            emissiveIntensity={0.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"black"}
            roughness={0.2}
            metalness={0.2}
            transmission={1}
            reflectivity={6.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
      </group>
      <group
        // scale={0.4}
        // ref={testMesh2}
        // rotation={[0, Math.PI / 2, 0]}
        position={[-200, 6, 10]}
        // rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 650]} />
          <meshPhysicalMaterial
            // color={"red"}
            side={THREE.DoubleSide}
            // map={colorMap2}
            emissiveIntensity={0.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"black"}
            roughness={0.15}
            metalness={0.4}
            transmission={1}
            reflectivity={6.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        <mesh ref={roadRef2} position={[-10, 2, 5]}>
          <boxGeometry args={[2, 5, 650]} />
          <meshPhysicalMaterial
            // color={"red"}
            side={THREE.DoubleSide}
            // map={colorMap2}
            emissiveIntensity={0.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"black"}
            roughness={0.15}
            metalness={0.4}
            transmission={1}
            reflectivity={6.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        <mesh ref={roadRef1} position={[10, 2, 25]}>
          <boxGeometry args={[2, 5, 650]} />
          <meshPhysicalMaterial
            // color={"red"}
            side={THREE.DoubleSide}
            // map={colorMap2}
            emissiveIntensity={0.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"black"}
            roughness={0.15}
            metalness={0.4}
            transmission={1}
            reflectivity={6.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
      </group>
      <Environment background resolution={256}>
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={5}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
          color={"#263e6e"}
          // color={"#152531d3"}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          scale={[10, 1, 1]}
          color={"#011641"}
        />
        <Lightformer
          intensity={2}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={2}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          scale={[100, 2, 1]}
        />
      </Environment>
    </>
  );
};

export default Pyramids;
