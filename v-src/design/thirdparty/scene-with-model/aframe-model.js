import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import 'v-src/vendor/import-aframe.js';

class AframeModel extends LitElement {
    static properties = {
        modelUrl: { type: String },
        modelScale: { type: String },
        modelPosition: { type: String },
    };

    createRenderRoot() {
        return this;
    }

    firstUpdated() {
        await importAframe();
    }

    render() {
        return html`
            <a-entity 
                gltf-model='${this.modelUrl}'
                scale='${this.modelScale}'
                position='${this.modelPosition}'>
            </a-entity>
        `;
    }
};

customElements.define('l-aframe-model', AframeModel);
