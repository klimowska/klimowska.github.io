import { createVendorScript } from '/v-src/lib/createVendorScript.js';

// const SRC = 'https://cdnjs.cloudflare.com/ajax/libs/aframe/1.7.0/aframe.min.js';
// const INTEGRITY = 'sha512-QRe0tMdbQUsh9BJOh+ijnsJaLoO68ku2a9/7HmQCIvqpeWRkqc4Ee0Ohjvt6y7Fx/ShFTLoL/H3ZgxZrXB7ERA==';

const SRC = 'https://cdn.jsdelivr.net/gh/aframevr/aframe@1.4.0/aframe/dist/aframe-v1.4.0.js';
const INTEGRITY = 'sha384-fxhhFblRQEyLTZTLdKeMxcK2QNlvGKAtjxTt9vemHGRx5TH7dMM8Qh0vp5rBCxs9';


export const importAframe = () => createVendorScript(SRC, INTEGRITY);
