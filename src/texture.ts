import * as THREE from "three";

// Texture loader:
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const matcapTexture1 = textureLoader.load("/textures/matcaps/1.png");
matcapTexture1.colorSpace = THREE.SRGBColorSpace;
const matcapTexture2 = textureLoader.load("/textures/matcaps/2.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;
const matcapTexture3 = textureLoader.load("/textures/matcaps/3.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;
const matcapTexture4 = textureLoader.load("/textures/matcaps/4.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;
const matcapTexture5 = textureLoader.load("/textures/matcaps/5.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;
const matcapTexture6 = textureLoader.load("/textures/matcaps/6.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;
const matcapTexture7 = textureLoader.load("/textures/matcaps/7.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;
const matcapTexture8 = textureLoader.load("/textures/matcaps/8.png");
matcapTexture2.colorSpace = THREE.SRGBColorSpace;

export const matcapTextures = [
  matcapTexture1,
  matcapTexture2,
  matcapTexture3,
  matcapTexture4,
  matcapTexture5,
  matcapTexture6,
  matcapTexture7,
  matcapTexture8,
];
