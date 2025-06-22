import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';

export function renderAframeModel(modelUrl, modelScale, modelPosition) {
    return html`
        <a-entity 
            gltf-model='${modelUrl}'
            scale='${modelScale}'
            position='${modelPosition}'>
        </a-entity>
    `;
}
