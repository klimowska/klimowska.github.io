import { handleImport } from '/v-src/lib/vendor-import/index.js';

const SRC = 'https://cdn.jsdelivr.net/gh/AR-js-org/AR.js@3.4.7/aframe/build/aframe-ar-nft.js';
const INTEGRITY = 'sha384-hXOAn1AExl0RlIhkH9Y4Rerf6afiuZTCMPxETsZmarpSf7+jqsBbV8jq+XkP8KD+';

await handleImport(SRC, INTEGRITY);
