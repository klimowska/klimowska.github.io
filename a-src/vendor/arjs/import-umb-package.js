import { handleImport } from "/a-src/lib/dynamic-import/index.js";

const SRC =
  "https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.7/aframe/build/aframe-ar-nft.js";
const INTEGRITY =
  "sha384-hXOAn1AExl0RlIhkH9Y4Rerf6afiuZTCMPxETsZmarpSf7+jqsBbV8jq+XkP8KD+";
// download at https://github.com/AR-js-org/AR.js/tree/3.4.7/aframe/build

await handleImport(SRC, INTEGRITY);
