import { html, LitElement } from '/a-src/vendor/lit-core.min.js';
import '/a-src/vendor/import-aframe.js';
import '/a-src/vendor/import-arjs.js';

import { renderAframeModel } from './aframe-model.js';
import { renderAframeScene } from './aframe-scene.js';
import './arjs-loader-screen.js';
import { renderArjsNft } from './arjs-nft.js';

export class SceneWithModel extends LitElement {
    static properties = {
        nftFilestem: { type: String, attribute: 'nft-filestem' },
        modelUrl: { type: String, attribute: 'model-url' },
        modelScale: { type: String, attribute: 'model-scale' },
        modelPosition: { type: String, attribute: 'model-position' },
    };

    createRenderRoot() {
        return this;
    }

    render() {
    console.log('pm_props', this.nftFilestem, this.modelUrl, this.modelScale, this.modelPosition);

        return html`
            <l-arjs-loader-screen></l-arjs-loader-screen>
            ${renderAframeScene(true, 
                renderArjsNft(this.nftFilestem,
                    renderAframeModel(
                        this.modelUrl,
                        this.modelScale,
                        this.modelPosition,
                    )
                )
            )}
            </l-aframe-scene>
        `;
    }
};

customElements.define('l-scene-with-model', SceneWithModel);