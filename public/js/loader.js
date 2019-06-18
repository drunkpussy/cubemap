export function loadMaterial(name) {
    let materialArray = [];
    let texture_ft = new THREE.TextureLoader().load(`../img/test${name}/arid_ft.jpg`);
    let texture_bk = new THREE.TextureLoader().load(`../img/test${name}/arid_bk.jpg`);
    let texture_up = new THREE.TextureLoader().load(`../img/test${name}/arid_up.jpg`);
    let texture_dn = new THREE.TextureLoader().load(`../img/test${name}/arid_dn.jpg`);
    let texture_rt = new THREE.TextureLoader().load(`../img/test${name}/arid_rt.jpg`);
    let texture_lf = new THREE.TextureLoader().load(`../img/test${name}/arid_lf.jpg`);

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));

    for(let i = 0; i < 6; i++) {
        materialArray[i].side = THREE.BackSide;
    }

    return materialArray
}

export function loadCubemap(name) {
    let materialArray = loadMaterial(name);

    let cubemapGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    let cubemap = new THREE.Mesh(cubemapGeo, materialArray);

    return cubemap
}