import { setUpControls } from './controls.js'
import { loadMaterial } from './loader.js'

let scene, camera, renderer;
let materialName = '1';

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000);
    camera.position.set(-900, -200, -900);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    setUpControls(camera, scene);
    let materialArray = loadMaterial(materialName);

    let cubemapGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    let cubemap = new THREE.Mesh(cubemapGeo, materialArray);
    scene.add(cubemap);
    animate();
}

function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

init();