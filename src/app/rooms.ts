import Room from "./objects/Room";

// * North Side of Apartment = 329 inches
// * East Side of Apartment = 310 inches
const rooms = [
  new Room({
    color: "yellow",
    floors: [
      {
        center: { x: -55.5, z: 126 },
        color: 0x523b31,
        height: 204,
        width: 111,
      },
      {
        center: { x: 15.5, z: 188.5 },
        color: 0x523b31,
        height: 79,
        width: 31,
      },
    ],
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
        center: { x: 109, z: 62.5 },
        color: 0x523b31,
        height: 173,
        width: 218,
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
    floors: [
      {
        center: { x: 107.5, z: 217.5 },
        color: 0xbfbab0,
        height: 137,
        width: 153,
      },
    ],
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
    floors: [
      {
        center: { x: 201, z: 217.5 },
        color: 0xbfbab0,
        height: 137,
        width: 34,
      },
    ],
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
    floors: [
      {
        center: { x: -40, z: 256.5 },
        color: 0x523b31,
        height: 59,
        width: 142,
      },
    ],
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

export default rooms;
