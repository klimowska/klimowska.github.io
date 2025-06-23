import { html, LitElement } from "/a-src/vendor/lit/index.js";
import "/a-src/vendor/aframe/index.js";
import "/a-src/vendor/arjs/index.js";

import { renderAframeModel } from "./aframe-model.js";
import { renderAframeScene } from "./aframe-scene.js";
import "./arjs-loader-screen.js";
import { renderArjsNft } from "./arjs-nft.js";

export class AugmentedRealityViewer extends LitElement {
  static properties = {
    nftFilestem: { type: String, attribute: "nft-filestem" },
    modelUrl: { type: String, attribute: "model-url" },
    modelScale: { type: String, attribute: "model-scale" },
    modelPosition: { type: String, attribute: "model-position" },
    animate: { type: Boolean, converter: (v) => v === "active" },
  };

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <l-arjs-loader-screen></l-arjs-loader-screen>
      ${renderAframeScene(
        true,
        renderArjsNft(
          this.nftFilestem,
          renderAframeModel(
            this.modelUrl,
            this.modelScale,
            this.modelPosition,
            this.animate
          )
        )
      )}
      </l-aframe-scene>
    `;
  }
}

customElements.define("l-augmented-reality-viewer", AugmentedRealityViewer);
