import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import '/v-src/vendor/import-aframe.js';

export function renderAframeModel(modelUrl, modelScale, modelPosition) {
    return html`
        <a-entity 
            gltf-model='${modelUrl}'
            scale='${modelScale}'
            position='${modelPosition}'>
        </a-entity>
    `;
}
