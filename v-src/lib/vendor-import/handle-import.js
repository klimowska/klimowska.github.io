import { _importScript } from './_import-script.js'

export async function handleImport(src, integrity) {
    try {
        await _importScript(src, integrity);
    } catch (e) {
        throw new Error('Download dependency failure')
    }
}