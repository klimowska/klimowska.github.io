import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import { importAframe } from '/v-src/vendor/import-aframe.js';
import { importArjs } from '/v-src/vendor/import-arjs.js';
import '/v-src/design/thirdparty/scene-with-model/aframe-scene.js';
import '/v-src/design/thirdparty/scene-with-model/aframe-model.js';
import '/v-src/design/thirdparty/scene-with-model/arjs-loader-screen.js';
import '/v-src/design/thirdparty/scene-with-model/arjs-nft.js';

export class SceneWithModel extends LitElement {
    static properties = {
        nftFilestem: { type: String },
        modelUrl: { type: String },
        modelScale: { type: String },
        modelPosition: { type: String },
    };

    async firstUpdated() {
        await importAframe();
        await importArjs();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <l-arjs-loader-screen></l-arjs-loader-screen>
            <l-aframe-scene support-arjs>
                ${renderArjsNft(this.nftFilestem,
                    renderAframeModel(
                        this.modelUrl,
                        this.modelScale,
                        this.modelPosition,
                    )
                )}
            </l-aframe-scene>
        `;
    }
};

customElements.define('l-scene-with-model', SceneWithModel);