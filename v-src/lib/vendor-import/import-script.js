const promisesMap = new Map();
let importQueuePromise = Promise.resolve();
console.log('importScript file', promisesMap);

export const _importScript = (src, integrity) => {
    console.log('importScript(src)', src);
    const existingPromise = promisesMap.get(src);
    const wasImportInitialized = !!existingPromise;
    const setExistingPromise = (src, promise) => 
        promisesMap.set(src, promise);

    const createScriptElement = (src, integrity) => {
        const scriptElement = document.createElement('script');
        scriptElement.src = src;
        scriptElement.integrity = integrity;
        scriptElement.crossOrigin = 'anonymous';
        return scriptElement;
    };

    const addScript = (scriptElement) => 
        document.head.appendChild(scriptElement);
    
    const importScript = (resolve, reject) => {
        const fullfillPromise = (resolve) => resolve();
        const failPromise = (reject) => (promisesMap.delete(src), reject());

        const scriptElement = createScriptElement(src, integrity);
        scriptElement.onload = () => fullfillPromise(resolve);
        scriptElement.onerror = () => failPromise(reject);
        
        addScript(scriptElement);
    };

    const promiseImportScript = () => new Promise(importScript);

    if (wasImportInitialized) {
        return existingPromise;
    } else {
        importQueuePromise = importQueuePromise.then(promiseImportScript);
        setExistingPromise(src, importQueuePromise);
        return importQueuePromise;
    }
};
