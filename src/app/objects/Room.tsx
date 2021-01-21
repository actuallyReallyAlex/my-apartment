import * as React from "react";
import * as THREE from "three";
import { Object3D } from "three";

import Floor from "./Floor";
import Wall from "./Wall";

import { RoomProps } from "../../types";

class Room extends React.Component<unknown, unknown> {
  constructor(props: RoomProps) {
    super(props);
    this.object = new THREE.Object3D();
    this.color = props.color || "grey";
    this.floors = props.floors.map(
      (floorProp, i) => new Floor({ ...floorProp, name: `${this.name}-${i}` })
    );
    this.name = props.name;
    this.walls = props.walls.map(
      (wallProp, i) =>
        new Wall({ ...wallProp, color: this.color, name: `${this.name}-${i}` })
    );
    this.init();
  }

  color?: string;
  floors: Floor[];
  object: Object3D;
  name: string;
  walls: Wall[];

  init(): void {
    // * Name of Room
    this.object.name = this.name;

    // * Walls
    this.walls.forEach((wall) => {
      this.object.add(wall.object);
    });

    // * Floor
    // * Assemble rectangles of floor together to make 1 big floor
    this.floors.forEach((floor) => {
      this.object.add(floor.object);
    });
  }
}

export default Room;
