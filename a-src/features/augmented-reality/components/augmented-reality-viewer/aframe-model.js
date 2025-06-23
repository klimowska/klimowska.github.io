import { html } from "/a-src/vendor/lit/index.js";
// import "/a-src/vendor/aframe/import.js";

export function renderAframeModel(modelUrl, modelScale, modelPosition) {
  return html`
    <a-entity
      gltf-model="${modelUrl}"
      scale="${modelScale}"
      position="${modelPosition}"
    >
    </a-entity>
  `;
}
