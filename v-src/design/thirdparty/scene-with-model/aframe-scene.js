import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import { importAframe } from '/v-src/vendor/import-aframe.js';

export class AframeScene extends LitElement {
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

// export function renderAframeScene(supportArjs, children) {
//     return html`
//         <a-scene ?arjs=${supportArjs}>
//             ${children}
//             <a-entity camera></a-entity>
//         </a-scene>

//     `
// }
