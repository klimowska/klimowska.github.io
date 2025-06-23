import { loggedValidate } from "/a-src/lib/regex-validator/index.js";

export const joinPaths = (part1, part2) =>
  part1.replace(/^(.+)\/?$/, `$1`) + "/" + part2.replace(/^\/?(.+)\/?$/, `$1`);

export const resolveNftFilestem = (nftFilestem) => {
  if (!nftFilestem) return "";

  if (nftFilestem.startsWith("/")) return nftFilestem;

  const sanitizedPathname = loggedValidate(
    window.location.pathname,
    /^\/[a-zA-Z0-9-/]+$/
  );
  return sanitizedPathname ? joinPaths(sanitizedPathname, nftFilestem) : "";
};
