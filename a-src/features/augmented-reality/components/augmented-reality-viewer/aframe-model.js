import { html } from "/a-src/vendor/lit/index.js";
import "/a-src/vendor/aframe/index.js";

export function renderAframeModel(
  modelUrl,
  modelScale,
  modelPosition,
  animate
) {
  return html`
    <a-entity
      gltf-model="${modelUrl}"
      scale="${modelScale}"
      position="${modelPosition}"
      ?animation-mixer="${animate}"
    >
    </a-entity>
  `;
}
