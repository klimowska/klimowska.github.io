import { handleImport } from "/a-src/lib/dynamic-import/index.js";

const SRC = "https://cdnjs.cloudflare.com/ajax/libs/aframe/1.7.0/aframe.min.js";
const INTEGRITY =
  "sha512-QRe0tMdbQUsh9BJOh+ijnsJaLoO68ku2a9/7HmQCIvqpeWRkqc4Ee0Ohjvt6y7Fx/ShFTLoL/H3ZgxZrXB7ERA==";
// download at https://cdnjs.com/libraries/aframe

await handleImport(SRC, INTEGRITY);
