import { importScript } from "./import-script.js";

export async function handleImport(src, integrity) {
  try {
    await importScript(src, integrity);
  } catch (e) {
    throw new Error("Download dependency failure");
  }
}
