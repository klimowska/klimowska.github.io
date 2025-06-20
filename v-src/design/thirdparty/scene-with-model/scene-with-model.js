import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import '/v-src/design/thirdparty/scene-with-model/aframe-scene.js';
import '/v-src/design/thirdparty/scene-with-model/aframe-model.js';
import '/v-src/design/thirdparty/scene-with-model/arjs-loader-screen.js';
import '/v-src/design/thirdparty/scene-with-model/arjs-nft.js';

class SceneWithModel extends LitElement {
    static properties = {
        nftFilestem: { type: String },
        modelUrl: { type: String },
        modelScale: { type: String },
        modelPosition: { type: String },
    };

    render() {
        return html`
            <l-arjs-loader-screen></l-arjs-loader-screen>
            <l-aframe-scene support-arjs>
                <l-arjs-nft nft-url='${this.nftFilestem}'>
                    <l-aframe-model
                        model-url='${this.modelUrl}'
                        model-scale='${this.modelScale}'
                        model-position='${this.modelPosition}'>
                    </l-aframe-model>
                </l-arjs-nft>
            </l-aframe-scene>
        `;
    }
};

customElements.define('l-scene-with-model', SceneWithModel);