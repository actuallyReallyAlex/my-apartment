import { Router } from "express";

export type Controller = {
  router: Router;
};

export type Coordinate2DZAxis = {
  x: number;
  z: number;
};

export type Coordinate3D = {
  x: number;
  y: number;
  z: number;
};

export type Degree = number;

export type Domain = string | undefined;

export interface FloorProps {
  center: Coordinate2DZAxis;
  color: number | string;
  height: number;
  name?: string;
  width: number;
}

export type Radian = number;

export interface RoomProps {
  color?: string;
  floors: FloorProps[];
  name: string;
  walls: WallProps[];
}

export type Rotation = {
  x: Degree;
  y: Degree;
  z: Degree;
};

export interface WallProps {
  center: Coordinate3D;
  color?: string;
  name?: string;
  rotation: Coordinate3D;
  width: number;
}
