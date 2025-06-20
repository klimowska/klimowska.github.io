import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import '/v-src/design/layouts/loader-screen/loader-screen.js';
import 'v-src/vendor/import-aframe.js';

export class ArjsLoaderScreen extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        this.hideAfterLoaded();
    }

    hideAfterLoaded() {
        window.addEventListener(
            'arjs-nft-loaded', () => this.remove(), { once: true });
    }

    firstUpdated() {
        await importArjs();
    }

    render() {
        return html`<l-loader-screen />`;
    }
}

customElements.define('l-arjs-loader-screen', ArjsLoaderScreen);
