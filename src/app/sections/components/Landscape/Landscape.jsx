import * as THREE from "three";
import { useTexture } from "@react-three/drei";
const Landscape = () => {
  const texture = useTexture("/grid.png");
  const texture2 = useTexture("/displacementmap.png");
  const texture3 = useTexture("/sands_displacement.png");
  const texture4 = useTexture("/A.png");

  const {
    gl, // WebGL renderer
    scene, // Default scene
    camera, // Default camera
  } = useThree();

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[1000, 2000, 124, 124]} />
      {/* <meshPhysicalMaterial
        // color={"red"}
        side={THREE.DoubleSide}
        // map={texture}
        emissiveIntensity={1.5}
        envMapIntensity={3}
        emissiveMap={texture}
        // emissiveIntensity={2}
        // alphaMap={colorMap2}
        // emissive={"red"}
        roughness={1}
        metalness={1}
        transmission={1}
        reflectivity={0.1}
        ior={2.33}
        thickness={0.3}
      /> */}
      <meshStandardMaterial
        displacementScale={8}
        displacementMap={texture2}
        map={texture}
        attach="material"
      />
    </mesh>
  );
};

export default Landscape;
