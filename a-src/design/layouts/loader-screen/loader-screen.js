import { html, css, LitElement } from '/a-src/vendor/lit-core.min.js';

import '/a-src/design/components/loader/loader.js';

export class LoaderScreen extends LitElement {
    static styles = css`
        :host {
            position: fixed;
            inset: 0;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `;

    render() {
        return html`<l-loader />`;
    }
}

customElements.define('l-loader-screen', LoaderScreen);
