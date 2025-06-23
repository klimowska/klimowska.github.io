import { html, LitElement } from "/a-src/vendor/lit/index.js";
import "/a-src/vendor/arjs/index.js";

import "/a-src/design/layouts/loader-screen/loader-screen.js";

export class ArjsLoaderScreen extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.hideAfterLoaded();
  }

  hideAfterLoaded() {
    const arjsLoadedEventType = "arjs-nft-loaded";
    window.addEventListener(arjsLoadedEventType, () => this.remove(), {
      once: true,
    });
  }

  render() {
    return html`<l-loader-screen></l-loader-screen>`;
  }
}

customElements.define("l-arjs-loader-screen", ArjsLoaderScreen);
