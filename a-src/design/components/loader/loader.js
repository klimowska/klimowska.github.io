import { html, css, LitElement } from "/a-src/vendor/lit/index.js";

const pallete_svg = "/a-src/assets/palette.svg";

export class Loader extends LitElement {
  static styles = css`
    @keyframes rotating {
      to {
        transform: rotate(360deg);
      }
    }

    .loader {
      animation-name: rotating;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
    }
  `;

  render() {
    return html`<image src="${pallete_svg}" alt="loading" class="loader" />`;
  }
}

customElements.define("l-loader", Loader);
