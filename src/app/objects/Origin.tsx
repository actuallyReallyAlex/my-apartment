import * as React from "react";
import * as THREE from "three";
import { Object3D, Mesh, MeshBasicMaterial, BoxGeometry } from "three";

class Origin extends React.Component<unknown, unknown> {
  constructor(props: unknown) {
    super(props);
    this.object = new THREE.Object3D();
    this.init();
  }

  object: Object3D;

  init(): void {
    // * Name
    this.object.name = "origin";

    // * 1 unit === 1 inch
    // * 480 = "20 feet above the plane of axis and 20 feet below"
    const geometry = new BoxGeometry(2, 480, 2);
    const material = new MeshBasicMaterial({ color: "red" });
    const mesh = new Mesh(geometry, material);

    this.object.add(mesh);
    this.object.position.set(0, 0, 0);
  }
}

export default Origin;
