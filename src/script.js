import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

// import { GroundProjectedSkybox } from 'three/addons/objects/GroundProjectedSkybox.js';

// import { GroundProjectedSkybox } from 'three/examples/jsm/objects/GroundProjectedSkybox.js';

/**
 * Loaders
 */

const gltfLoader = new GLTFLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
const rgbeLoader = new RGBELoader();
const exrLoader = new EXRLoader();
const textureLoader = new THREE.TextureLoader();

/**
 * Base
 */
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Update All Materials
 */
const global = {};

const updateAllMaterials = () => {
  scene.traverse((child) => {
    if (child.isMesh && child.material.isMeshStandardMaterial) {
      child.material.envMapIntensity = global.envMapIntensity;
    }
  });
};

/**
 *Environment Map
 */

scene.backgroundBlurriness = 0;
scene.backgroundIntensity = 1;

gui.add(scene, 'backgroundBlurriness').min(0).max(1).step(0.001);
gui.add(scene, 'backgroundIntensity').min(0).max(10).step(0.01);

// Global intensity
global.envMapIntensity = 1;
gui
  .add(global, 'envMapIntensity')
  .min(0)
  .max(10)
  .step(0.001)
  .onChange(updateAllMaterials);

//LDR Cube Texture
// const environmentMap = cubeTextureLoader.load([
//   '/environmentMaps/0/px.png',
//   '/environmentMaps/0/nx.png',
//   '/environmentMaps/0/py.png',
//   '/environmentMaps/0/ny.png',
//   '/environmentMaps/0/pz.png',
//   '/environmentMaps/0/nz.png',
// ]);
// scene.environment = environmentMap;
// scene.background = environmentMap;

// HDR (RGBE) euuirectangular
// rgbeLoader.load('/environmentMaps/0/2k.hdr', (environmentMap) => {
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping;

//   scene.background = environmentMap;
//   scene.environment = environmentMap;
// });

// HDR (EXR) equirectangular
// exrLoader.load('/environmentMaps/nvidiaCanvas-4k.exr', (environmentMap) => {
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping;

//   scene.background = environmentMap;
//   scene.environment = environmentMap;
// });

// LDR equirectangular
// const environmentMap = textureLoader.load(
//   '/environmentMaps/blockadesLabsSkybox/anime_art_style_japan_streets_with_cherry_blossom_.jpg',
//   (environmentMap) => {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//     environmentMap.colorSpace = THREE.SRGBColorSpace;

//     scene.background = environmentMap;
//     scene.environment = environmentMap;
//   }
// );

//Ground projected skybox

// rgbeLoader.load('/environmentMaps/2/2k.hdr', (environmentMap) => {
//   environmentMap.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = environmentMap;

//   // Skybox
//   const skybox = new GroundProjectedSkybox(environmentMap);
//   skybox.scale.setScalar(50);

//   gui.add(skybox, 'radius', 1, 200, 0.1).name('skyboxRadius');
//   gui.add(skybox, 'height', 1, 100, 0.1).name('skyboxHeight');

//   scene.add(skybox);
// });

// Real time Environment Map.

const environmentMap = textureLoader.load(
  '/environmentMaps/blockadesLabsSkybox/digital_painting_neon_city_night_orange_lights_.jpg',
  (environmentMap) => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;
    environmentMap.colorSpace = THREE.SRGBColorSpace;

    scene.background = environmentMap;
  }
);

/**
 * Torus Knot
 */
const torusKnot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(1, 0.4, 100, 16),
  new THREE.MeshStandardMaterial({
    roughness: 0.3,
    metalness: 1,
    color: 0xaaaaaa,
  })
);
torusKnot.position.y = 4;
torusKnot.position.x = -4;
scene.add(torusKnot);

// Holy donut
const holyDonut = new THREE.Mesh(
  new THREE.TorusGeometry(8, 0.5),
  new THREE.MeshBasicMaterial({ color: new THREE.Color(10, 20, 40) })
);
holyDonut.layers.enable(1);
holyDonut.position.y = 3.5;
scene.add(holyDonut);

// Cube render target
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
  type: THREE.HalfFloatType,
});

scene.environment = cubeRenderTarget.texture;
/**
 * Models
 */

gltfLoader.load('/models/FlightHelmet/glTF/FlightHelmet.gltf', (gltf) => {
  gltf.scene.scale.set(10, 10, 10);
  scene.add(gltf.scene);

  updateAllMaterials();
});
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(4, 5, 4);
scene.add(camera);

// Cube camera
const cubeCamera = new THREE.CubeCamera(0.1, 100, cubeRenderTarget);
cubeCamera.layers.set(1);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.target.y = 3.5;
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();
const tick = () => {
  // Time
  const elapsedTime = clock.getElapsedTime();

  // Real time environment map
  if (holyDonut) {
    holyDonut.rotation.x = Math.sin(elapsedTime) * 2;
    cubeCamera.update(renderer, scene);
  }

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
