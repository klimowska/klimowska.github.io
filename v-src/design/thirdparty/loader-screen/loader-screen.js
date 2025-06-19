import { html, css, LitElement } from '/v-src/modules/lit-core.min.js';
import '/v-src/design/components/loader/loader.js';

export class LoaderScreen extends LitElement {
    static styles = css`
    .arjs-loader {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `;

    render() {
        return html`
            <div class="arjs-loader">
                <l-loader />
            </div>
        `;
    }
}

customElements.define('l-loader-screen', Loader);
