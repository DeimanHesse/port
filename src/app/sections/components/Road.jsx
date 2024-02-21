import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";

import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";

const Road = () => {
  const roadRef1 = useRef();
  const roadRef2 = useRef();
  return (
    <group
      // ref={testMesh2}
      // rotation={[0, Math.PI / 2, 0]}
      position={[0, 10, -80]}
    >
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 700]} />
        <meshPhongMaterial
          opacity={1}
          side={THREE.DoubleSide}
          transparent
          color={"#69bca1"}
        />
      </mesh>
      <mesh position={[-50, 5, 0]}>
        <boxGeometry args={[5, 10, 700]} />
        <meshStandardMaterial transparent opacity={1} color={"#008e8e"} />
      </mesh>
      <mesh position={[50, 5, 0]}>
        <boxGeometry args={[5, 10, 700]} />
        <meshStandardMaterial transparent opacity={1} color={"#008e8e"} />
      </mesh>
      {/* <EffectComposer>
        <SelectiveBloom
          //   lights={[ambientLightRef]} // ⚠️ REQUIRED! all relevant lights
          selection={[roadRef1]} // selection of objects that will have bloom effect
          selectionLayer={1} // selection layer
          intensity={1.0} // The bloom intensity.
          blurPass={undefined} // A blur pass.
          width={Resizer.AUTO_SIZE} // render width
          height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
      </EffectComposer> */}
    </group>
  );
};

export default Road;
