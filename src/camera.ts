import * as THREE from "three";
import { FOV, SCREEN_SIZE, canvas } from "./constants";

// Camera
export const camera = new THREE.PerspectiveCamera(
  FOV,
  SCREEN_SIZE.width / SCREEN_SIZE.height,
  1,
  100
);
camera.position.z = 5;
