import { html, css, LitElement } from '/v-src/vendor/lit-core.min.js';
import { joinPaths } from '/v-src/lib/path.js';
import { loggedValidate } from '/v-src/lib/validate.js';

export function renderArjsNft(nftFilestem, children) {
    function resolvedNftFilestem(nftFilestem) {
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

    const resolvedNftFilestem = resolvedNftFilestem(nftFilestem);
    return html`
        <a-nft type='nft' url='${resolvedNftFilestem}'>
            ${children}
        </a-nft>
    `;
}
