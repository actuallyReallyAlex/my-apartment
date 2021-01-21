import { Router } from "express";

export type Controller = {
  router: Router;
};

export type Coordinate = {
  x: number;
  y: number;
  z: number;
};

export type Degree = number;

export type Domain = string | undefined;

export type Radian = number;

export type Rotation = {
  x: Degree;
  y: Degree;
  z: Degree;
};

export interface WallProps {
  center: Coordinate;
  color?: string;
  name?: string;
  rotation: Coordinate;
  width: number;
}
