import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { matcapTextures } from "./texture";

// Fonts
const fontLoader = new FontLoader();

export const addTextGeometry = (
  scene: THREE.Scene,
  title = "Three.js Donuts"
) => {
  fontLoader.load("/fonts/helvetiker_bold.typeface.json", (font) => {
    const textGeometry = new TextGeometry(title, {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 5,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 4,
    });
    textGeometry.computeBoundingBox();
    const textMaterial = new THREE.MeshMatcapMaterial({
      matcap: matcapTextures[3],
    });
    const text = new THREE.Mesh(textGeometry, textMaterial);
    textGeometry.center();

    scene.add(text);
  });
};
