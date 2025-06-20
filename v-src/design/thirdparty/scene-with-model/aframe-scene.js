import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import 'v-src/vendor/import-aframe.js';

class AframeScene extends LitElement {
    static properties = {
        supportArjs: { type: Boolean },
    };

    createRenderRoot() {
        return this;
    }

    async firstUpdated() {
        await importAframe();
    }

    render() {
        return html`
            <a-scene ?arjs=${this.supportArjs}>
                <slot></slot>
                <a-entity camera></a-entity>
            </a-scene>
        `;
    }
};

customElements.define('l-aframe-scene', AframeScene);
