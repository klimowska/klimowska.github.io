import { html } from '/a-src/vendor/lit-core.min.js';
// import '/a-src/vendor/import-aframe.js';

export function renderAframeModel(modelUrl, modelScale, modelPosition) {
    return html`
        <a-entity 
            gltf-model='${modelUrl}'
            scale='${modelScale}'
            position='${modelPosition}'>
        </a-entity>
    `;
}
