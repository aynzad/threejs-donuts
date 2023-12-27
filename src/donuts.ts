import * as THREE from "three";
import { matcapTextures } from "./texture";

// Donuts:
const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
const donutMaterials = matcapTextures.map(
  (matcapTexture) =>
    new THREE.MeshMatcapMaterial({
      matcap: matcapTexture,
      side: THREE.DoubleSide,
    })
);

export const donutsMeshes = new Array(100).fill(null).map(() => {
  const donut = new THREE.Mesh(
    donutGeometry,
    donutMaterials[Math.floor(Math.random() * matcapTextures.length)]
  );
  donut.position.x = (Math.random() - 0.5) * 10;
  donut.position.y = (Math.random() - 0.5) * 10;
  donut.position.z = (Math.random() - 0.5) * 10;

  donut.rotation.x = Math.random() * Math.PI;
  donut.rotation.y = Math.random() * Math.PI;

  const scale = Math.random();
  donut.scale.set(scale, scale, scale);

  return donut;
});
