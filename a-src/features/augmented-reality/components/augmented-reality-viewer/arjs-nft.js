import { html } from "/a-src/vendor/lit/index.js";
// import "/a-src/vendor/arjs/import.js";

import { resolveNftFilestem } from "../../utils/index.js";

export function renderArjsNft(nftFilestem, children) {
  const resolvedNftFilestem = resolveNftFilestem(nftFilestem);
  const enableCameraSmoothing = true;
  const numberOfCameraPositionForSmoothing = 10;
  const distanceToIgnoreRerender = 0.01;
  const numberOfNotIgnoredDistances = 2;

  return html`
    <a-nft
      type="nft"
      url="${resolvedNftFilestem}"
      ?smooth="${enableCameraSmoothing}"
      smoothCount="${numberOfCameraPositionForSmoothing}"
      smoothThreshold="${numberOfNotIgnoredDistances}"
      smoothTolerance="${distanceToIgnoreRerender}"
    >
      ${children}
    </a-nft>
  `;
}
