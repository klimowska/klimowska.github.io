import '/v-src/lib/createVendorScript.js';

const SRC = 'https://cdnjs.cloudflare.com/ajax/libs/aframe/1.7.0/aframe.min.js';
const INTEGRITY = 'sha512-QRe0tMdbQUsh9BJOh+ijnsJaLoO68ku2a9/7HmQCIvqpeWRkqc4Ee0Ohjvt6y7Fx/ShFTLoL/H3ZgxZrXB7ERA==';

const importAframe = () => createVendorScript(SRC, INTEGRITY);
