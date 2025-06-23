import { html } from '/a-src/vendor/lit-core.min.js';

import { joinPaths, loggedValidate } from '/a-src/features/augmented-reality/lib/index.js';

export function renderArjsNft(nftFilestem, children) {
    const enableCameraSmoothing = true;
    const numberOfCameraPositionForSmoothing = 10;
    const distanceToIgnoreRerender = 0.01;
    const numberOfNotIgnoredDistances = 2;

    function resolveNftFilestem(nftFilestem) {
        if (!nftFilestem)
            return '';

        if (nftFilestem.startsWith('/'))
            return nftFilestem;

        const sanitizedPathname = 
            loggedValidate(window.location.pathname, /^\/[a-zA-Z0-9-/]+$/);
        return sanitizedPathname 
            ? joinPaths(sanitizedPathname, nftFilestem) 
            : '';
    }

    const resolvedNftFilestem = resolveNftFilestem(nftFilestem);
    return html`
        <a-nft 
            type='nft' 
            url='${resolvedNftFilestem}'
            ?smooth='${enableCameraSmoothing}'
            smoothCount='${numberOfCameraPositionForSmoothing}'
            smoothThreshold='${numberOfNotIgnoredDistances}'
            smoothTolerance='${distanceToIgnoreRerender}'
        >
            ${children}
        </a-nft>
    `;
}
