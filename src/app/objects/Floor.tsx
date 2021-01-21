import * as React from "react";
import * as THREE from "three";

import { Mesh, Object3D } from "three";

import { Coordinate2DZAxis, FloorProps } from "../../types";

class Floor extends React.Component<unknown, unknown> {
  constructor(props: FloorProps) {
    super(props);
    this.center = props.center;
    this.color = props.color;
    this.height = props.height;
    this.name = props.name || "floor";
    this.object = new Object3D();
    this.width = props.width;

    this.init();
  }

  center: Coordinate2DZAxis;
  color: number | string;
  height: number;
  name: string;
  object: Object3D;
  width: number;

  init(): void {
    // * Name
    this.object.name = this.name;

    const material = new THREE.MeshPhysicalMaterial({
      color: this.color,
      roughness: 1,
    });
    const mesh = new Mesh(
      new THREE.PlaneBufferGeometry(this.width, this.height),
      material
    );

    mesh.rotateX(-Math.PI / 2);
    mesh.position.set(this.center.x, -48, this.center.z);

    this.object.add(mesh);
  }
}

export default Floor;
