import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import { importAframe } from '/v-src/vendor/import-aframe.js';

export function renderAframeScene(supportArjs, children) {
    return html`
        <a-scene ?arjs=${supportArjs}>
            ${children}
            <a-entity camera></a-entity>
        </a-scene>
    `
}
