import * as React from "react";
import * as THREE from "three";
import { Object3D } from "three";

import { degreeToRadian } from "../util";

import { Coordinate, Rotation, WallProps } from "../../types";

class Wall extends React.Component<unknown, unknown> {
  constructor(props: WallProps) {
    super(props);
    this.object = new THREE.Object3D();
    this.center = props.center;
    this.color = props.color || "grey";
    this.name = props.name;
    this.rotation = props.rotation;
    this.width = props.width;
    this.init();
  }

  center: Coordinate;
  color: string;
  name?: string;
  object: Object3D;
  rotation: Rotation;
  width: number;

  init(): void {
    // * 1 unit === 1 inch
    const geometry = new THREE.BoxGeometry(this.width, 96, 4.5);
    const material = new THREE.MeshPhongMaterial({ color: this.color });
    const mesh = new THREE.Mesh(geometry, material);

    this.object.add(mesh);
    this.object.position.set(this.center.x, this.center.y, this.center.z);
    // * Convert degrees to radians
    const convertedRotation = {
      x: degreeToRadian(this.rotation.x),
      y: degreeToRadian(this.rotation.y),
      z: degreeToRadian(this.rotation.z),
    };
    this.object.rotation.set(
      convertedRotation.x,
      convertedRotation.y,
      convertedRotation.z
    );
  }
}

export default Wall;
