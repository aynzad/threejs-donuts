import * as THREE from "three";
import { addTextGeometry } from "./text";
import { donutsMeshes } from "./donuts";
import { camera } from "./camera";
import { addRenderer } from "./animation";

// Scene:
const scene = new THREE.Scene();
scene.background = new THREE.Color("#001A38");
// Text:
addTextGeometry(scene);

// Donuts:
donutsMeshes.forEach((donut) => scene.add(donut));

// Camera:
scene.add(camera);

// Render:
addRenderer(scene);
