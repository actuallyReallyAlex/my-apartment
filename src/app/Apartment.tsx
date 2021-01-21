import * as React from "react";
import {
  AmbientLight,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  WebGL1Renderer,
  XRFrame,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Room from "./objects/Room";

const Apartment: React.FunctionComponent<unknown> = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const aspectRatio = width / height;
  const fieldOfView = 60;
  const nearPlane = 1;
  const farPlane = 10000;

  const [ambientLight] = React.useState<AmbientLight>(
    new AmbientLight(0x888888)
  );
  const [camera] = React.useState<PerspectiveCamera>(
    new PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane)
  );
  const [container, setContainer] = React.useState<HTMLDivElement | undefined>(
    undefined
  );
  const [directionalLight] = React.useState<DirectionalLight>(
    new DirectionalLight(0xfdfcf0, 1)
  );
  const [renderer] = React.useState<WebGL1Renderer>(
    new WebGL1Renderer({ alpha: true, antialias: true })
  );
  const [orbitControls] = React.useState<OrbitControls>(
    new OrbitControls(camera, renderer.domElement)
  );
  const [scene] = React.useState<Scene>(new Scene());

  React.useEffect(() => {
    // * INITIALIZE
    console.log("INITIALIZE");

    directionalLight.position.set(20, 10, 20);
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;

    // * Add objects to scene
    scene.add(directionalLight);
    scene.add(ambientLight);

    // * North Side = 329 inches
    // * East Side = 310 inches

    const rooms = [
      new Room({
        color: "yellow",
        floors: [],
        name: "kitchen",
        walls: [
          {
            center: { x: -55.5, y: 0, z: 24 },
            rotation: { x: 0, y: 0, z: 0 },
            width: 111,
          },
          {
            center: { x: -111, y: 0, z: 126 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 204,
          },
          {
            center: { x: -13, y: 0, z: 179.5 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 97,
          },
        ],
      }),
      new Room({
        color: "blue",
        floors: [
          {
            center: { x: 0, z: 0 },
            color: 0x523b31,
            height: 100,
            width: 100,
          },
        ],
        name: "livingroom",
        walls: [
          {
            center: { x: 218, y: 0, z: 62.5 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 173,
          },
          {
            center: { x: 109, y: 0, z: -24 },
            rotation: { x: 0, y: 0, z: 0 },
            width: 218,
          },
          {
            center: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 48,
          },
        ],
      }),
      new Room({
        color: "green",
        floors: [],
        name: "bedroom",
        walls: [
          {
            center: { x: 107.5, y: 0, z: 286 },
            rotation: { x: 0, y: 0, z: 0 },
            width: 153,
          },
          {
            center: { x: 31, y: 0, z: 217.5 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 137,
          },
          {
            center: { x: 124.5, y: 0, z: 149 },
            rotation: { x: 0, y: 0, z: 0 },
            width: 187,
          },
        ],
      }),
      new Room({
        color: "purple",
        floors: [],
        name: "closet",
        walls: [
          {
            center: { x: 218, y: 0, z: 217.5 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 137,
          },
          {
            center: { x: 184, y: 0, z: 217.5 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 137,
          },
          {
            center: { x: 201, y: 0, z: 286 },
            rotation: { x: 0, y: 0, z: 0 },
            width: 34,
          },
        ],
      }),
      new Room({
        color: "pink",
        floors: [],
        name: "bathroom",
        walls: [
          {
            center: { x: -111, y: 0, z: 256.5 },
            rotation: { x: 0, y: 90, z: 0 },
            width: 59,
          },
          {
            center: { x: -40, y: 0, z: 286 },
            rotation: { x: 0, y: 0, z: 0 },
            width: 142,
          },
          {
            center: { x: -40, y: 0, z: 228 },
            rotation: { x: 0, y: 0, z: 0 },
            width: 142,
          },
        ],
      }),
    ];

    rooms.forEach((room) => scene.add(room.object));

    // * Position Camera
    camera.position.set(0, 500, 0);
    // orbitControls.target.set(50, 0, 100);

    // * Listeners
    window.addEventListener(
      "resize",
      () => {
        const height = window.innerHeight;
        const width = window.innerWidth;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      },
      false
    );

    renderer.setAnimationLoop((time: number, frame?: XRFrame) => {
      // * Runs n times per second (usually 60)
      // * This is framerate determined (I think)
      // orbitControls.update();
      renderer.render(scene, camera);
    });
  }, []);

  React.useEffect(() => {
    if (container) {
      container.appendChild(renderer.domElement);
    }
  }, [container]);

  return (
    <div
      id="scene"
      ref={(containerRef) => {
        if (containerRef) {
          setContainer(containerRef);
        }
      }}
    ></div>
  );
};

export default Apartment;
