import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

THREE.ColorManagement.enabled = false;

const gui = new dat.GUI();
/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const doorcolorTexture = textureLoader.load('textures/door/color.jpg');
const dooralphaTexture = textureLoader.load('textures/door/alpha.jpg');
const doorheightTexture = textureLoader.load('textures/door/height.jpg');
const doornormalTexture = textureLoader.load('textures/door/normal.jpg');
const doorambientOcclusionTexture = textureLoader.load(
  'textures/door/ambientOcclusion.jpg'
);
const doormetalnessTexture = textureLoader.load('textures/door/metalness.jpg');
const doorroughnessTexture = textureLoader.load('textures/door/roughness.jpg');
const matcapTexture = textureLoader.load('textures/matcaps/3.png');
const gradientTexture = textureLoader.load('textures/gradients/3.jpg');
gradientTexture.minFilter = THREE.NearestFilter;
gradientTexture.magFilter = THREE.NearestFilter;
gradientTexture.generateMipmaps = false;

const environmentMapTexture = cubeTextureLoader.load([
  '/textures/environmentMaps/0/px.jpg',
  '/textures/environmentMaps/0/nx.jpg',
  '/textures/environmentMaps/0/py.jpg',
  '/textures/environmentMaps/0/ny.jpg',
  '/textures/environmentMaps/0/pz.jpg',
  '/textures/environmentMaps/0/nz.jpg',
]);

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Object
 */

// const material = new THREE.MeshBasicMaterial();
// material.map = doorcolorTexture;
// material.color = new THREE.Color(0x655645);
// material.wireframe = true;
// material.transparent = true;
// material.opacity = 0.5;
// material.alphaMap = dooralphaTexture;
// material.side = THREE.DoubleSide;

// const material = new THREE.MeshNormalMaterial();
// material.flatShading = true;

// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcapTexture;

// const material = new THREE.MeshDepthMaterial();

// const material = new THREE.MeshLambertMaterial();

// const material = new THREE.MeshPhongMaterial();
// material.shininess = 100;
// material.specular = new THREE.Color(0xff0000);

// const material = new THREE.MeshToonMaterial();
// material.gradientMap = gradientTexture;

// const material = new THREE.MeshStandardMaterial();
// // material.metalness = 0.45;
// // material.roughness = 0.65;
// material.map = doorcolorTexture;
// material.aoMap = doorambientOcclusionTexture;
// material.aoMapIntensity = 10;
// material.displacementMap = doorheightTexture;
// material.displacementScale = 0.05;
// material.metalnessMap = doormetalnessTexture;
// material.roughnessMap = doorroughnessTexture;
// material.normalMap = doornormalTexture;
// material.normalScale.set(0.7, 0.7);
// material.transparent = true;
// material.alphaMap = dooralphaTexture;

const material = new THREE.MeshStandardMaterial();
material.metalness = 0.45;
material.roughness = 0.65;
material.envMap = environmentMapTexture;

gui.add(material, 'metalness').min(0).max(1).step(0.001);
gui.add(material, 'roughness').min(0).max(1).step(0.001);
gui.add(material, 'displacementScale').min(0).max(1).step(0.001);

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 64, 64), material);
sphere.position.x = -1.5;
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 100, 100), material);
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 64, 128),
  material
);
torus.position.x = 1.5;
scene.add(sphere, plane, torus);

/**
 * Lights
 */

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 2;
scene.add(pointLight);

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
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update Object

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
