const vendorScriptsPromises = new Map();
console.log('createVendorScript file', vendorScriptsPromises);

export const createVendorScript = (src, integrity) => {
    console.log('createVendorScript()', src, vendorScriptsPromises);
    // const providePromisesMap = () => 
    //     window._vendorScriptPromises ??= new Map();
    const promisesMap = vendorScriptsPromises;

    const isImportNotInProgress = (k) => !promisesMap.has(k);
    const setImportInProgress = (k, v) => promisesMap.set(k, v);

    const createAndStartWait = (scriptElement) => 
        new Promise((resolve, reject) => {
            scriptElement.onload = resolve;
            scriptElement.onerror = reject;
        });

    const createScriptElement = (src, integrity) => {
        const scriptElement = document.createElement('script');
        scriptElement.src = src;
        scriptElement.integrity = integrity;
        scriptElement.crossOrigin = 'anonymous';
        return scriptElement;
    };
    const addScriptToHtml = (scriptElement) => 
        document.head.appendChild(scriptElement);

    const importScriptOnlyOnce = (src, integrity) => {
        if (isImportNotInProgress(src)) {
            const scriptElement = createScriptElement(src, integrity);
            const promise = createAndStartWait(scriptElement);
            setImportInProgress(src, promise);
            addScriptToHtml(scriptElement);
        }
        return promisesMap.get(src)
    };

    return importScriptOnlyOnce(src, integrity);
};