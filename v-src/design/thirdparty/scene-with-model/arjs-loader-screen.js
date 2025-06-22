import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
// import '/v-src/vendor/import-arjs.js';

import '/v-src/design/layouts/loader-screen/loader-screen.js';

export class ArjsLoaderScreen extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        this.hideAfterLoaded();
    }

    hideAfterLoaded() {
        const arjsLoadedEventType = 'arjs-nft-loaded';
        window.addEventListener(
            arjsLoadedEventType, () => this.remove(), { once: true });
    }

    render() {
        return html`<l-loader-screen />`;
    }
}

customElements.define('l-arjs-loader-screen', ArjsLoaderScreen);
