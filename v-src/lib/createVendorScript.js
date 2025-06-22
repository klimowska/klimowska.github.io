const promisesMap = new Map();
console.log('createVendorScript file', promisesMap);

export const createVendorScript = (src, integrity) => {
    console.log('createVendorScript(src)', src);
    const existingPromise = promisesMap.get(src);
    const wasImportInitialized = !!existingPromise;
    const createPromise = (f) => new Promise(f);
    const setExistingPromise = (src, promise) => 
        promisesMap.set(src, promise);

    const createScriptElement = (src, integrity) => {
        const scriptElement = document.createElement('script');
        scriptElement.src = src;
        scriptElement.integrity = integrity;
        scriptElement.crossOrigin = 'anonymous';
        return scriptElement;
    };

    const fullfillPromise = (resolve) => resolve();
    const failPromise = (reject) => (promisesMap.delete(src), reject());

    const addScript = (scriptElement) => 
        document.head.appendChild(scriptElement);

    const importScript = (resolve, reject) => {
        const scriptElement = createScriptElement(src, integrity);
        scriptElement.onload = () => fullfillPromise(resolve);
        scriptElement.onerror = () => failPromise(reject);
        
        addScript(scriptElement);
    };

    if (wasImportInitialized) {
        return existingPromise;
    } else {
        const promise = createPromise(importScript);
        setExistingPromise(src, promise);
        return promise;
    }
};
