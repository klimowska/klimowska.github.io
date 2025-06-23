import { html, nothing } from "/a-src/vendor/lit/index.js";
import "/a-src/vendor/aframe/index.js";

import { getAttributeValue } from "../../utils/index.js";

export function renderAframeScene(supportArjs, children) {
  const hideVrButton = true;
  const bigScaleDifferencesHelper = true;
  const renderPrecision = "medium";
  const bestMethodForTracking = true;
  const useWebcamAsVideoSource = true;
  const debug = false;

  const aSceneAtributes = {
    arjs: supportArjs
      ? getAttributeValue([
          bestMethodForTracking ? "trackingMethod: best;" : "",
          useWebcamAsVideoSource ? "sourceType: webcam;" : "",
          debug ? "" : "debugUIEnabled: false;",
        ])
      : nothing,
    renderer: getAttributeValue([
      bigScaleDifferencesHelper ? "logarithmicDepthBuffer: true;" : "",
      renderPrecision ? `precision: ${renderPrecision};` : "",
    ]),
    xrModeUi: getAttributeValue([hideVrButton ? "enabled: false" : ""]),
  };

  return html`
    <a-scene
      arjs=${aSceneAtributes.arjs}
      renderer=${aSceneAtributes.renderer}
      xr-mode-ui=${aSceneAtributes.xrModeUi}
    >
      ${children}
      <a-entity camera></a-entity>
    </a-scene>
  `;
}
