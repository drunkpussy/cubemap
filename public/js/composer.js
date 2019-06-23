export function setUpComposer(renderer, scene, camera) {
    // Post-processing inits
    let composer = new THREE.EffectComposer(renderer);

    // render pass
    const renderPass = new THREE.RenderPass(scene, camera);

    const renderTargetParameters = {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        stencilBuffer: false
    };

    // save pass
    const savePass = new THREE.SavePass(
        new THREE.WebGLRenderTarget(
            document.body.clientWidth,
            document.body.clientHeight,
            renderTargetParameters
        )
    );

    // blend pass
    const blendPass = new THREE.ShaderPass(THREE.BlendShader, "tDiffuse1");
    blendPass.uniforms["tDiffuse2"].value = savePass.renderTarget.texture;
    blendPass.uniforms["mixRatio"].value = 0.8;

    // output pass
    const outputPass = new THREE.ShaderPass(THREE.CopyShader);
    
    // adding passes to composer
    composer.addPass(renderPass);
    composer.addPass(blendPass);
    composer.addPass(savePass);
    composer.addPass(outputPass);

    outputPass.renderToScreen = true;

    return composer;
}