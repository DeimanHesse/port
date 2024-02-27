import * as THREE from "three";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
// import { RoundedBoxGeometry } from "three/examples/jsm/Addons";
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
  Text3D,
  Billboard,
  useTexture,
  Example,
  Svg,
  Grid,
  Gltf,
  Lightformer,
} from "@react-three/drei";

import { RoundedBoxGeometry } from "three-stdlib";

extend({ RoundedBoxGeometry });

const Stack = () => {
  const {
    gl, // WebGL renderer
    scene, // Default scene
    camera, // Default camera
  } = useThree();
  //   camera.lookAt(0, 0, 330);

  const texture = useTexture("/react.png");
  return (
    <group
      // scale={0.4}
      // ref={testMesh2}
      //   rotation={[0, Math.PI / 2, 0]}
      position={[30, 80, 420]}
      // rotation={[0, -Math.PI / 2, 0]}
    >
      {/* <mesh position={[0, 0, 0.5]}>
        <planeGeometry args={[3, 3]} />
        <meshPhysicalMaterial
          // color={"red"}
          side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={1.5}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          emissive={"red"}
          roughness={0}
          metalness={0}
          transmission={1}
          reflectivity={0.1}
          ior={2.33}
          thickness={0.3}
        />
      </mesh> */}

      {/* <mesh position={[0, 0, 0.3]}>
    

        <roundedBoxGeometry args={[2, 2, 0.2, 6, 2]} />
   
        <meshPhysicalMaterial
          color={"red"}
          side={THREE.DoubleSide}
          // map={colorMap2}
          emissiveIntensity={1.5}
          // emissiveMap={colorMap2}
          // emissiveIntensity={2}
          // alphaMap={colorMap2}
          emissive={"white"}
          roughness={0.3}
          metalness={1}
          transmission={1}
          reflectivity={6.1}
          ior={2.33}
          thickness={1.3}
        />
      </mesh> */}
      <group position={[0, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <roundedBoxGeometry args={[5, 5, 1, 6, 2]} />
          <meshPhysicalMaterial
            // color={"red"}
            //   side={THREE.DoubleSide}
            // map={colorMap2}
            //   emissiveIntensity={1.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            //   emissive={"red"}
            roughness={0.15}
            metalness={0}
            transmission={1}
            reflectivity={2.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        {/* <Text
        color={"white"}
        fontSize={5}
        position={[0, 0, 0]}
        maxWidth={600}
        rotateZ={90}
      >
        JS
      </Text> */}
        <Text3D
          position={[-1.5, -0.8, 0]}
          letterSpacing={0.2}
          size={1.3}
          font="/Inter_Bold.json"
        >
          JS
          <meshStandardMaterial color="white" />
        </Text3D>
      </group>
      <group position={[6, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <roundedBoxGeometry args={[5, 5, 1, 6, 2]} />
          <meshPhysicalMaterial
            // color={"red"}
            //   side={THREE.DoubleSide}
            // map={colorMap2}
            //   emissiveIntensity={1.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            //   emissive={"red"}
            roughness={0.1}
            metalness={0}
            transmission={1}
            reflectivity={2.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        {/* <Text
        color={"white"}
        fontSize={5}
        position={[0, 0, 0]}
        maxWidth={600}
        rotateZ={90}
      >
        JS
      </Text> */}
        <Text3D
          position={[-1.5, -0.8, 0]}
          letterSpacing={0.2}
          size={1.3}
          font="/Inter_Bold.json"
        >
          Next
          <meshStandardMaterial color="white" />
        </Text3D>
      </group>
      <group position={[-6, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <roundedBoxGeometry args={[5, 5, 1, 6, 2]} />
          <meshPhysicalMaterial
            // color={"red"}
            // side={THREE.DoubleSide}
            // map={colorMap2}
            //   emissiveIntensity={1.5}
            // emissiveMap={colorMap2}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            //   emissive={"red"}
            roughness={0.1}
            metalness={0.2}
            transmission={1}
            reflectivity={2.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        {/* <Text
        color={"white"}
        fontSize={5}
        position={[0, 0, 0]}
        maxWidth={600}
        rotateZ={90}
      >
        JS
      </Text> */}
        <Text3D
          position={[-1.5, -0.8, 0]}
          letterSpacing={0.2}
          size={1.3}
          font="/Inter_Bold.json"
        >
          TS
          <meshStandardMaterial color="white" />
        </Text3D>
        {/* <Svg scale={0.2} src="/react.svg" /> */}
        {/* <Gltf
          scale={2}
          position={[-7, 0, 0]}
          src="/react.glb"
          receiveShadow
          castShadow
        /> */}
      </group>
      <group position={[-6, 6, 0]}>
        <mesh position={[0, 0, 0]}>
          <roundedBoxGeometry args={[5, 5, 1, 6, 2]} />
          <meshPhysicalMaterial
            // color={"red"}
            // side={THREE.DoubleSide}
            // map={texture}
            emissiveIntensity={1.5}
            emissiveMap={texture}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"red"}
            roughness={0.1}
            metalness={0.2}
            transmission={1}
            reflectivity={2.1}
            ior={2.33}
            thickness={1.3}
          />
        </mesh>
        <mesh position={[0, 0, -0.5]}>
          <planeGeometry args={[3, 3, 124, 124]} />
          {/* <meshPhysicalMaterial
            // color={"red"}
            // side={THREE.DoubleSide}
            map={texture}
            emissiveIntensity={1.5}
            // emissiveMap={texture}
            // emissiveIntensity={2}
            // alphaMap={colorMap2}
            emissive={"red"}
            roughness={1}
            metalness={1}
            transmission={1}
            reflectivity={1.1}
            ior={2.33}
            thickness={0.9}
          /> */}
          <meshStandardMaterial
            // transparent

            // displacementScale={8}
            // displacementMap={texture2}
            map={texture}
            attach="material"
          />
        </mesh>
      </group>
    </group>
  );
};

export default Stack;
