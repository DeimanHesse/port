"use client";
import { useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import { useFrame } from "@react-three/fiber";
import {
  Sky as SkyImpl,
  Environment,
  useTexture,
  Lightformer,
  Text3D,
  Gltf,
} from "@react-three/drei";

const Pyramids = () => {
  const pyramidRef = useRef();
  const gRef = useRef();
  const pyramidRefOuter = useRef();
  const roadRef1 = useRef();
  const roadRef2 = useRef();
  const texture = useTexture("/grid.png");
  const texture1 = useTexture("/grid1.png");
  const texture3 = useTexture("/grid3.jpg");
  const ground1 = useTexture("images/ground/ground1.jpg");
  const ground2 = useTexture("images/ground/ground2.jpg");
  const displace = useTexture("/displacementmap.png");
  //   const displaceSands = useTexture("/sands_displacement.png");
  const displaceSands = useTexture("/4096.jpg");
  useFrame(({ clock, camera }) => {
    // pyramidRef.current.rotation.y = clock.getElapsedTime();
    // gRef.current.rotation.y = clock.getElapsedTime();
    // gRef.current.rotation.y += 0.005;
    // camera.lookAt(100, 100, 4);
  });
  return (
    <>
      {/* ПИРАМИДЫ */}
      <mesh
        ref={pyramidRef}
        rotation={[0, -Math.PI / 4, 0]}
        position={[340, 55, -300]}
      >
        <coneGeometry args={[100, 100, 4]} />
        {/* <boxGeometry args={[3, 10, 700]} /> */}
        {/* <meshStandardMaterial
        // transparent
        opacity={1}
        color={"#008e8e"}
        // emissiveIntensity={5}
        emissiveMap={pyramidMap}
        
      /> */}
        <meshPhysicalMaterial
          // color={"red"}
          side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={0.1}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          // emissive={"blue"}
          roughness={0.05}
          metalness={0.5}
          transmission={1}
          reflectivity={0.2}
          ior={2.33}
          thickness={0.3}
        />
        {/* <meshStandardMaterial color={"blue"} /> */}
      </mesh>
      <Gltf
        ref={gRef}
        scale={110}
        position={[0, 40, 0]}
        src="/react.glb"
        receiveShadow
        castShadow
      />
      <mesh rotation={[0, -Math.PI / 4, 0]} position={[-200, 30, 350]}>
        <coneGeometry args={[50, 50, 4]} />
        {/* <boxGeometry args={[3, 10, 700]} /> */}
        <meshPhysicalMaterial
          // color={"red"}
          // side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={0.5}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          emissive={"black"}
          roughness={0.05}
          metalness={0.5}
          transmission={1}
          reflectivity={5.1}
          ior={2.33}
          thickness={1.3}
        />
      </mesh>
      <mesh rotation={[0, -Math.PI / 4, 0]} position={[0, 75, 0]}>
        <coneGeometry args={[150, 150, 4]} />
        {/* <boxGeometry args={[3, 10, 700]} /> */}
        <meshPhysicalMaterial
          // color={"red"}
          // side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={0.5}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          // envMap={hdrEq}
          emissive={"black"}
          roughness={0.05}
          metalness={0.5}
          transmission={1}
          reflectivity={1}
          ior={2.33}
          thickness={1}
        />
        {/* <meshPhongMaterial shininess={30} color={"red"} /> */}
        {/* <meshLambertMaterial /> */}
      </mesh>
      {/* ЛАНДШАФТ */}
      <mesh position={[0, -13, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2000, 2000]} />
        {/* <meshPhysicalMaterial
          // color={"black"}
          side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={0.7}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          // envMap={hdrEq}
          emissive={"black"}
          roughness={0.7}
          metalness={0.8}
          transmission={0.1}
          reflectivity={0.3}
          ior={1.33}
          emissiveMap={texture}
          thickness={0}
          //   displacementMap={texture2}
          map={texture}
          //   map={ground2}
          // displacementScale={7}
        /> */}
        <meshStandardMaterial map={texture} />
      </mesh>
      {/* ГОРОД */}
      <mesh
        position={[0, -10, -600]}
        // scale={1.2}
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
          emissiveMap={texture}
          thickness={0}
          displacementMap={displace}
          //   map={texture}
          //   map={ground2}
          displacementScale={290}
        />
        {/* <meshStandardMaterial
          color={"black"}
          attach={"material"}
          side={THREE.DoubleSide}
          displacementMap={displace}
          map={texture}
          displacementScale={290}
        /> */}
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
      <Environment background resolution={512}>
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
          color={"blue"}
        />
        <Lightformer
          intensity={5}
          rotation-x={Math.PI / 2}
          position={[0, 4, -8]}
          scale={[10, 1, 1]}
          color={"red"}
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
          color={"blue"}
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
        {/* Key */}
        <Lightformer
          form="ring"
          color="red"
          intensity={10}
          scale={2}
          position={[10, 5, 10]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
        />
      </Environment>
    </>
  );
};

export default Pyramids;
