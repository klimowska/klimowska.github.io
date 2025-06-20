import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import 'v-src/vendor/import-arjs.js';

class ArjsNft extends LitElement {
    static properties = {
        nftUrl: { type: String },
    };

    createRenderRoot() {
        return this;
    }

    firstUpdated() {
        await importArjs();
    }

    render() {
        return html`
            <a-nft type='nft' url='${this.nftUrl}'>
                <slot></slot>
            </a-nft>
        `;
    }
};

customElements.define('l-arjs-nft', ArjsNft);
