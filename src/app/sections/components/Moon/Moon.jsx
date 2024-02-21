"use client";
import { useRef } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { DoubleSide } from "three";
import {
  EffectComposer,
  SelectiveBloom,
  BrightnessContrast,
  Noise,
  Vignette,
  DepthOfField,
  Bloom,
} from "@react-three/postprocessing";
import { PointLightHelper, Color, TextureLoader, Fog } from "three";

import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

import * as THREE from "three";
export default function Moon({ position, referens }) {
  const { width, height } = useThree((state) => state.viewport);
  const three = useThree();
  const ref = useRef();
  const data = useScroll();

  const lightRef = useRef();
  const [colorMap] = useLoader(TextureLoader, ["images/moon/moon.png"]);
  // const [colorMap] = useLoader(TextureLoader, ["images/moon/mars.jpg"]);
  useFrame(({ camera }) => {});
  // return <mesh ref={ref} {...props} />;
  return (
    <group ref={referens} position={position}>
      <mesh position={[0, 40, 0]} ref={ref}>
        {/* <boxGeometry args={[20, 20, 20]} /> */}
        <sphereGeometry args={[1200, 64, 32]} />
        {/* <meshPhysicalMaterial
            color={"black"}
            side={THREE.DoubleSide}
            // side={THREE.BackSide}
            // map={colorMap}
            roughness={1}
            metalness={1.5}
            transmission={0}
            reflectivity={7.8}
            thickness={1}
            transparent
            opacity={1}
            // emissiveIntensity={10}
            // alphaHash
            // wireframe
          /> */}
        {/* <meshStandardMaterial
            color={"black"}
            side={THREE.DoubleSide}
            // roughness={1}
            // metalness={0.5}
            // transmission={0.5}
            reflectivity={1.8}
          /> */}
        <meshPhongMaterial
          // color={"white"}
          // emissive={"white"}
          side={THREE.DoubleSide}
          roughness={1}
          metalness={0.5}
          // transmission={0.5}
          // reflectivity={1.8}
          emissiveIntensity={0.01}
          // emissive={"white"}
          // emissiveMap={colorMap}
          map={colorMap}
        />
      </mesh>
      {/* <EffectComposer> */}
      {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
      {/* <DepthOfField
          focusDistance={0.3}
          focalLength={0.02}
          bokehScale={1}
          height={1080}
        /> */}
      {/* <Vignette eskil={false} offset={0.001} darkness={0.9} /> */}
      {/* <BrightnessContrast brightness={0.01} contrast={0.03} /> */}
      {/* <Noise opacity={0.03} /> */}
      {/* <SelectiveBloom
          // ref={lightRef}
          // lights={[lightRef1, lightRef2]} // ⚠️ REQUIRED! all relevant lights
          selection={[ref]} // selection of objects that will have bloom effect
          selectionLayer={1} // selection layer
          intensity={1.01} // The bloom intensity.
          //   blurPass={undefined} // A blur pass.
          //   width={Resizer.AUTO_SIZE} // render width
          //   height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.01} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          mipmapBlur
        /> */}
      {/* </EffectComposer> */}
    </group>
  );
}
