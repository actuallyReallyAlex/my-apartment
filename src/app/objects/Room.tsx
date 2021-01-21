import * as React from "react";
import * as THREE from "three";
import { Object3D } from "three";

import Wall from "./Wall";

import { WallProps } from "../../types";

interface RoomProps {
  color?: string;
  name: string;
  walls: WallProps[];
}

class Room extends React.Component<unknown, unknown> {
  constructor(props: RoomProps) {
    super(props);
    this.object = new THREE.Object3D();
    this.color = props.color || "grey";
    this.name = props.name;
    this.walls = props.walls.map(
      (wallProp, i) =>
        new Wall({ ...wallProp, color: this.color, name: `${this.name}-${i}` })
    );
    this.init();
  }

  color?: string;
  object: Object3D;
  name: string;
  walls: Wall[];

  init(): void {
    this.walls.forEach((wall) => {
      wall.object;
      this.object.add(wall.object);
    });
    this.object.name = this.name;
  }
}

export default Room;
