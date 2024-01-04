const CameraControls = ({ position, target, move, z }) => {
  //Initialize camera controls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const ref = useRef(null);

  if (move) {
    gsap.to(camera.position, { z: z, duration: 2 });
    // gsap.to(camera.l, { z: 100, duration: 2 });
  }
  // Determines camera up Axis
  // camera.up = new Vector3(0, 1, 0);

  // return the controls object
  return (
    <OrbitControls
      ref={ref}
      args={[camera, domElement]}
      panSpeed={1}
      maxPolarAngle={Math.PI / 2}
    />
  );
};

export default CameraControls;
