import * as React from "react";
import {
  AmbientLight,
  DirectionalLight,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGL1Renderer,
  XRFrame,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Origin from "./objects/Origin";

import rooms from "./rooms";

import { Coordinate3D } from "../types";

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
  const [cameraPosition, setCameraPosition] = React.useState<Coordinate3D>({
    x: 0,
    y: 300,
    z: 0,
  });
  const [cameraLookAt, setCameraLookAt] = React.useState<Coordinate3D>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [container, setContainer] = React.useState<HTMLDivElement | undefined>(
    undefined
  );
  const [directionalLight] = React.useState<DirectionalLight>(
    new DirectionalLight(0xfdfcf0, 1)
  );
  const [renderer] = React.useState<WebGL1Renderer>(
    new WebGL1Renderer({ alpha: true, antialias: true })
  );
  const [origin] = React.useState<Origin>(new Origin({}));
  const [orbitControls] = React.useState<OrbitControls>(
    new OrbitControls(camera, renderer.domElement)
  );
  const [overheadView, setOverheadView] = React.useState<boolean>(false);
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

    // * Origin
    scene.add(origin.object);

    // * Rooms
    rooms.forEach((room) => scene.add(room.object));

    // * Position Camera
    // orbitControls.target.set(50, 0, 100);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);

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

    setTimeout(() => {
      setOverheadView(true);
    }, 5000);

    renderer.setAnimationLoop((time: number, frame?: XRFrame) => {
      // ! Issue - this doesn't have the state of <Apartment />
      // ! When state changes, this function doesn't know about it
      // ! I think this is why wonky stuff with the orbit controls were happening
      // * Runs n times per second (usually 60)
      // * This is framerate determined (I think)
      // orbitControls.update();
      // if (overheadView) {
      //   camera.lookAt(
      //     new Vector3(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z)
      //   );
      //   console.log("HERE 1");
      // } else {
      //   console.log("HERE 2");
      // }

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
