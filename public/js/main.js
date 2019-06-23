import { setUpControls } from './controls.js'
import { setUpComposer } from './composer.js'
import { loadCubemap } from './loader.js'

let scene, camera, renderer;
let materialName = '1';
let counter = 0;
let fov, zoom = 1.0, inc = -0.007;
let composer;
let cubemap;

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000);
    camera.position.set(-900, -100, -900);
    fov = camera.fov

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    
    composer = setUpComposer(renderer, scene, camera)
    setUpControls(camera, scene);
    cubemap = loadCubemap(materialName)

    scene.add(cubemap);
    animate();

}

function animate(currentCube) {
    counter += 2;
    // console.log(counter)
    renderer.render(scene, camera);
    requestAnimationFrame(animate);

    if (counter == 100) {
        // console.log(camera.position)
    } else if (counter > 100 && counter < 300) {
        // camera.fov = fov * zoom;
        // camera.updateProjectionMatrix();
        // zoom += inc;
        composer.render();
        cubemap.position.z -= 30;
    } else if (counter == 300) {
        // console.log(scene)
        camera.position.set(-900, -100, -900);
        scene.remove(scene.children[0])
        materialName = '2';
        cubemap = loadCubemap(materialName)
        scene.add(cubemap);
    }

    
}

init();