import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import { importArjs } from '/v-src/vendor/import-aframe.js';
import '/v-src/lib/path.js';
import '/v-src/lib/validate.js';

class ArjsNft extends LitElement {
    static properties = {
        nftFilestem: { type: String },
    };

    createRenderRoot() {
        return this;
    }

    async firstUpdated() {
        await importArjs();
    }

    get resolvedNftFilestem() {
        if (this.nftFilestem.startsWith('/'))
            return this.nftFilestem;

        const sanitizedPathname = 
            loggedValidate(window.location.pathname, /^\/[a-zA-Z0-9-/]+$/);
        return sanitizedPathname 
            ? joinPaths(sanitizedPathname, this.nftFilestem) 
            : '';
    }

    render() {
        return html`
            <a-nft type='nft' url='${this.resolvedNftFilestem}'>
                <slot></slot>
            </a-nft>
        `;
    }
};

customElements.define('l-arjs-nft', ArjsNft);
