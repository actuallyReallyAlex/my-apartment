import { Degree, Radian } from "../types";

export const degreeToRadian = (degree: Degree): Radian =>
  degree * (Math.PI / 180);
