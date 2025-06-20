import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import 'v-src/lib/path.js';
import 'v-src/lib/validate.js';
import 'v-src/vendor/import-arjs.js';
import 'v-src/vendor/import-dompurify.js';

class ArjsNft extends LitElement {
    static properties = {
        nftUrl: { type: String },
    };

    createRenderRoot() {
        return this;
    }

    async firstUpdated() {
        await importArjs();
        await importDOMPurify();
    }

    get resolvedNftUrl() {
        if (this.nftUrl.startsWith('/'))
            return this.nftUrl;

        const sanitizedPathname = 
            loggedValidate(window.location.pathname, /^\/[a-zA-Z0-9-/]+$/);
        return sanitizedPathname 
            ? joinPaths(sanitizedPathname, this.nftUrl) 
            : '';
    }

    render() {
        return html`
            <a-nft type='nft' url='${this.resolvedNftUrl}'>
                <slot></slot>
            </a-nft>
        `;
    }
};

customElements.define('l-arjs-nft', ArjsNft);
