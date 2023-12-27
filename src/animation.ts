import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { SCREEN_SIZE, canvas } from "./constants";
import { donutsMeshes } from "./donuts";
import { camera } from "./camera";

export const addRenderer = (scene: THREE.Scene) => {
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);
  renderer.render(scene, camera);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Controls :
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  const tick = () => {
    // Update objects
    donutsMeshes.forEach((donut, index) => {
      donut.rotation.x += 0.02 * Math.random();
      donut.rotation.y += 0.02 * Math.random();
    });

    controls.update();
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
  };

  tick();

  window.addEventListener("resize", () => {
    SCREEN_SIZE.height = window.innerHeight;
    SCREEN_SIZE.width = window.innerWidth;

    camera.aspect = SCREEN_SIZE.width / SCREEN_SIZE.height;
    camera.updateProjectionMatrix();

    renderer.setSize(SCREEN_SIZE.width, SCREEN_SIZE.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  return renderer;
};
