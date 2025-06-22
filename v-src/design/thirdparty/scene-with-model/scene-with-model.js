import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import { importAframe } from '/v-src/vendor/import-aframe.js';
import { importArjs } from '/v-src/vendor/import-arjs.js';

import { renderAframeModel } from './aframe-model.js';
import './aframe-scene.js';
import './arjs-loader-screen.js';
import { renderArjsNft } from './arjs-nft.js';

export class SceneWithModel extends LitElement {
    static properties = {
        nftFilestem: { type: String, attribute: 'nft-filestem' },
        modelUrl: { type: String, attribute: 'model-url' },
        modelScale: { type: String, attribute: 'model-scale' },
        modelPosition: { type: String, attribute: 'model-position' },
    };

    async firstUpdated() {
        await importAframe();
        await importArjs();
    }

    createRenderRoot() {
        return this;
    }

    render() {
    console.log('pm_props', this.nftFilestem, this.modelUrl, this.modelScale, this.modelPosition);

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